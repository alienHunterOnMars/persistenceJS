import { Height } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */

export let State;

(function (State) {
  State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  State[State["STATE_INIT"] = 1] = "STATE_INIT";
  State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
  State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
  State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (State = {}));

export function stateFromJSON(object) {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;

    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;

    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;

    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;

    case 4:
    case "STATE_CLOSED":
      return State.STATE_CLOSED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object) {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";

    case State.STATE_INIT:
      return "STATE_INIT";

    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";

    case State.STATE_OPEN:
      return "STATE_OPEN";

    case State.STATE_CLOSED:
      return "STATE_CLOSED";

    default:
      return "UNKNOWN";
  }
}
/** Order defines if a channel is ORDERED or UNORDERED */

export let Order;

(function (Order) {
  Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
  Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
  Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
  Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order || (Order = {}));

export function orderFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_NONE_UNSPECIFIED":
      return Order.ORDER_NONE_UNSPECIFIED;

    case 1:
    case "ORDER_UNORDERED":
      return Order.ORDER_UNORDERED;

    case 2:
    case "ORDER_ORDERED":
      return Order.ORDER_ORDERED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Order.UNRECOGNIZED;
  }
}
export function orderToJSON(object) {
  switch (object) {
    case Order.ORDER_NONE_UNSPECIFIED:
      return "ORDER_NONE_UNSPECIFIED";

    case Order.ORDER_UNORDERED:
      return "ORDER_UNORDERED";

    case Order.ORDER_ORDERED:
      return "ORDER_ORDERED";

    default:
      return "UNKNOWN";
  }
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */

function createBaseChannel() {
  return {
    state: 0,
    ordering: 0,
    counterparty: undefined,
    connectionHops: [],
    version: ""
  };
}

export const Channel = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }

    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.connectionHops) {
      writer.uint32(34).string(v);
    }

    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;

        case 2:
          message.ordering = reader.int32();
          break;

        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 4:
          message.connectionHops.push(reader.string());
          break;

        case 5:
          message.version = reader.string();
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
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      connectionHops: Array.isArray(object === null || object === void 0 ? void 0 : object.connectionHops) ? object.connectionHops.map(e => String(e)) : [],
      version: isSet(object.version) ? String(object.version) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);

    if (message.connectionHops) {
      obj.connectionHops = message.connectionHops.map(e => e);
    } else {
      obj.connectionHops = [];
    }

    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object) {
    var _object$state, _object$ordering, _object$connectionHop, _object$version;

    const message = createBaseChannel();
    message.state = (_object$state = object.state) !== null && _object$state !== void 0 ? _object$state : 0;
    message.ordering = (_object$ordering = object.ordering) !== null && _object$ordering !== void 0 ? _object$ordering : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.connectionHops = ((_object$connectionHop = object.connectionHops) === null || _object$connectionHop === void 0 ? void 0 : _object$connectionHop.map(e => e)) || [];
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    return message;
  }

};

function createBaseIdentifiedChannel() {
  return {
    state: 0,
    ordering: 0,
    counterparty: undefined,
    connectionHops: [],
    version: "",
    portId: "",
    channelId: ""
  };
}

export const IdentifiedChannel = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }

    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.connectionHops) {
      writer.uint32(34).string(v);
    }

    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }

    if (message.portId !== "") {
      writer.uint32(50).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(58).string(message.channelId);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedChannel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;

        case 2:
          message.ordering = reader.int32();
          break;

        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 4:
          message.connectionHops.push(reader.string());
          break;

        case 5:
          message.version = reader.string();
          break;

        case 6:
          message.portId = reader.string();
          break;

        case 7:
          message.channelId = reader.string();
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
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      connectionHops: Array.isArray(object === null || object === void 0 ? void 0 : object.connectionHops) ? object.connectionHops.map(e => String(e)) : [],
      version: isSet(object.version) ? String(object.version) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);

    if (message.connectionHops) {
      obj.connectionHops = message.connectionHops.map(e => e);
    } else {
      obj.connectionHops = [];
    }

    message.version !== undefined && (obj.version = message.version);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object) {
    var _object$state2, _object$ordering2, _object$connectionHop2, _object$version2, _object$portId, _object$channelId;

    const message = createBaseIdentifiedChannel();
    message.state = (_object$state2 = object.state) !== null && _object$state2 !== void 0 ? _object$state2 : 0;
    message.ordering = (_object$ordering2 = object.ordering) !== null && _object$ordering2 !== void 0 ? _object$ordering2 : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.connectionHops = ((_object$connectionHop2 = object.connectionHops) === null || _object$connectionHop2 === void 0 ? void 0 : _object$connectionHop2.map(e => e)) || [];
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    return message;
  }

};

