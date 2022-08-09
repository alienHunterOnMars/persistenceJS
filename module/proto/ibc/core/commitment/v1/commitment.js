import { CommitmentProof } from "../../../../confio/proofs";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */

function createBaseMerkleRoot() {
  return {
    hash: new Uint8Array()
  };
}

export const MerkleRoot = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$hash;

    const message = createBaseMerkleRoot();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }

};

function createBaseMerklePrefix() {
  return {
    keyPrefix: new Uint8Array()
  };
}

export const MerklePrefix = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.keyPrefix.length !== 0) {
      writer.uint32(10).bytes(message.keyPrefix);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePrefix();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyPrefix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      keyPrefix: isSet(object.keyPrefix) ? bytesFromBase64(object.keyPrefix) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.keyPrefix !== undefined && (obj.keyPrefix = base64FromBytes(message.keyPrefix !== undefined ? message.keyPrefix : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$keyPrefix;

    const message = createBaseMerklePrefix();
    message.keyPrefix = (_object$keyPrefix = object.keyPrefix) !== null && _object$keyPrefix !== void 0 ? _object$keyPrefix : new Uint8Array();
    return message;
  }

};

function createBaseMerklePath() {
  return {
    keyPath: []
  };
}

export const MerklePath = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.keyPath) {
      writer.uint32(10).string(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyPath.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      keyPath: Array.isArray(object === null || object === void 0 ? void 0 : object.keyPath) ? object.keyPath.map(e => String(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.keyPath) {
      obj.keyPath = message.keyPath.map(e => e);
    } else {
      obj.keyPath = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$keyPath;

    const message = createBaseMerklePath();
    message.keyPath = ((_object$keyPath = object.keyPath) === null || _object$keyPath === void 0 ? void 0 : _object$keyPath.map(e => e)) || [];
    return message;
  }

};

function createBaseMerkleProof() {
  return {
    proofs: []
  };
}

export const MerkleProof = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.proofs) {
      CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      proofs: Array.isArray(object === null || object === void 0 ? void 0 : object.proofs) ? object.proofs.map(e => CommitmentProof.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? CommitmentProof.toJSON(e) : undefined);
    } else {
      obj.proofs = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$proofs;

    const message = createBaseMerkleProof();
    message.proofs = ((_object$proofs = object.proofs) === null || _object$proofs === void 0 ? void 0 : _object$proofs.map(e => CommitmentProof.fromPartial(e))) || [];
    return message;
  }

};