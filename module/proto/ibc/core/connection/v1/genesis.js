import { IdentifiedConnection, ConnectionPaths, Params } from "./connection";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "@osmonauts/helpers";
/** GenesisState defines the ibc connection submodule's genesis state. */

function createBaseGenesisState() {
  return {
    connections: [],
    clientConnectionPaths: [],
    nextConnectionSequence: Long.UZERO,
    params: undefined
  };
}

export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.clientConnectionPaths) {
      ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
    }

    if (!message.nextConnectionSequence.isZero()) {
      writer.uint32(24).uint64(message.nextConnectionSequence);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
          break;

        case 2:
          message.clientConnectionPaths.push(ConnectionPaths.decode(reader, reader.uint32()));
          break;

        case 3:
          message.nextConnectionSequence = reader.uint64();
          break;

        case 4:
          message.params = Params.decode(reader, reader.uint32());
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
      connections: Array.isArray(object === null || object === void 0 ? void 0 : object.connections) ? object.connections.map(e => IdentifiedConnection.fromJSON(e)) : [],
      clientConnectionPaths: Array.isArray(object === null || object === void 0 ? void 0 : object.clientConnectionPaths) ? object.clientConnectionPaths.map(e => ConnectionPaths.fromJSON(e)) : [],
      nextConnectionSequence: isSet(object.nextConnectionSequence) ? Long.fromString(object.nextConnectionSequence) : Long.UZERO,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toJSON(e) : undefined);
    } else {
      obj.connections = [];
    }

    if (message.clientConnectionPaths) {
      obj.clientConnectionPaths = message.clientConnectionPaths.map(e => e ? ConnectionPaths.toJSON(e) : undefined);
    } else {
      obj.clientConnectionPaths = [];
    }

    message.nextConnectionSequence !== undefined && (obj.nextConnectionSequence = (message.nextConnectionSequence || Long.UZERO).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$connections, _object$clientConnect;

    const message = createBaseGenesisState();
    message.connections = ((_object$connections = object.connections) === null || _object$connections === void 0 ? void 0 : _object$connections.map(e => IdentifiedConnection.fromPartial(e))) || [];
    message.clientConnectionPaths = ((_object$clientConnect = object.clientConnectionPaths) === null || _object$clientConnect === void 0 ? void 0 : _object$clientConnect.map(e => ConnectionPaths.fromPartial(e))) || [];
    message.nextConnectionSequence = object.nextConnectionSequence !== undefined && object.nextConnectionSequence !== null ? Long.fromValue(object.nextConnectionSequence) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};