function createBaseCounterparty() {
  return {
    portId: "",
    channelId: ""
  };
}

export const Counterparty = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object) {
    var _object$portId2, _object$channelId2;

    const message = createBaseCounterparty();
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.channelId = (_object$channelId2 = object.channelId) !== null && _object$channelId2 !== void 0 ? _object$channelId2 : "";
    return message;
  }

};

function createBasePacket() {
  return {
    sequence: Long.UZERO,
    sourcePort: "",
    sourceChannel: "",
    destinationPort: "",
    destinationChannel: "",
    data: new Uint8Array(),
    timeoutHeight: undefined,
    timeoutTimestamp: Long.UZERO
  };
}

export const Packet = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (message.sourcePort !== "") {
      writer.uint32(18).string(message.sourcePort);
    }

    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }

    if (message.destinationPort !== "") {
      writer.uint32(34).string(message.destinationPort);
    }

    if (message.destinationChannel !== "") {
      writer.uint32(42).string(message.destinationChannel);
    }

    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }

    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
    }

    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(64).uint64(message.timeoutTimestamp);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.sourcePort = reader.string();
          break;

        case 3:
          message.sourceChannel = reader.string();
          break;

        case 4:
          message.destinationPort = reader.string();
          break;

        case 5:
          message.destinationChannel = reader.string();
          break;

        case 6:
          message.data = reader.bytes();
          break;

        case 7:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.timeoutTimestamp = reader.uint64();
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
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      destinationPort: isSet(object.destinationPort) ? String(object.destinationPort) : "",
      destinationChannel: isSet(object.destinationChannel) ? String(object.destinationChannel) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : undefined,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Long.fromString(object.timeoutTimestamp) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    message.destinationPort !== undefined && (obj.destinationPort = message.destinationPort);
    message.destinationChannel !== undefined && (obj.destinationChannel = message.destinationChannel);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight ? Height.toJSON(message.timeoutHeight) : undefined);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    var _object$sourcePort, _object$sourceChannel, _object$destinationPo, _object$destinationCh, _object$data;

    const message = createBasePacket();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.sourcePort = (_object$sourcePort = object.sourcePort) !== null && _object$sourcePort !== void 0 ? _object$sourcePort : "";
    message.sourceChannel = (_object$sourceChannel = object.sourceChannel) !== null && _object$sourceChannel !== void 0 ? _object$sourceChannel : "";
    message.destinationPort = (_object$destinationPo = object.destinationPort) !== null && _object$destinationPo !== void 0 ? _object$destinationPo : "";
    message.destinationChannel = (_object$destinationCh = object.destinationChannel) !== null && _object$destinationCh !== void 0 ? _object$destinationCh : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO;
    return message;
  }

};

function createBasePacketState() {
  return {
    portId: "",
    channelId: "",
    sequence: Long.UZERO,
    data: new Uint8Array()
  };
}

export const PacketState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.sequence = reader.uint64();
          break;

        case 4:
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$portId3, _object$channelId3, _object$data2;

    const message = createBasePacketState();
    message.portId = (_object$portId3 = object.portId) !== null && _object$portId3 !== void 0 ? _object$portId3 : "";
    message.channelId = (_object$channelId3 = object.channelId) !== null && _object$channelId3 !== void 0 ? _object$channelId3 : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }

};

function createBaseAcknowledgement() {
  return {
    result: undefined,
    error: undefined
  };
}

export const Acknowledgement = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== undefined) {
      writer.uint32(170).bytes(message.result);
    }

    if (message.error !== undefined) {
      writer.uint32(178).string(message.error);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgement();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;

        case 22:
          message.error = reader.string();
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
      result: isSet(object.result) ? bytesFromBase64(object.result) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.result !== undefined && (obj.result = message.result !== undefined ? base64FromBytes(message.result) : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object) {
    var _object$result, _object$error;

    const message = createBaseAcknowledgement();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : undefined;
    message.error = (_object$error = object.error) !== null && _object$error !== void 0 ? _object$error : undefined;
    return message;
  }

};