import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Metadata;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
  /** SHA-256 chunk hashes */
  chunkHashes: Uint8Array[];
}
export declare const Snapshot: {
  encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
  fromJSON(object: any): Snapshot;
  toJSON(message: Snapshot): unknown;
  fromPartial(object: DeepPartial<Snapshot>): Snapshot;
};
export declare const Metadata: {
  encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
  fromJSON(object: any): Metadata;
  toJSON(message: Metadata): unknown;
  fromPartial(object: DeepPartial<Metadata>): Metadata;
};
