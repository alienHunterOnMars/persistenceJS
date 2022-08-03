"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryUnreceivedPacketsResponse = exports.QueryUnreceivedPacketsRequest = exports.QueryUnreceivedAcksResponse = exports.QueryUnreceivedAcksRequest = exports.QueryPacketReceiptResponse = exports.QueryPacketReceiptRequest = exports.QueryPacketCommitmentsResponse = exports.QueryPacketCommitmentsRequest = exports.QueryPacketCommitmentResponse = exports.QueryPacketCommitmentRequest = exports.QueryPacketAcknowledgementsResponse = exports.QueryPacketAcknowledgementsRequest = exports.QueryPacketAcknowledgementResponse = exports.QueryPacketAcknowledgementRequest = exports.QueryNextSequenceReceiveResponse = exports.QueryNextSequenceReceiveRequest = exports.QueryConnectionChannelsResponse = exports.QueryConnectionChannelsRequest = exports.QueryChannelsResponse = exports.QueryChannelsRequest = exports.QueryChannelResponse = exports.QueryChannelRequest = exports.QueryChannelConsensusStateResponse = exports.QueryChannelConsensusStateRequest = exports.QueryChannelClientStateResponse = exports.QueryChannelClientStateRequest = void 0;

var _pagination = require("../../../../cosmos/base/query/v1beta1/pagination");

var _channel = require("./channel");

var _client = require("../../client/v1/client");

var _any = require("../../../../google/protobuf/any");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createBaseQueryChannelRequest() {
  return {
    portId: "",
    channelId: ""
  };
}

var QueryChannelRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId, _object$channelId;

    var message = createBaseQueryChannelRequest();
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    return message;
  }
};
exports.QueryChannelRequest = QueryChannelRequest;

