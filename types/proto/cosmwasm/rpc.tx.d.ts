import { Rpc } from "@osmonauts/helpers";
export declare const createRPCMsgClient: ({ rpc }: { rpc: Rpc }) => Promise<{
  cosmwasm: {
    wasm: {
      v1: import("./wasm/v1/tx.rpc.msg").MsgClientImpl;
    };
  };
  cosmos: {
    authz: {
      v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
    bank: {
      v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
    crisis: {
      v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
    distribution: {
      v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
    evidence: {
      v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
    feegrant: {
      v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
    gov: {
      v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
    slashing: {
      v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
    staking: {
      v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
    vesting: {
      v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
    };
  };
}>;
