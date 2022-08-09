import { Any } from "../../../../google/protobuf/any";
import { ConnectionEnd } from "../../../core/connection/v1/connection";
import { Channel } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */

export let DataType;

(function (DataType) {
  DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
  DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
  DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
  DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
  DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
  DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
  DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
  DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
  DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
  DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
  DataType[DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataType || (DataType = {}));

export function dataTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
      return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;

    case 1:
    case "DATA_TYPE_CLIENT_STATE":
      return DataType.DATA_TYPE_CLIENT_STATE;

    case 2:
    case "DATA_TYPE_CONSENSUS_STATE":
      return DataType.DATA_TYPE_CONSENSUS_STATE;

    case 3:
    case "DATA_TYPE_CONNECTION_STATE":
      return DataType.DATA_TYPE_CONNECTION_STATE;

    case 4:
    case "DATA_TYPE_CHANNEL_STATE":
      return DataType.DATA_TYPE_CHANNEL_STATE;

    case 5:
    case "DATA_TYPE_PACKET_COMMITMENT":
      return DataType.DATA_TYPE_PACKET_COMMITMENT;

    case 6:
    case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
      return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;

    case 7:
    case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
      return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;

    case 8:
    case "DATA_TYPE_NEXT_SEQUENCE_RECV":
      return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;

    case 9:
    case "DATA_TYPE_HEADER":
      return DataType.DATA_TYPE_HEADER;

    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}
export function dataTypeToJSON(object) {
  switch (object) {
    case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
      return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";

    case DataType.DATA_TYPE_CLIENT_STATE:
      return "DATA_TYPE_CLIENT_STATE";

    case DataType.DATA_TYPE_CONSENSUS_STATE:
      return "DATA_TYPE_CONSENSUS_STATE";

    case DataType.DATA_TYPE_CONNECTION_STATE:
      return "DATA_TYPE_CONNECTION_STATE";

    case DataType.DATA_TYPE_CHANNEL_STATE:
      return "DATA_TYPE_CHANNEL_STATE";

    case DataType.DATA_TYPE_PACKET_COMMITMENT:
      return "DATA_TYPE_PACKET_COMMITMENT";

    case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
      return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";

    case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
      return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";

    case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
      return "DATA_TYPE_NEXT_SEQUENCE_RECV";

    case DataType.DATA_TYPE_HEADER:
      return "DATA_TYPE_HEADER";

    default:
      return "UNKNOWN";
  }
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */

function createBaseClientState() {
  return {
    sequence: Long.UZERO,
    frozenSequence: Long.UZERO,
    consensusState: undefined,
    allowUpdateAfterProposal: false
  };
}

export const ClientState = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (!message.frozenSequence.isZero()) {
      writer.uint32(16).uint64(message.frozenSequence);
    }

    if (message.consensusState !== undefined) {
      ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }

    if (message.allowUpdateAfterProposal === true) {
      writer.uint32(32).bool(message.allowUpdateAfterProposal);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.frozenSequence = reader.uint64();
          break;

        case 3:
          message.consensusState = ConsensusState.decode(reader, reader.uint32());
          break;

        case 4:
          message.allowUpdateAfterProposal = reader.bool();
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
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO,
      frozenSequence: isSet(object.frozenSequence) ? Long.fromString(object.frozenSequence) : Long.UZERO,
      consensusState: isSet(object.consensusState) ? ConsensusState.fromJSON(object.consensusState) : undefined,
      allowUpdateAfterProposal: isSet(object.allowUpdateAfterProposal) ? Boolean(object.allowUpdateAfterProposal) : false
    };
  },

  toJSON(message) {
    const obj = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.frozenSequence !== undefined && (obj.frozenSequence = (message.frozenSequence || Long.UZERO).toString());
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? ConsensusState.toJSON(message.consensusState) : undefined);
    message.allowUpdateAfterProposal !== undefined && (obj.allowUpdateAfterProposal = message.allowUpdateAfterProposal);
    return obj;
  },

  fromPartial(object) {
    var _object$allowUpdateAf;

    const message = createBaseClientState();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.frozenSequence = object.frozenSequence !== undefined && object.frozenSequence !== null ? Long.fromValue(object.frozenSequence) : Long.UZERO;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? ConsensusState.fromPartial(object.consensusState) : undefined;
    message.allowUpdateAfterProposal = (_object$allowUpdateAf = object.allowUpdateAfterProposal) !== null && _object$allowUpdateAf !== void 0 ? _object$allowUpdateAf : false;
    return message;
  }

};