function createBaseQueryChannelResponse() {
  return {
    channel: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

var QueryChannelResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.channel !== undefined) {
      _channel.Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channel = _channel.Channel.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      channel: (0, _helpers.isSet)(object.channel) ? _channel.Channel.fromJSON(object.channel) : undefined,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proofHeight: (0, _helpers.isSet)(object.proofHeight) ? _client.Height.fromJSON(object.proofHeight) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.channel !== undefined && (obj.channel = message.channel ? _channel.Channel.toJSON(message.channel) : undefined);
    message.proof !== undefined && (obj.proof = (0, _helpers.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? _client.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$proof;

    var message = createBaseQueryChannelResponse();
    message.channel = object.channel !== undefined && object.channel !== null ? _channel.Channel.fromPartial(object.channel) : undefined;
    message.proof = (_object$proof = object.proof) !== null && _object$proof !== void 0 ? _object$proof : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryChannelResponse = QueryChannelResponse;

function createBaseQueryChannelsRequest() {
  return {
    pagination: undefined
  };
}

var QueryChannelsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelsRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryChannelsRequest = QueryChannelsRequest;

function createBaseQueryChannelsResponse() {
  return {
    channels: [],
    pagination: undefined,
    height: undefined
  };
}

var QueryChannelsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator = _createForOfIteratorHelper(message.channels),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;

        _channel.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelsResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(_channel.IdentifiedChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map(function (e) {
        return _channel.IdentifiedChannel.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.channels) {
      obj.channels = message.channels.map(function (e) {
        return e ? _channel.IdentifiedChannel.toJSON(e) : undefined;
      });
    } else {
      obj.channels = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? _client.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$channels;

    var message = createBaseQueryChannelsResponse();
    message.channels = ((_object$channels = object.channels) === null || _object$channels === void 0 ? void 0 : _object$channels.map(function (e) {
      return _channel.IdentifiedChannel.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryChannelsResponse = QueryChannelsResponse;

function createBaseQueryConnectionChannelsRequest() {
  return {
    connection: "",
    pagination: undefined
  };
}

var QueryConnectionChannelsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }

    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionChannelsRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
          break;

        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      connection: (0, _helpers.isSet)(object.connection) ? String(object.connection) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.connection !== undefined && (obj.connection = message.connection);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$connection;

    var message = createBaseQueryConnectionChannelsRequest();
    message.connection = (_object$connection = object.connection) !== null && _object$connection !== void 0 ? _object$connection : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryConnectionChannelsRequest = QueryConnectionChannelsRequest;

function createBaseQueryConnectionChannelsResponse() {
  return {
    channels: [],
    pagination: undefined,
    height: undefined
  };
}

var QueryConnectionChannelsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator2 = _createForOfIteratorHelper(message.channels),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;

        _channel.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionChannelsResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(_channel.IdentifiedChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map(function (e) {
        return _channel.IdentifiedChannel.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.channels) {
      obj.channels = message.channels.map(function (e) {
        return e ? _channel.IdentifiedChannel.toJSON(e) : undefined;
      });
    } else {
      obj.channels = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? _client.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$channels2;

    var message = createBaseQueryConnectionChannelsResponse();
    message.channels = ((_object$channels2 = object.channels) === null || _object$channels2 === void 0 ? void 0 : _object$channels2.map(function (e) {
      return _channel.IdentifiedChannel.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryConnectionChannelsResponse = QueryConnectionChannelsResponse;

function createBaseQueryChannelClientStateRequest() {
  return {
    portId: "",
    channelId: ""
  };
}

var QueryChannelClientStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelClientStateRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId2, _object$channelId2;

    var message = createBaseQueryChannelClientStateRequest();
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.channelId = (_object$channelId2 = object.channelId) !== null && _object$channelId2 !== void 0 ? _object$channelId2 : "";
    return message;
  }
};
exports.QueryChannelClientStateRequest = QueryChannelClientStateRequest;

function createBaseQueryChannelClientStateResponse() {
  return {
    identifiedClientState: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

var QueryChannelClientStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.identifiedClientState !== undefined) {
      _client.IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelClientStateResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifiedClientState = _client.IdentifiedClientState.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      identifiedClientState: (0, _helpers.isSet)(object.identifiedClientState) ? _client.IdentifiedClientState.fromJSON(object.identifiedClientState) : undefined,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proofHeight: (0, _helpers.isSet)(object.proofHeight) ? _client.Height.fromJSON(object.proofHeight) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.identifiedClientState !== undefined && (obj.identifiedClientState = message.identifiedClientState ? _client.IdentifiedClientState.toJSON(message.identifiedClientState) : undefined);
    message.proof !== undefined && (obj.proof = (0, _helpers.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? _client.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$proof2;

    var message = createBaseQueryChannelClientStateResponse();
    message.identifiedClientState = object.identifiedClientState !== undefined && object.identifiedClientState !== null ? _client.IdentifiedClientState.fromPartial(object.identifiedClientState) : undefined;
    message.proof = (_object$proof2 = object.proof) !== null && _object$proof2 !== void 0 ? _object$proof2 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryChannelClientStateResponse = QueryChannelClientStateResponse;

function createBaseQueryChannelConsensusStateRequest() {
  return {
    portId: "",
    channelId: "",
    revisionNumber: _helpers.Long.UZERO,
    revisionHeight: _helpers.Long.UZERO
  };
}

var QueryChannelConsensusStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.revisionNumber.isZero()) {
      writer.uint32(24).uint64(message.revisionNumber);
    }

    if (!message.revisionHeight.isZero()) {
      writer.uint32(32).uint64(message.revisionHeight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelConsensusStateRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.revisionNumber = reader.uint64();
          break;

        case 4:
          message.revisionHeight = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : "",
      revisionNumber: (0, _helpers.isSet)(object.revisionNumber) ? _helpers.Long.fromString(object.revisionNumber) : _helpers.Long.UZERO,
      revisionHeight: (0, _helpers.isSet)(object.revisionHeight) ? _helpers.Long.fromString(object.revisionHeight) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || _helpers.Long.UZERO).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId3, _object$channelId3;

    var message = createBaseQueryChannelConsensusStateRequest();
    message.portId = (_object$portId3 = object.portId) !== null && _object$portId3 !== void 0 ? _object$portId3 : "";
    message.channelId = (_object$channelId3 = object.channelId) !== null && _object$channelId3 !== void 0 ? _object$channelId3 : "";
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? _helpers.Long.fromValue(object.revisionNumber) : _helpers.Long.UZERO;
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? _helpers.Long.fromValue(object.revisionHeight) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryChannelConsensusStateRequest = QueryChannelConsensusStateRequest;

function createBaseQueryChannelConsensusStateResponse() {
  return {
    consensusState: undefined,
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

var QueryChannelConsensusStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.consensusState !== undefined) {
      _any.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }

    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }

    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelConsensusStateResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensusState = _any.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.clientId = reader.string();
          break;

        case 3:
          message.proof = reader.bytes();
          break;

        case 4:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      consensusState: (0, _helpers.isSet)(object.consensusState) ? _any.Any.fromJSON(object.consensusState) : undefined,
      clientId: (0, _helpers.isSet)(object.clientId) ? String(object.clientId) : "",
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proofHeight: (0, _helpers.isSet)(object.proofHeight) ? _client.Height.fromJSON(object.proofHeight) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? _any.Any.toJSON(message.consensusState) : undefined);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.proof !== undefined && (obj.proof = (0, _helpers.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? _client.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$clientId, _object$proof3;

    var message = createBaseQueryChannelConsensusStateResponse();
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? _any.Any.fromPartial(object.consensusState) : undefined;
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.proof = (_object$proof3 = object.proof) !== null && _object$proof3 !== void 0 ? _object$proof3 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryChannelConsensusStateResponse = QueryChannelConsensusStateResponse;

function createBaseQueryPacketCommitmentRequest() {
  return {
    portId: "",
    channelId: "",
    sequence: _helpers.Long.UZERO
  };
}

var QueryPacketCommitmentRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketCommitmentRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : "",
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromString(object.sequence) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId4, _object$channelId4;

    var message = createBaseQueryPacketCommitmentRequest();
    message.portId = (_object$portId4 = object.portId) !== null && _object$portId4 !== void 0 ? _object$portId4 : "";
    message.channelId = (_object$channelId4 = object.channelId) !== null && _object$channelId4 !== void 0 ? _object$channelId4 : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPacketCommitmentRequest = QueryPacketCommitmentRequest;

function createBaseQueryPacketCommitmentResponse() {
  return {
    commitment: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

var QueryPacketCommitmentResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketCommitmentResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      commitment: (0, _helpers.isSet)(object.commitment) ? (0, _helpers.bytesFromBase64)(object.commitment) : new Uint8Array(),
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proofHeight: (0, _helpers.isSet)(object.proofHeight) ? _client.Height.fromJSON(object.proofHeight) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.commitment !== undefined && (obj.commitment = (0, _helpers.base64FromBytes)(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    message.proof !== undefined && (obj.proof = (0, _helpers.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? _client.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$commitment, _object$proof4;

    var message = createBaseQueryPacketCommitmentResponse();
    message.commitment = (_object$commitment = object.commitment) !== null && _object$commitment !== void 0 ? _object$commitment : new Uint8Array();
    message.proof = (_object$proof4 = object.proof) !== null && _object$proof4 !== void 0 ? _object$proof4 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryPacketCommitmentResponse = QueryPacketCommitmentResponse;

function createBaseQueryPacketCommitmentsRequest() {
  return {
    portId: "",
    channelId: "",
    pagination: undefined
  };
}

var QueryPacketCommitmentsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketCommitmentsRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId5, _object$channelId5;

    var message = createBaseQueryPacketCommitmentsRequest();
    message.portId = (_object$portId5 = object.portId) !== null && _object$portId5 !== void 0 ? _object$portId5 : "";
    message.channelId = (_object$channelId5 = object.channelId) !== null && _object$channelId5 !== void 0 ? _object$channelId5 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryPacketCommitmentsRequest = QueryPacketCommitmentsRequest;

function createBaseQueryPacketCommitmentsResponse() {
  return {
    commitments: [],
    pagination: undefined,
    height: undefined
  };
}

var QueryPacketCommitmentsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator3 = _createForOfIteratorHelper(message.commitments),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;

        _channel.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketCommitmentsResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commitments.push(_channel.PacketState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments) ? object.commitments.map(function (e) {
        return _channel.PacketState.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.commitments) {
      obj.commitments = message.commitments.map(function (e) {
        return e ? _channel.PacketState.toJSON(e) : undefined;
      });
    } else {
      obj.commitments = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? _client.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$commitments;

    var message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = ((_object$commitments = object.commitments) === null || _object$commitments === void 0 ? void 0 : _object$commitments.map(function (e) {
      return _channel.PacketState.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryPacketCommitmentsResponse = QueryPacketCommitmentsResponse;

function createBaseQueryPacketReceiptRequest() {
  return {
    portId: "",
    channelId: "",
    sequence: _helpers.Long.UZERO
  };
}

var QueryPacketReceiptRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketReceiptRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : "",
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromString(object.sequence) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId6, _object$channelId6;

    var message = createBaseQueryPacketReceiptRequest();
    message.portId = (_object$portId6 = object.portId) !== null && _object$portId6 !== void 0 ? _object$portId6 : "";
    message.channelId = (_object$channelId6 = object.channelId) !== null && _object$channelId6 !== void 0 ? _object$channelId6 : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPacketReceiptRequest = QueryPacketReceiptRequest;

function createBaseQueryPacketReceiptResponse() {
  return {
    received: false,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

var QueryPacketReceiptResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }

    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketReceiptResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;

        case 3:
          message.proof = reader.bytes();
          break;

        case 4:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      received: (0, _helpers.isSet)(object.received) ? Boolean(object.received) : false,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proofHeight: (0, _helpers.isSet)(object.proofHeight) ? _client.Height.fromJSON(object.proofHeight) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.received !== undefined && (obj.received = message.received);
    message.proof !== undefined && (obj.proof = (0, _helpers.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? _client.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$received, _object$proof5;

    var message = createBaseQueryPacketReceiptResponse();
    message.received = (_object$received = object.received) !== null && _object$received !== void 0 ? _object$received : false;
    message.proof = (_object$proof5 = object.proof) !== null && _object$proof5 !== void 0 ? _object$proof5 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryPacketReceiptResponse = QueryPacketReceiptResponse;

function createBaseQueryPacketAcknowledgementRequest() {
  return {
    portId: "",
    channelId: "",
    sequence: _helpers.Long.UZERO
  };
}

var QueryPacketAcknowledgementRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketAcknowledgementRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : "",
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromString(object.sequence) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId7, _object$channelId7;

    var message = createBaseQueryPacketAcknowledgementRequest();
    message.portId = (_object$portId7 = object.portId) !== null && _object$portId7 !== void 0 ? _object$portId7 : "";
    message.channelId = (_object$channelId7 = object.channelId) !== null && _object$channelId7 !== void 0 ? _object$channelId7 : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPacketAcknowledgementRequest = QueryPacketAcknowledgementRequest;

function createBaseQueryPacketAcknowledgementResponse() {
  return {
    acknowledgement: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

var QueryPacketAcknowledgementResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketAcknowledgementResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      acknowledgement: (0, _helpers.isSet)(object.acknowledgement) ? (0, _helpers.bytesFromBase64)(object.acknowledgement) : new Uint8Array(),
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proofHeight: (0, _helpers.isSet)(object.proofHeight) ? _client.Height.fromJSON(object.proofHeight) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.acknowledgement !== undefined && (obj.acknowledgement = (0, _helpers.base64FromBytes)(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    message.proof !== undefined && (obj.proof = (0, _helpers.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? _client.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$acknowledgeme, _object$proof6;

    var message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = (_object$acknowledgeme = object.acknowledgement) !== null && _object$acknowledgeme !== void 0 ? _object$acknowledgeme : new Uint8Array();
    message.proof = (_object$proof6 = object.proof) !== null && _object$proof6 !== void 0 ? _object$proof6 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryPacketAcknowledgementResponse = QueryPacketAcknowledgementResponse;

function createBaseQueryPacketAcknowledgementsRequest() {
  return {
    portId: "",
    channelId: "",
    pagination: undefined,
    packetCommitmentSequences: []
  };
}

var QueryPacketAcknowledgementsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    writer.uint32(34).fork();

    var _iterator4 = _createForOfIteratorHelper(message.packetCommitmentSequences),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketAcknowledgementsRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;

        case 4:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(reader.uint64());
            }
          } else {
            message.packetCommitmentSequences.push(reader.uint64());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined,
      packetCommitmentSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packetCommitmentSequences) ? object.packetCommitmentSequences.map(function (e) {
        return _helpers.Long.fromString(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);

    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map(function (e) {
        return (e || _helpers.Long.UZERO).toString();
      });
    } else {
      obj.packetCommitmentSequences = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId8, _object$channelId8, _object$packetCommitm;

    var message = createBaseQueryPacketAcknowledgementsRequest();
    message.portId = (_object$portId8 = object.portId) !== null && _object$portId8 !== void 0 ? _object$portId8 : "";
    message.channelId = (_object$channelId8 = object.channelId) !== null && _object$channelId8 !== void 0 ? _object$channelId8 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    message.packetCommitmentSequences = ((_object$packetCommitm = object.packetCommitmentSequences) === null || _object$packetCommitm === void 0 ? void 0 : _object$packetCommitm.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.QueryPacketAcknowledgementsRequest = QueryPacketAcknowledgementsRequest;

function createBaseQueryPacketAcknowledgementsResponse() {
  return {
    acknowledgements: [],
    pagination: undefined,
    height: undefined
  };
}

var QueryPacketAcknowledgementsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator5 = _createForOfIteratorHelper(message.acknowledgements),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;

        _channel.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketAcknowledgementsResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(_channel.PacketState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements) ? object.acknowledgements.map(function (e) {
        return _channel.PacketState.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(function (e) {
        return e ? _channel.PacketState.toJSON(e) : undefined;
      });
    } else {
      obj.acknowledgements = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? _client.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$acknowledgeme2;

    var message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = ((_object$acknowledgeme2 = object.acknowledgements) === null || _object$acknowledgeme2 === void 0 ? void 0 : _object$acknowledgeme2.map(function (e) {
      return _channel.PacketState.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryPacketAcknowledgementsResponse = QueryPacketAcknowledgementsResponse;

function createBaseQueryUnreceivedPacketsRequest() {
  return {
    portId: "",
    channelId: "",
    packetCommitmentSequences: []
  };
}

var QueryUnreceivedPacketsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    writer.uint32(26).fork();

    var _iterator6 = _createForOfIteratorHelper(message.packetCommitmentSequences),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnreceivedPacketsRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(reader.uint64());
            }
          } else {
            message.packetCommitmentSequences.push(reader.uint64());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : "",
      packetCommitmentSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packetCommitmentSequences) ? object.packetCommitmentSequences.map(function (e) {
        return _helpers.Long.fromString(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);

    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map(function (e) {
        return (e || _helpers.Long.UZERO).toString();
      });
    } else {
      obj.packetCommitmentSequences = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId9, _object$channelId9, _object$packetCommitm2;

    var message = createBaseQueryUnreceivedPacketsRequest();
    message.portId = (_object$portId9 = object.portId) !== null && _object$portId9 !== void 0 ? _object$portId9 : "";
    message.channelId = (_object$channelId9 = object.channelId) !== null && _object$channelId9 !== void 0 ? _object$channelId9 : "";
    message.packetCommitmentSequences = ((_object$packetCommitm2 = object.packetCommitmentSequences) === null || _object$packetCommitm2 === void 0 ? void 0 : _object$packetCommitm2.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.QueryUnreceivedPacketsRequest = QueryUnreceivedPacketsRequest;

function createBaseQueryUnreceivedPacketsResponse() {
  return {
    sequences: [],
    height: undefined
  };
}

var QueryUnreceivedPacketsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();

    var _iterator7 = _createForOfIteratorHelper(message.sequences),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    writer.ldelim();

    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnreceivedPacketsResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }

          break;

        case 2:
          message.height = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map(function (e) {
        return _helpers.Long.fromString(e);
      }) : [],
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.sequences) {
      obj.sequences = message.sequences.map(function (e) {
        return (e || _helpers.Long.UZERO).toString();
      });
    } else {
      obj.sequences = [];
    }

    message.height !== undefined && (obj.height = message.height ? _client.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$sequences;

    var message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = ((_object$sequences = object.sequences) === null || _object$sequences === void 0 ? void 0 : _object$sequences.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryUnreceivedPacketsResponse = QueryUnreceivedPacketsResponse;

function createBaseQueryUnreceivedAcksRequest() {
  return {
    portId: "",
    channelId: "",
    packetAckSequences: []
  };
}

var QueryUnreceivedAcksRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    writer.uint32(26).fork();

    var _iterator8 = _createForOfIteratorHelper(message.packetAckSequences),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnreceivedAcksRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packetAckSequences.push(reader.uint64());
            }
          } else {
            message.packetAckSequences.push(reader.uint64());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : "",
      packetAckSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packetAckSequences) ? object.packetAckSequences.map(function (e) {
        return _helpers.Long.fromString(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);

    if (message.packetAckSequences) {
      obj.packetAckSequences = message.packetAckSequences.map(function (e) {
        return (e || _helpers.Long.UZERO).toString();
      });
    } else {
      obj.packetAckSequences = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId10, _object$channelId10, _object$packetAckSequ;

    var message = createBaseQueryUnreceivedAcksRequest();
    message.portId = (_object$portId10 = object.portId) !== null && _object$portId10 !== void 0 ? _object$portId10 : "";
    message.channelId = (_object$channelId10 = object.channelId) !== null && _object$channelId10 !== void 0 ? _object$channelId10 : "";
    message.packetAckSequences = ((_object$packetAckSequ = object.packetAckSequences) === null || _object$packetAckSequ === void 0 ? void 0 : _object$packetAckSequ.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.QueryUnreceivedAcksRequest = QueryUnreceivedAcksRequest;

function createBaseQueryUnreceivedAcksResponse() {
  return {
    sequences: [],
    height: undefined
  };
}

var QueryUnreceivedAcksResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();

    var _iterator9 = _createForOfIteratorHelper(message.sequences),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    writer.ldelim();

    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnreceivedAcksResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }

          break;

        case 2:
          message.height = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map(function (e) {
        return _helpers.Long.fromString(e);
      }) : [],
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.sequences) {
      obj.sequences = message.sequences.map(function (e) {
        return (e || _helpers.Long.UZERO).toString();
      });
    } else {
      obj.sequences = [];
    }

    message.height !== undefined && (obj.height = message.height ? _client.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$sequences2;

    var message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = ((_object$sequences2 = object.sequences) === null || _object$sequences2 === void 0 ? void 0 : _object$sequences2.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryUnreceivedAcksResponse = QueryUnreceivedAcksResponse;

function createBaseQueryNextSequenceReceiveRequest() {
  return {
    portId: "",
    channelId: ""
  };
}

var QueryNextSequenceReceiveRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNextSequenceReceiveRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId11, _object$channelId11;

    var message = createBaseQueryNextSequenceReceiveRequest();
    message.portId = (_object$portId11 = object.portId) !== null && _object$portId11 !== void 0 ? _object$portId11 : "";
    message.channelId = (_object$channelId11 = object.channelId) !== null && _object$channelId11 !== void 0 ? _object$channelId11 : "";
    return message;
  }
};
exports.QueryNextSequenceReceiveRequest = QueryNextSequenceReceiveRequest;

function createBaseQueryNextSequenceReceiveResponse() {
  return {
    nextSequenceReceive: _helpers.Long.UZERO,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

var QueryNextSequenceReceiveResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.nextSequenceReceive.isZero()) {
      writer.uint32(8).uint64(message.nextSequenceReceive);
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNextSequenceReceiveResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextSequenceReceive = reader.uint64();
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      nextSequenceReceive: (0, _helpers.isSet)(object.nextSequenceReceive) ? _helpers.Long.fromString(object.nextSequenceReceive) : _helpers.Long.UZERO,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proofHeight: (0, _helpers.isSet)(object.proofHeight) ? _client.Height.fromJSON(object.proofHeight) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.nextSequenceReceive !== undefined && (obj.nextSequenceReceive = (message.nextSequenceReceive || _helpers.Long.UZERO).toString());
    message.proof !== undefined && (obj.proof = (0, _helpers.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? _client.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$proof7;

    var message = createBaseQueryNextSequenceReceiveResponse();
    message.nextSequenceReceive = object.nextSequenceReceive !== undefined && object.nextSequenceReceive !== null ? _helpers.Long.fromValue(object.nextSequenceReceive) : _helpers.Long.UZERO;
    message.proof = (_object$proof7 = object.proof) !== null && _object$proof7 !== void 0 ? _object$proof7 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryNextSequenceReceiveResponse = QueryNextSequenceReceiveResponse;