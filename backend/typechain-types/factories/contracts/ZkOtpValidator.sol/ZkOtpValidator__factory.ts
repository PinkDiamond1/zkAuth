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
  ZkOtpValidator,
  ZkOtpValidatorInterface,
} from "../../../contracts/ZkOtpValidator.sol/ZkOtpValidator";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_root",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162000c1d38038062000c1d8339818101604052810190610034919061011c565b8160008190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061015c565b600080fd5b6000819050919050565b61009b81610088565b81146100a657600080fd5b50565b6000815190506100b881610092565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081519050610116816100f0565b92915050565b6000806040838503121561013357610132610083565b5b6000610141858286016100a9565b925050602061015285828601610107565b9150509250929050565b610ab1806200016c6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a9f3402c14610030575b600080fd5b61004a60048036038101906100459190610576565b610060565b60405161005791906105fa565b60405180910390f35b6000848484846000548160006002811061007d5761007c610615565b5b6020020151146100c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100b9906106a1565b60405180910390fd5b600254816001600281106100d9576100d8610615565b5b60200201511161011e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101159061070d565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5c9d69e858585856040518563ffffffff1660e01b815260040161017f94939291906108d6565b60206040518083038186803b15801561019757600080fd5b505afa1580156101ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cf9190610949565b61020e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610205906109c2565b60405180910390fd5b61024c6040518060400160405280600881526020017f7665726966696564000000000000000000000000000000000000000000000000815250610277565b806001600281106102605761025f610615565b5b602002015160028190555050505050949350505050565b61030d8160405160240161028b9190610a59565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610310565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103968261034d565b810181811067ffffffffffffffff821117156103b5576103b461035e565b5b80604052505050565b60006103c8610339565b90506103d4828261038d565b919050565b600067ffffffffffffffff8211156103f4576103f361035e565b5b602082029050919050565b600080fd5b6000819050919050565b61041781610404565b811461042257600080fd5b50565b6000813590506104348161040e565b92915050565b600061044d610448846103d9565b6103be565b90508060208402830185811115610467576104666103ff565b5b835b81811015610490578061047c8882610425565b845260208401935050602081019050610469565b5050509392505050565b600082601f8301126104af576104ae610348565b5b60026104bc84828561043a565b91505092915050565b600067ffffffffffffffff8211156104e0576104df61035e565b5b602082029050919050565b60006104fe6104f9846104c5565b6103be565b90508060408402830185811115610518576105176103ff565b5b835b81811015610541578061052d888261049a565b84526020840193505060408101905061051a565b5050509392505050565b600082601f8301126105605761055f610348565b5b600261056d8482856104eb565b91505092915050565b600080600080610140858703121561059157610590610343565b5b600061059f8782880161049a565b94505060406105b08782880161054b565b93505060c06105c18782880161049a565b9250506101006105d38782880161049a565b91505092959194509250565b60008115159050919050565b6105f4816105df565b82525050565b600060208201905061060f60008301846105eb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082825260208201905092915050565b7f496e636f6f7265637420726f6f74000000000000000000000000000000000000600082015250565b600061068b600e83610644565b915061069682610655565b602082019050919050565b600060208201905081810360008301526106ba8161067e565b9050919050565b7f4f6c642050726f6f660000000000000000000000000000000000000000000000600082015250565b60006106f7600983610644565b9150610702826106c1565b602082019050919050565b60006020820190508181036000830152610726816106ea565b9050919050565b600060029050919050565b600081905092915050565b6000819050919050565b61075681610404565b82525050565b6000610768838361074d565b60208301905092915050565b6000602082019050919050565b61078a8161072d565b6107948184610738565b925061079f82610743565b8060005b838110156107d05781516107b7878261075c565b96506107c283610774565b9250506001810190506107a3565b505050505050565b600060029050919050565b600081905092915050565b6000819050919050565b600081905092915050565b61080c8161072d565b61081681846107f8565b925061082182610743565b8060005b83811015610852578151610839878261075c565b965061084483610774565b925050600181019050610825565b505050505050565b60006108668383610803565b60408301905092915050565b6000602082019050919050565b610888816107d8565b61089281846107e3565b925061089d826107ee565b8060005b838110156108ce5781516108b5878261085a565b96506108c083610872565b9250506001810190506108a1565b505050505050565b6000610140820190506108ec6000830187610781565b6108f9604083018661087f565b61090660c0830185610781565b610914610100830184610781565b95945050505050565b610926816105df565b811461093157600080fd5b50565b6000815190506109438161091d565b92915050565b60006020828403121561095f5761095e610343565b5b600061096d84828501610934565b91505092915050565b7f496e76616c69642070726f6f6600000000000000000000000000000000000000600082015250565b60006109ac600d83610644565b91506109b782610976565b602082019050919050565b600060208201905081810360008301526109db8161099f565b9050919050565b600081519050919050565b60005b83811015610a0b5780820151818401526020810190506109f0565b83811115610a1a576000848401525b50505050565b6000610a2b826109e2565b610a358185610644565b9350610a458185602086016109ed565b610a4e8161034d565b840191505092915050565b60006020820190508181036000830152610a738184610a20565b90509291505056fea264697066735822122001a5c345e7b52e09f9fb1ff898e1b103b4aedc8305126a8a8ca218cbe27e452864736f6c63430008090033";

type ZkOtpValidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZkOtpValidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZkOtpValidator__factory extends ContractFactory {
  constructor(...args: ZkOtpValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _root: PromiseOrValue<BigNumberish>,
    _verifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZkOtpValidator> {
    return super.deploy(
      _root,
      _verifier,
      overrides || {}
    ) as Promise<ZkOtpValidator>;
  }
  override getDeployTransaction(
    _root: PromiseOrValue<BigNumberish>,
    _verifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_root, _verifier, overrides || {});
  }
  override attach(address: string): ZkOtpValidator {
    return super.attach(address) as ZkOtpValidator;
  }
  override connect(signer: Signer): ZkOtpValidator__factory {
    return super.connect(signer) as ZkOtpValidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZkOtpValidatorInterface {
    return new utils.Interface(_abi) as ZkOtpValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZkOtpValidator {
    return new Contract(address, _abi, signerOrProvider) as ZkOtpValidator;
  }
}