function createBaseConsensusState() {
  return {
    publicKey: undefined,
    diversifier: "",
    timestamp: Long.UZERO
  };
}

export const ConsensusState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.diversifier = reader.string();
          break;

        case 3:
          message.timestamp = reader.uint64();
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
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined,
      diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
      timestamp: isSet(object.timestamp) ? Long.fromString(object.timestamp) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    var _object$diversifier;

    const message = createBaseConsensusState();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.diversifier = (_object$diversifier = object.diversifier) !== null && _object$diversifier !== void 0 ? _object$diversifier : "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  }

};

function createBaseHeader() {
  return {
    sequence: Long.UZERO,
    timestamp: Long.UZERO,
    signature: new Uint8Array(),
    newPublicKey: undefined,
    newDiversifier: ""
  };
}

export const Header = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }

    if (message.newPublicKey !== undefined) {
      Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
    }

    if (message.newDiversifier !== "") {
      writer.uint32(42).string(message.newDiversifier);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.timestamp = reader.uint64();
          break;

        case 3:
          message.signature = reader.bytes();
          break;

        case 4:
          message.newPublicKey = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.newDiversifier = reader.string();
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
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromString(object.timestamp) : Long.UZERO,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      newPublicKey: isSet(object.newPublicKey) ? Any.fromJSON(object.newPublicKey) : undefined,
      newDiversifier: isSet(object.newDiversifier) ? String(object.newDiversifier) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.newPublicKey !== undefined && (obj.newPublicKey = message.newPublicKey ? Any.toJSON(message.newPublicKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },

  fromPartial(object) {
    var _object$signature, _object$newDiversifie;

    const message = createBaseHeader();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.signature = (_object$signature = object.signature) !== null && _object$signature !== void 0 ? _object$signature : new Uint8Array();
    message.newPublicKey = object.newPublicKey !== undefined && object.newPublicKey !== null ? Any.fromPartial(object.newPublicKey) : undefined;
    message.newDiversifier = (_object$newDiversifie = object.newDiversifier) !== null && _object$newDiversifie !== void 0 ? _object$newDiversifie : "";
    return message;
  }

};

function createBaseMisbehaviour() {
  return {
    clientId: "",
    sequence: Long.UZERO,
    signatureOne: undefined,
    signatureTwo: undefined
  };
}

export const Misbehaviour = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }

    if (message.signatureOne !== undefined) {
      SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
    }

    if (message.signatureTwo !== undefined) {
      SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.sequence = reader.uint64();
          break;

        case 3:
          message.signatureOne = SignatureAndData.decode(reader, reader.uint32());
          break;

        case 4:
          message.signatureTwo = SignatureAndData.decode(reader, reader.uint32());
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO,
      signatureOne: isSet(object.signatureOne) ? SignatureAndData.fromJSON(object.signatureOne) : undefined,
      signatureTwo: isSet(object.signatureTwo) ? SignatureAndData.fromJSON(object.signatureTwo) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.signatureOne !== undefined && (obj.signatureOne = message.signatureOne ? SignatureAndData.toJSON(message.signatureOne) : undefined);
    message.signatureTwo !== undefined && (obj.signatureTwo = message.signatureTwo ? SignatureAndData.toJSON(message.signatureTwo) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$clientId;

    const message = createBaseMisbehaviour();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.signatureOne = object.signatureOne !== undefined && object.signatureOne !== null ? SignatureAndData.fromPartial(object.signatureOne) : undefined;
    message.signatureTwo = object.signatureTwo !== undefined && object.signatureTwo !== null ? SignatureAndData.fromPartial(object.signatureTwo) : undefined;
    return message;
  }

};

