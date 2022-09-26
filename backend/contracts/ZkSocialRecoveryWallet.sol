//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
import './Verifiers/HashCheckVerifier.sol';
import './ZkOtpValidator.sol';
import 'hardhat/console.sol';

interface IHashCheckVerifier {
  function verifyProof(
    uint256[2] memory a,
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[1] memory input
  ) external view returns (bool);
}

contract ZkSocialRecoveryWallet is IERC721Receiver, ZkOtpValidator {
  address hashCheckVerifier;

  address public owner;

  uint256 private ownerPasswordHash;

  uint256 private thresholdForRecovery;

  uint256 public currentRecoveryNumber;
  //to retrieve in frontend
  uint256 public numberTrustees;
  address[] public Trustees;

  mapping(address => bool) Trustee;

  mapping(address => uint256) trusteeToPasswordHash;

  mapping(address => bool) pastOwners;

  mapping(uint256 => bool) usedProofs;

  bool public isRecoveryOn;

  struct RecoveryProcedure {
    uint256 numberOfVotesInSupport;
    address newOwnerProposed;
    bool isPassed;
    mapping(address => bool) trusteeSupporters;
  }

  mapping(uint256 => RecoveryProcedure) recoveryRoundNumberToProcedure;

  event NewRecoveryProcedure(
    address indexed newProposedOwner,
    address indexed trusteeInitializer,
    uint256 currRecoveryRound
  );

  event VotedInRecovery(address indexed trustee, uint256 RecoveryRound);

  event RecoveryExecuted(
    address indexed oldOwner,
    address indexed newOwner,
    uint256 RecoveryRound
  );

  event RecoveryCancelled(address indexed Owner, uint256 RecoveryRound);

  modifier RecoveryShouldBeInProcess() {
    require(isRecoveryOn, 'Recovery has not started');
    _;
  }

  modifier RecoveryShouldNotBeInProcess() {
    require(!isRecoveryOn, 'Recovery is in process');
    _;
  }

  modifier isOwner() {
    require(owner == msg.sender, 'Not Owner');
    _;
  }

  modifier isTrustee() {
    require(Trustee[msg.sender], 'Not Trustee');
    _;
  }

  modifier verifyProofForTrustee(
    uint256[2] memory a,
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[1] memory Input
  ) {
    require(
      IHashCheckVerifier(hashCheckVerifier).verifyProof(a, b, c, Input),
      'Password proof invalid!'
    );
    require(!usedProofs[a[0]], 'Proof is used');

    _;

    usedProofs[a[0]] = true;
  }

  constructor(
    address _hashCheckVerifier,
    uint256 _ownerPasswordHash,
    uint256 _thresholdForRecovery,
    uint256 _root,
    address _otpMerkleTreeVerifier
  ) ZkOtpValidator(_root, _otpMerkleTreeVerifier) {
    require(_hashCheckVerifier != address(0), 'Zero address verifier');

    hashCheckVerifier = _hashCheckVerifier;
    owner = msg.sender;
    ownerPasswordHash = _ownerPasswordHash;
    thresholdForRecovery = _thresholdForRecovery;
  }

  // To set trustees after deployment
  function setTrustees(address[] memory _trustees) external isOwner {
      for (uint256 i = 0; i < _trustees.length; i++) {
      require(!Trustee[_trustees[i]], 'Duplicate trustee in list');
      Trustee[_trustees[i]] = true;
    }
    Trustees = _trustees;
    numberTrustees = _trustees.length;
    }

  // Set trustees password after deployment
function setTrusteesPasswords(uint256[] memory _passwordHashes) external isOwner {
    require(
      Trustees.length == _passwordHashes.length,
      'Trustees and hashes length diff'
    );
    for (uint256 i = 0; i < Trustees.length; i++) {
      trusteeToPasswordHash[Trustees[i]] = _passwordHashes[i];
    }
  }

  function startRecovery(
    uint256[2] memory a,
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[1] memory Input,
    address newOwner
  )
    external
    isTrustee
    RecoveryShouldNotBeInProcess
    verifyProofForTrustee(a, b, c, Input)
    returns (uint256)
  {
    console.log('trustee hash', trusteeToPasswordHash[msg.sender]);
    console.log('Input', Input[0]);
    require(Input[0] == trusteeToPasswordHash[msg.sender], 'Wrong password');
    require(newOwner != address(0), 'Zero address');
    require(!pastOwners[newOwner], 'Owner should not be a past address');

    currentRecoveryNumber++;

    RecoveryProcedure storage recovery = recoveryRoundNumberToProcedure[
      currentRecoveryNumber
    ];
    recovery.newOwnerProposed = newOwner;
    recovery.numberOfVotesInSupport++;
    recovery.trusteeSupporters[msg.sender] = true;

    isRecoveryOn = true;
    emit NewRecoveryProcedure(newOwner, msg.sender, currentRecoveryNumber);

    return currentRecoveryNumber;
  }

  function voteInRecovery(
    uint256[2] memory a,
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[1] memory Input,
    uint256 recoveryRoundNumber
  )
    external
    isTrustee
    RecoveryShouldBeInProcess
    verifyProofForTrustee(a, b, c, Input)
    returns (bool success)
  {
    require(Input[0] == trusteeToPasswordHash[msg.sender], 'Wrong password');
    console.log('Here1');
    require(
      recoveryRoundNumber <= currentRecoveryNumber,
      'Wrong Recovery round number'
    );
    console.log('Here');
    RecoveryProcedure storage recovery = recoveryRoundNumberToProcedure[
      recoveryRoundNumber
    ];
    require(!recovery.trusteeSupporters[msg.sender], 'Trustee already voted');
    recovery.numberOfVotesInSupport++;
    recovery.trusteeSupporters[msg.sender] = true;

    success = true;

    emit VotedInRecovery(msg.sender, recoveryRoundNumber);
  }

  function executeRecoveryChange(
    uint256[2] memory a,
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[1] memory Input,
    uint256 recoveryRoundNumber
  )
    external
    isTrustee
    RecoveryShouldBeInProcess
    verifyProofForTrustee(a, b, c, Input)
  {
    require(Input[0] == trusteeToPasswordHash[msg.sender], 'Wrong password');
    RecoveryProcedure storage recovery = recoveryRoundNumberToProcedure[
      recoveryRoundNumber
    ];

    require(
      recovery.numberOfVotesInSupport >= thresholdForRecovery,
      'Votes Not enough'
    );

    recovery.isPassed = true;
    isRecoveryOn = false;
    address old = owner;
    owner = recovery.newOwnerProposed;
    pastOwners[owner] = true;

    emit RecoveryExecuted(old, owner, recoveryRoundNumber);
  }

  function cancelRecovery(
    uint256[2] memory a,
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[1] memory Input,
    uint256 recoveryRoundNumber
  )
    external
    isOwner
    RecoveryShouldBeInProcess
    verifyProofForTrustee(a, b, c, Input)
  {
    require(Input[0] == ownerPasswordHash, 'Wrong password');
    isRecoveryOn = false;
    emit RecoveryCancelled(owner, recoveryRoundNumber);
  }

  function executeTxn(
    uint256[2] memory a,
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[2] memory input,
    address callee,
    uint256 value
  ) external isOwner returns (bytes memory result) {
    require(verifyOTP(a, b, c, input), 'Proof failed');
    (bool success, bytes memory result) = callee.call{value: value}("");
    require(success, 'external call reverted');
    // emit TransactionExecuted(callee, value, data);
    return result;
  }

  function onERC721Received(
    address,
    address,
    uint256,
    bytes memory
  ) public pure override returns (bytes4) {
    return this.onERC721Received.selector;
  }

  receive() external payable {}
}
