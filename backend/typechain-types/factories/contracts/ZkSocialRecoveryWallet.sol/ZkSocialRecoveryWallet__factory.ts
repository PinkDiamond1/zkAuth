/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ZkSocialRecoveryWallet,
  ZkSocialRecoveryWalletInterface,
} from "../../../contracts/ZkSocialRecoveryWallet.sol/ZkSocialRecoveryWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_hashCheckVerifier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ownerPasswordHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_thresholdForRecovery",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_root",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_otpMerkleTreeVerifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newProposedOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trusteeInitializer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currRecoveryRound",
        type: "uint256",
      },
    ],
    name: "NewRecoveryProcedure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "Owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "RecoveryRound",
        type: "uint256",
      },
    ],
    name: "RecoveryCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "RecoveryRound",
        type: "uint256",
      },
    ],
    name: "RecoveryExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trustee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "RecoveryRound",
        type: "uint256",
      },
    ],
    name: "VotedInRecovery",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Trustees",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "Input",
        type: "uint256[1]",
      },
      {
        internalType: "uint256",
        name: "recoveryRoundNumber",
        type: "uint256",
      },
    ],
    name: "cancelRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRecoveryNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "Input",
        type: "uint256[1]",
      },
      {
        internalType: "uint256",
        name: "recoveryRoundNumber",
        type: "uint256",
      },
    ],
    name: "executeRecoveryChange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "input",
        type: "uint256[2]",
      },
      {
        internalType: "address",
        name: "callee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "executeTxn",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isRecoveryOn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberTrustees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_trustees",
        type: "address[]",
      },
    ],
    name: "setTrustees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_passwordHashes",
        type: "uint256[]",
      },
    ],
    name: "setTrusteesPasswords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "Input",
        type: "uint256[1]",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "startRecovery",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "input",
        type: "uint256[2]",
      },
    ],
    name: "verifyOTP",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "Input",
        type: "uint256[1]",
      },
      {
        internalType: "uint256",
        name: "recoveryRoundNumber",
        type: "uint256",
      },
    ],
    name: "voteInRecovery",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162002191380380620021918339810160408190526200003491620000ef565b60808290526001600160a01b0380821660a05285166200009a5760405162461bcd60e51b815260206004820152601560248201527f5a65726f20616464726573732076657269666965720000000000000000000000604482015260640160405180910390fd5b5050600180546001600160a01b039094166001600160a01b031994851617905560028054909316331790925560035560045562000144565b80516001600160a01b0381168114620000ea57600080fd5b919050565b600080600080600060a086880312156200010857600080fd5b6200011386620000d2565b94506020860151935060408601519250606086015191506200013860808701620000d2565b90509295509295909350565b60805160a0516120276200016a60003960006111b4015260006110c301526120276000f3fe6080604052600436106100e15760003560e01c8063789bcd081161007f578063a9f3402c11610059578063a9f3402c146102c0578063b21fa1ae146102e0578063bb3accf014610300578063e9c4bfe71461032057600080fd5b8063789bcd08146102565780638da5cb5b146102865780639c62291a146102a657600080fd5b806337dc1813116100bb57806337dc1813146101bc5780634b58867f146101de5780634e8a2409146101fe5780634f20804b1461023657600080fd5b8063037133f1146100ed57806307238be314610123578063150b7a021461014757600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b5061010d6101083660046119f0565b610336565b60405161011a9190611aab565b60405180910390f35b34801561012f57600080fd5b5061013960065481565b60405190815260200161011a565b34801561015357600080fd5b5061018b610162366004611ac5565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161011a565b3480156101c857600080fd5b506101dc6101d7366004611bf3565b61048d565b005b3480156101ea57600080fd5b506101dc6101f9366004611c7a565b61070e565b34801561020a57600080fd5b5061021e610219366004611d10565b61081f565b6040516001600160a01b03909116815260200161011a565b34801561024257600080fd5b50610139610251366004611d29565b610849565b34801561026257600080fd5b50610276610271366004611bf3565b610cf6565b604051901515815260200161011a565b34801561029257600080fd5b5060025461021e906001600160a01b031681565b3480156102b257600080fd5b50600c546102769060ff1681565b3480156102cc57600080fd5b506102766102db366004611d95565b6110bc565b3480156102ec57600080fd5b506101dc6102fb366004611bf3565b61128d565b34801561030c57600080fd5b506101dc61031b366004611def565b6115e3565b34801561032c57600080fd5b5061013960055481565b6002546060906001600160a01b031633146103845760405162461bcd60e51b81526020600482015260096024820152682737ba1027bbb732b960b91b60448201526064015b60405180910390fd5b610390878787876110bc565b6103dc5760405162461bcd60e51b815260206004820152600c60248201527f50726f6f66206661696c65640000000000000000000000000000000000000000604482015260640161037b565b600080846001600160a01b03168460405160006040518083038185875af1925050503d806000811461042a576040519150601f19603f3d011682016040523d82523d6000602084013e61042f565b606091505b5091509150816104815760405162461bcd60e51b815260206004820152601660248201527f65787465726e616c2063616c6c20726576657274656400000000000000000000604482015260640161037b565b98975050505050505050565b6002546001600160a01b031633146104d35760405162461bcd60e51b81526020600482015260096024820152682737ba1027bbb732b960b91b604482015260640161037b565b600c5460ff166105255760405162461bcd60e51b815260206004820152601860248201527f5265636f7665727920686173206e6f7420737461727465640000000000000000604482015260640161037b565b6001546040516343753b4d60e01b815286918691869186916001600160a01b03909116906343753b4d90610563908790879087908790600401611ed3565b602060405180830381865afa158015610580573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a49190611f30565b6105f05760405162461bcd60e51b815260206004820152601760248201527f50617373776f72642070726f6f6620696e76616c696421000000000000000000604482015260640161037b565b83516000908152600b602052604090205460ff16156106415760405162461bcd60e51b815260206004820152600d60248201526c141c9bdbd9881a5cc81d5cd959609a1b604482015260640161037b565b6003548651146106845760405162461bcd60e51b815260206004820152600e60248201526d15dc9bdb99c81c185cdcdddbdc9960921b604482015260640161037b565b600c805460ff191690556002546040518681526001600160a01b03909116907f500ec1d4b692d3c788bfd78a898de379cfd93ab8177575efc7593f87bd051a079060200160405180910390a26001600b600086815b6020020151815260200190815260200160002060006101000a81548160ff021916908315150217905550505050505050505050565b6002546001600160a01b031633146107545760405162461bcd60e51b81526020600482015260096024820152682737ba1027bbb732b960b91b604482015260640161037b565b8051600754146107a65760405162461bcd60e51b815260206004820152601f60248201527f547275737465657320616e6420686173686573206c656e677468206469666600604482015260640161037b565b60005b60075481101561081b578181815181106107c5576107c5611f52565b602002602001015160096000600784815481106107e4576107e4611f52565b60009182526020808320909101546001600160a01b031683528201929092526040019020558061081381611f68565b9150506107a9565b5050565b6007818154811061082f57600080fd5b6000918252602090912001546001600160a01b0316905081565b3360009081526008602052604081205460ff166108965760405162461bcd60e51b815260206004820152600b60248201526a4e6f74205472757374656560a81b604482015260640161037b565b600c5460ff16156108e95760405162461bcd60e51b815260206004820152601660248201527f5265636f7665727920697320696e2070726f6365737300000000000000000000604482015260640161037b565b6001546040516343753b4d60e01b815287918791879187916001600160a01b03909116906343753b4d90610927908790879087908790600401611ed3565b602060405180830381865afa158015610944573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109689190611f30565b6109b45760405162461bcd60e51b815260206004820152601760248201527f50617373776f72642070726f6f6620696e76616c696421000000000000000000604482015260640161037b565b83516000908152600b602052604090205460ff1615610a055760405162461bcd60e51b815260206004820152600d60248201526c141c9bdbd9881a5cc81d5cd959609a1b604482015260640161037b565b610a696040518060400160405280600c81526020017f747275737465652068617368000000000000000000000000000000000000000081525060096000336001600160a01b03166001600160a01b0316815260200190815260200160002054611736565b60408051808201909152600581527f496e70757400000000000000000000000000000000000000000000000000000060208201528751610aa99190611736565b33600090815260096020526040902054875114610af95760405162461bcd60e51b815260206004820152600e60248201526d15dc9bdb99c81c185cdcdddbdc9960921b604482015260640161037b565b6001600160a01b038616610b4f5760405162461bcd60e51b815260206004820152600c60248201527f5a65726f20616464726573730000000000000000000000000000000000000000604482015260640161037b565b6001600160a01b0386166000908152600a602052604090205460ff1615610bde5760405162461bcd60e51b815260206004820152602260248201527f4f776e65722073686f756c64206e6f742062652061207061737420616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161037b565b60058054906000610bee83611f68565b90915550506005546000908152600d6020526040812060018101805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038a16179055805490918290610c3d83611f68565b90915550503360008181526002830160209081526040918290208054600160ff199182168117909255600c8054909116909117905560055491519182526001600160a01b038a16917f4ae23dc2e5f7892600076b48a0cfdbcc206c2aba4e323da13765339b2b8978d8910160405180910390a36005549550506001600b600086815b6020020151815260200190815260200160002060006101000a81548160ff0219169083151502179055505050505095945050505050565b3360009081526008602052604081205460ff16610d435760405162461bcd60e51b815260206004820152600b60248201526a4e6f74205472757374656560a81b604482015260640161037b565b600c5460ff16610d955760405162461bcd60e51b815260206004820152601860248201527f5265636f7665727920686173206e6f7420737461727465640000000000000000604482015260640161037b565b6001546040516343753b4d60e01b815287918791879187916001600160a01b03909116906343753b4d90610dd3908790879087908790600401611ed3565b602060405180830381865afa158015610df0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e149190611f30565b610e605760405162461bcd60e51b815260206004820152601760248201527f50617373776f72642070726f6f6620696e76616c696421000000000000000000604482015260640161037b565b83516000908152600b602052604090205460ff1615610eb15760405162461bcd60e51b815260206004820152600d60248201526c141c9bdbd9881a5cc81d5cd959609a1b604482015260640161037b565b33600090815260096020526040902054875114610f015760405162461bcd60e51b815260206004820152600e60248201526d15dc9bdb99c81c185cdcdddbdc9960921b604482015260640161037b565b610f3f6040518060400160405280600581526020017f48657265310000000000000000000000000000000000000000000000000000008152506117a9565b600554861115610f915760405162461bcd60e51b815260206004820152601b60248201527f57726f6e67205265636f7665727920726f756e64206e756d6265720000000000604482015260640161037b565b610fcf6040518060400160405280600481526020017f48657265000000000000000000000000000000000000000000000000000000008152506117a9565b6000868152600d60209081526040808320338452600281019092529091205460ff161561103e5760405162461bcd60e51b815260206004820152601560248201527f5472757374656520616c726561647920766f7465640000000000000000000000604482015260640161037b565b805481600061104c83611f68565b909155505033600081815260028301602052604090819020805460ff1916600190811790915590519097507f7f7906f4f6e51fac746e81b4885d9775eb44445765139416bcd03b12b262968a906110a6908a815260200190565b60405180910390a2506001600b60008681610cbf565b80516000907f00000000000000000000000000000000000000000000000000000000000000001461112f5760405162461bcd60e51b815260206004820152600e60248201527f496e636f6f7265637420726f6f74000000000000000000000000000000000000604482015260640161037b565b6000546020830151116111845760405162461bcd60e51b815260206004820152600960248201527f4f6c642050726f6f660000000000000000000000000000000000000000000000604482015260640161037b565b6040517ff5c9d69e0000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f5c9d69e906111ef908890889088908890600401611f8f565b602060405180830381865afa15801561120c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112309190611f30565b61127c5760405162461bcd60e51b815260206004820152600d60248201527f496e76616c69642070726f6f6600000000000000000000000000000000000000604482015260640161037b565b506020015160005550600192915050565b3360009081526008602052604090205460ff166112da5760405162461bcd60e51b815260206004820152600b60248201526a4e6f74205472757374656560a81b604482015260640161037b565b600c5460ff1661132c5760405162461bcd60e51b815260206004820152601860248201527f5265636f7665727920686173206e6f7420737461727465640000000000000000604482015260640161037b565b6001546040516343753b4d60e01b815286918691869186916001600160a01b03909116906343753b4d9061136a908790879087908790600401611ed3565b602060405180830381865afa158015611387573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ab9190611f30565b6113f75760405162461bcd60e51b815260206004820152601760248201527f50617373776f72642070726f6f6620696e76616c696421000000000000000000604482015260640161037b565b83516000908152600b602052604090205460ff16156114485760405162461bcd60e51b815260206004820152600d60248201526c141c9bdbd9881a5cc81d5cd959609a1b604482015260640161037b565b336000908152600960205260409020548651146114985760405162461bcd60e51b815260206004820152600e60248201526d15dc9bdb99c81c185cdcdddbdc9960921b604482015260640161037b565b6000858152600d60205260409020600454815410156114f95760405162461bcd60e51b815260206004820152601060248201527f566f746573204e6f7420656e6f75676800000000000000000000000000000000604482015260640161037b565b600181810180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000178155600c805460ff1990811690915560028054925473ffffffffffffffffffffffffffffffffffffffff1984166001600160a01b0391821690811783556000908152600a602052604090819020805490941690951790925554925191811692169082907fcbaa7c7c351e2d5655fc08d9c383adcf4736af160c800b53df1f1dd221f826c8906115cb908b815260200190565b60405180910390a35060019050600b600086816106d9565b6002546001600160a01b031633146116295760405162461bcd60e51b81526020600482015260096024820152682737ba1027bbb732b960b91b604482015260640161037b565b60005b815181101561171b576008600083838151811061164b5761164b611f52565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff16156116bf5760405162461bcd60e51b815260206004820152601960248201527f4475706c6963617465207472757374656520696e206c69737400000000000000604482015260640161037b565b6001600860008484815181106116d7576116d7611f52565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790558061171381611f68565b91505061162c565b50805161172f90600790602084019061183e565b5051600655565b61081b828260405160240161174c929190611fcf565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb60e72cc0000000000000000000000000000000000000000000000000000000017905261181d565b61181a816040516024016117bd9190611aab565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac0000000000000000000000000000000000000000000000000000000017905261181d565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280548282559060005260206000209081019282156118a0579160200282015b828111156118a0578251825473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390911617825560209092019160019091019061185e565b506118ac9291506118b0565b5090565b5b808211156118ac57600081556001016118b1565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156118fe576118fe6118c5565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561192d5761192d6118c5565b604052919050565b600082601f83011261194657600080fd5b61194e6118db565b80604084018581111561196057600080fd5b845b8181101561197a578035845260209384019301611962565b509095945050505050565b600082601f83011261199657600080fd5b61199e6118db565b8060808401858111156119b057600080fd5b845b8181101561197a576119c48782611935565b84526020909301926040016119b2565b80356001600160a01b03811681146119eb57600080fd5b919050565b6000806000806000806101808789031215611a0a57600080fd5b611a148888611935565b9550611a238860408901611985565b9450611a328860c08901611935565b9350611a42886101008901611935565b9250611a5161014088016119d4565b915061016087013590509295509295509295565b6000815180845260005b81811015611a8b57602081850181015186830182015201611a6f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000611abe6020830184611a65565b9392505050565b60008060008060808587031215611adb57600080fd5b611ae4856119d4565b93506020611af38187016119d4565b935060408601359250606086013567ffffffffffffffff80821115611b1757600080fd5b818801915088601f830112611b2b57600080fd5b813581811115611b3d57611b3d6118c5565b611b4f601f8201601f19168501611904565b91508082528984828501011115611b6557600080fd5b808484018584013760008482840101525080935050505092959194509250565b600082601f830112611b9657600080fd5b604051602080820182811067ffffffffffffffff82111715611bba57611bba6118c5565b6040528184820186811115611bce57600080fd5b855b81811015611be75780358352918301918301611bd0565b50929695505050505050565b60008060008060006101408688031215611c0c57600080fd5b611c168787611935565b9450611c258760408801611985565b9350611c348760c08801611935565b9250611c44876101008801611b85565b94979396509194610120013592915050565b600067ffffffffffffffff821115611c7057611c706118c5565b5060051b60200190565b60006020808385031215611c8d57600080fd5b823567ffffffffffffffff811115611ca457600080fd5b8301601f81018513611cb557600080fd5b8035611cc8611cc382611c56565b611904565b81815260059190911b82018301908381019087831115611ce757600080fd5b928401925b82841015611d0557833582529284019290840190611cec565b979650505050505050565b600060208284031215611d2257600080fd5b5035919050565b60008060008060006101408688031215611d4257600080fd5b611d4c8787611935565b9450611d5b8760408801611985565b9350611d6a8760c08801611935565b9250611d7a876101008801611b85565b9150611d8961012087016119d4565b90509295509295909350565b6000806000806101408587031215611dac57600080fd5b611db68686611935565b9350611dc58660408701611985565b9250611dd48660c08701611935565b9150611de4866101008701611935565b905092959194509250565b60006020808385031215611e0257600080fd5b823567ffffffffffffffff811115611e1957600080fd5b8301601f81018513611e2a57600080fd5b8035611e38611cc382611c56565b81815260059190911b82018301908381019087831115611e5757600080fd5b928401925b82841015611d0557611e6d846119d4565b82529284019290840190611e5c565b8060005b6002811015611e9f578151845260209384019390910190600101611e80565b50505050565b8060005b6002811015611e9f57611ebd848351611e7c565b6040939093019260209190910190600101611ea9565b6101208101611ee28287611e7c565b611eef6040830186611ea5565b611efc60c0830185611e7c565b61010082018360005b6001811015611f24578151835260209283019290910190600101611f05565b50505095945050505050565b600060208284031215611f4257600080fd5b81518015158114611abe57600080fd5b634e487b7160e01b600052603260045260246000fd5b600060018201611f8857634e487b7160e01b600052601160045260246000fd5b5060010190565b6101408101611f9e8287611e7c565b611fab6040830186611ea5565b611fb860c0830185611e7c565b611fc6610100830184611e7c565b95945050505050565b604081526000611fe26040830185611a65565b9050826020830152939250505056fea26469706673582212204ec240d4dd206f34579699eb5a702268b5ba508273d8f6eca04d0b4225ef80ae64736f6c63430008110033";

type ZkSocialRecoveryWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZkSocialRecoveryWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZkSocialRecoveryWallet__factory extends ContractFactory {
  constructor(...args: ZkSocialRecoveryWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _hashCheckVerifier: PromiseOrValue<string>,
    _ownerPasswordHash: PromiseOrValue<BigNumberish>,
    _thresholdForRecovery: PromiseOrValue<BigNumberish>,
    _root: PromiseOrValue<BigNumberish>,
    _otpMerkleTreeVerifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZkSocialRecoveryWallet> {
    return super.deploy(
      _hashCheckVerifier,
      _ownerPasswordHash,
      _thresholdForRecovery,
      _root,
      _otpMerkleTreeVerifier,
      overrides || {}
    ) as Promise<ZkSocialRecoveryWallet>;
  }
  override getDeployTransaction(
    _hashCheckVerifier: PromiseOrValue<string>,
    _ownerPasswordHash: PromiseOrValue<BigNumberish>,
    _thresholdForRecovery: PromiseOrValue<BigNumberish>,
    _root: PromiseOrValue<BigNumberish>,
    _otpMerkleTreeVerifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _hashCheckVerifier,
      _ownerPasswordHash,
      _thresholdForRecovery,
      _root,
      _otpMerkleTreeVerifier,
      overrides || {}
    );
  }
  override attach(address: string): ZkSocialRecoveryWallet {
    return super.attach(address) as ZkSocialRecoveryWallet;
  }
  override connect(signer: Signer): ZkSocialRecoveryWallet__factory {
    return super.connect(signer) as ZkSocialRecoveryWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZkSocialRecoveryWalletInterface {
    return new utils.Interface(_abi) as ZkSocialRecoveryWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZkSocialRecoveryWallet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZkSocialRecoveryWallet;
  }
}