function createBaseSignatureAndData() {
  return {
    signature: new Uint8Array(),
    dataType: 0,
    data: new Uint8Array(),
    timestamp: Long.UZERO
  };
}

export const SignatureAndData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }

    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
    }

    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(32).uint64(message.timestamp);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;

        case 2:
          message.dataType = reader.int32();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        case 4:
          message.timestamp = reader.uint64();
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
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? Long.fromString(object.timestamp) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    var _object$signature2, _object$dataType, _object$data;

    const message = createBaseSignatureAndData();
    message.signature = (_object$signature2 = object.signature) !== null && _object$signature2 !== void 0 ? _object$signature2 : new Uint8Array();
    message.dataType = (_object$dataType = object.dataType) !== null && _object$dataType !== void 0 ? _object$dataType : 0;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  }

};

function createBaseTimestampedSignatureData() {
  return {
    signatureData: new Uint8Array(),
    timestamp: Long.UZERO
  };
}

export const TimestampedSignatureData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
          break;

        case 2:
          message.timestamp = reader.uint64();
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
      signatureData: isSet(object.signatureData) ? bytesFromBase64(object.signatureData) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? Long.fromString(object.timestamp) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.signatureData !== undefined && (obj.signatureData = base64FromBytes(message.signatureData !== undefined ? message.signatureData : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    var _object$signatureData;

    const message = createBaseTimestampedSignatureData();
    message.signatureData = (_object$signatureData = object.signatureData) !== null && _object$signatureData !== void 0 ? _object$signatureData : new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  }

};

function createBaseSignBytes() {
  return {
    sequence: Long.UZERO,
    timestamp: Long.UZERO,
    diversifier: "",
    dataType: 0,
    data: new Uint8Array()
  };
}

export const SignBytes = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }

    if (message.dataType !== 0) {
      writer.uint32(32).int32(message.dataType);
    }

    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.timestamp = reader.uint64();
          break;

        case 3:
          message.diversifier = reader.string();
          break;

        case 4:
          message.dataType = reader.int32();
          break;

        case 5:
          message.data = reader.bytes();
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
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromString(object.timestamp) : Long.UZERO,
      diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
      dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$diversifier2, _object$dataType2, _object$data2;

    const message = createBaseSignBytes();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.diversifier = (_object$diversifier2 = object.diversifier) !== null && _object$diversifier2 !== void 0 ? _object$diversifier2 : "";
    message.dataType = (_object$dataType2 = object.dataType) !== null && _object$dataType2 !== void 0 ? _object$dataType2 : 0;
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }

};

function createBaseHeaderData() {
  return {
    newPubKey: undefined,
    newDiversifier: ""
  };
}

export const HeaderData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.newPubKey !== undefined) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.newPubKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.newDiversifier = reader.string();
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
      newPubKey: isSet(object.newPubKey) ? Any.fromJSON(object.newPubKey) : undefined,
      newDiversifier: isSet(object.newDiversifier) ? String(object.newDiversifier) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey ? Any.toJSON(message.newPubKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },

  fromPartial(object) {
    var _object$newDiversifie2;

    const message = createBaseHeaderData();
    message.newPubKey = object.newPubKey !== undefined && object.newPubKey !== null ? Any.fromPartial(object.newPubKey) : undefined;
    message.newDiversifier = (_object$newDiversifie2 = object.newDiversifier) !== null && _object$newDiversifie2 !== void 0 ? _object$newDiversifie2 : "";
    return message;
  }

};

function createBaseClientStateData() {
  return {
    path: new Uint8Array(),
    clientState: undefined
  };
}

