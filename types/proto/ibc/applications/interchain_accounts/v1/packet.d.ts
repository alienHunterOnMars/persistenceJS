import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * Type defines a classification of message issued from a controller chain to its associated interchain accounts
 * host
 */
export declare enum Type {
  /** TYPE_UNSPECIFIED - Default zero value enumeration */
  TYPE_UNSPECIFIED = 0,
  /** TYPE_EXECUTE_TX - Execute a transaction on an interchain accounts host chain */
  TYPE_EXECUTE_TX = 1,
  UNRECOGNIZED = -1,
}
export declare function typeFromJSON(object: any): Type;
export declare function typeToJSON(object: Type): string;
/** InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field. */
export interface InterchainAccountPacketData {
  type: Type;
  data: Uint8Array;
  memo: string;
}
/** CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain. */
export interface CosmosTx {
  messages: Any[];
}
export declare const InterchainAccountPacketData: {
  encode(message: InterchainAccountPacketData, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainAccountPacketData;
  fromJSON(object: any): InterchainAccountPacketData;
  toJSON(message: InterchainAccountPacketData): unknown;
  fromPartial(object: DeepPartial<InterchainAccountPacketData>): InterchainAccountPacketData;
};
export declare const CosmosTx: {
  encode(message: CosmosTx, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): CosmosTx;
  fromJSON(object: any): CosmosTx;
  toJSON(message: CosmosTx): unknown;
  fromPartial(object: DeepPartial<CosmosTx>): CosmosTx;
};