export const ClientStateData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientStateData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
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
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$path;

    const message = createBaseClientStateData();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : new Uint8Array();
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    return message;
  }

};

function createBaseConsensusStateData() {
  return {
    path: new Uint8Array(),
    consensusState: undefined
  };
}

export const ConsensusStateData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
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
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$path2;

    const message = createBaseConsensusStateData();
    message.path = (_object$path2 = object.path) !== null && _object$path2 !== void 0 ? _object$path2 : new Uint8Array();
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    return message;
  }

};

function createBaseConnectionStateData() {
  return {
    path: new Uint8Array(),
    connection: undefined
  };
}

export const ConnectionStateData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionStateData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
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
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$path3;

    const message = createBaseConnectionStateData();
    message.path = (_object$path3 = object.path) !== null && _object$path3 !== void 0 ? _object$path3 : new Uint8Array();
    message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
    return message;
  }

};

function createBaseChannelStateData() {
  return {
    path: new Uint8Array(),
    channel: undefined
  };
}

export const ChannelStateData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelStateData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
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
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$path4;

    const message = createBaseChannelStateData();
    message.path = (_object$path4 = object.path) !== null && _object$path4 !== void 0 ? _object$path4 : new Uint8Array();
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    return message;
  }

};

function createBasePacketCommitmentData() {
  return {
    path: new Uint8Array(),
    commitment: new Uint8Array()
  };
}

export const PacketCommitmentData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketCommitmentData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.commitment = reader.bytes();
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
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$path5, _object$commitment;

    const message = createBasePacketCommitmentData();
    message.path = (_object$path5 = object.path) !== null && _object$path5 !== void 0 ? _object$path5 : new Uint8Array();
    message.commitment = (_object$commitment = object.commitment) !== null && _object$commitment !== void 0 ? _object$commitment : new Uint8Array();
    return message;
  }

};

function createBasePacketAcknowledgementData() {
  return {
    path: new Uint8Array(),
    acknowledgement: new Uint8Array()
  };
}

export const PacketAcknowledgementData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketAcknowledgementData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.acknowledgement = reader.bytes();
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
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$path6, _object$acknowledgeme;

    const message = createBasePacketAcknowledgementData();
    message.path = (_object$path6 = object.path) !== null && _object$path6 !== void 0 ? _object$path6 : new Uint8Array();
    message.acknowledgement = (_object$acknowledgeme = object.acknowledgement) !== null && _object$acknowledgeme !== void 0 ? _object$acknowledgeme : new Uint8Array();
    return message;
  }

};

function createBasePacketReceiptAbsenceData() {
  return {
    path: new Uint8Array()
  };
}

export const PacketReceiptAbsenceData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketReceiptAbsenceData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
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
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$path7;

    const message = createBasePacketReceiptAbsenceData();
    message.path = (_object$path7 = object.path) !== null && _object$path7 !== void 0 ? _object$path7 : new Uint8Array();
    return message;
  }

};

function createBaseNextSequenceRecvData() {
  return {
    path: new Uint8Array(),
    nextSeqRecv: Long.UZERO
  };
}

export const NextSequenceRecvData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (!message.nextSeqRecv.isZero()) {
      writer.uint32(16).uint64(message.nextSeqRecv);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextSequenceRecvData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.nextSeqRecv = reader.uint64();
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
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      nextSeqRecv: isSet(object.nextSeqRecv) ? Long.fromString(object.nextSeqRecv) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.nextSeqRecv !== undefined && (obj.nextSeqRecv = (message.nextSeqRecv || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    var _object$path8;

    const message = createBaseNextSequenceRecvData();
    message.path = (_object$path8 = object.path) !== null && _object$path8 !== void 0 ? _object$path8 : new Uint8Array();
    message.nextSeqRecv = object.nextSeqRecv !== undefined && object.nextSeqRecv !== null ? Long.fromValue(object.nextSeqRecv) : Long.UZERO;
    return message;
  }

};