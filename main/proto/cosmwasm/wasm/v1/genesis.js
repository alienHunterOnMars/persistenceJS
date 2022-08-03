"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sequence = exports.GenesisState_GenMsgs = exports.GenesisState = exports.Contract = exports.Code = void 0;

var _tx = require("./tx");

var _types = require("./types");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createBaseGenesisState() {
  return {
    params: undefined,
    codes: [],
    contracts: [],
    sequences: [],
    genMsgs: []
  };
}

var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.params !== undefined) {
      _types.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    var _iterator = _createForOfIteratorHelper(message.codes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Code.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(message.contracts),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        Contract.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var _iterator3 = _createForOfIteratorHelper(message.sequences),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        Sequence.encode(_v2, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var _iterator4 = _createForOfIteratorHelper(message.genMsgs),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        GenesisState_GenMsgs.encode(_v3, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = _types.Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;

        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;

        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;

        case 5:
          message.genMsgs.push(GenesisState_GenMsgs.decode(reader, reader.uint32()));
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
      params: (0, _helpers.isSet)(object.params) ? _types.Params.fromJSON(object.params) : undefined,
      codes: Array.isArray(object === null || object === void 0 ? void 0 : object.codes) ? object.codes.map(function (e) {
        return Code.fromJSON(e);
      }) : [],
      contracts: Array.isArray(object === null || object === void 0 ? void 0 : object.contracts) ? object.contracts.map(function (e) {
        return Contract.fromJSON(e);
      }) : [],
      sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map(function (e) {
        return Sequence.fromJSON(e);
      }) : [],
      genMsgs: Array.isArray(object === null || object === void 0 ? void 0 : object.genMsgs) ? object.genMsgs.map(function (e) {
        return GenesisState_GenMsgs.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.params !== undefined && (obj.params = message.params ? _types.Params.toJSON(message.params) : undefined);

    if (message.codes) {
      obj.codes = message.codes.map(function (e) {
        return e ? Code.toJSON(e) : undefined;
      });
    } else {
      obj.codes = [];
    }

    if (message.contracts) {
      obj.contracts = message.contracts.map(function (e) {
        return e ? Contract.toJSON(e) : undefined;
      });
    } else {
      obj.contracts = [];
    }

    if (message.sequences) {
      obj.sequences = message.sequences.map(function (e) {
        return e ? Sequence.toJSON(e) : undefined;
      });
    } else {
      obj.sequences = [];
    }

    if (message.genMsgs) {
      obj.genMsgs = message.genMsgs.map(function (e) {
        return e ? GenesisState_GenMsgs.toJSON(e) : undefined;
      });
    } else {
      obj.genMsgs = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$codes, _object$contracts, _object$sequences, _object$genMsgs;

    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _types.Params.fromPartial(object.params) : undefined;
    message.codes = ((_object$codes = object.codes) === null || _object$codes === void 0 ? void 0 : _object$codes.map(function (e) {
      return Code.fromPartial(e);
    })) || [];
    message.contracts = ((_object$contracts = object.contracts) === null || _object$contracts === void 0 ? void 0 : _object$contracts.map(function (e) {
      return Contract.fromPartial(e);
    })) || [];
    message.sequences = ((_object$sequences = object.sequences) === null || _object$sequences === void 0 ? void 0 : _object$sequences.map(function (e) {
      return Sequence.fromPartial(e);
    })) || [];
    message.genMsgs = ((_object$genMsgs = object.genMsgs) === null || _object$genMsgs === void 0 ? void 0 : _object$genMsgs.map(function (e) {
      return GenesisState_GenMsgs.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;

function createBaseGenesisState_GenMsgs() {
  return {
    storeCode: undefined,
    instantiateContract: undefined,
    executeContract: undefined
  };
}

var GenesisState_GenMsgs = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.storeCode !== undefined) {
      _tx.MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
    }

    if (message.instantiateContract !== undefined) {
      _tx.MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
    }

    if (message.executeContract !== undefined) {
      _tx.MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState_GenMsgs();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.storeCode = _tx.MsgStoreCode.decode(reader, reader.uint32());
          break;

        case 2:
          message.instantiateContract = _tx.MsgInstantiateContract.decode(reader, reader.uint32());
          break;

        case 3:
          message.executeContract = _tx.MsgExecuteContract.decode(reader, reader.uint32());
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
      storeCode: (0, _helpers.isSet)(object.storeCode) ? _tx.MsgStoreCode.fromJSON(object.storeCode) : undefined,
      instantiateContract: (0, _helpers.isSet)(object.instantiateContract) ? _tx.MsgInstantiateContract.fromJSON(object.instantiateContract) : undefined,
      executeContract: (0, _helpers.isSet)(object.executeContract) ? _tx.MsgExecuteContract.fromJSON(object.executeContract) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.storeCode !== undefined && (obj.storeCode = message.storeCode ? _tx.MsgStoreCode.toJSON(message.storeCode) : undefined);
    message.instantiateContract !== undefined && (obj.instantiateContract = message.instantiateContract ? _tx.MsgInstantiateContract.toJSON(message.instantiateContract) : undefined);
    message.executeContract !== undefined && (obj.executeContract = message.executeContract ? _tx.MsgExecuteContract.toJSON(message.executeContract) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGenesisState_GenMsgs();
    message.storeCode = object.storeCode !== undefined && object.storeCode !== null ? _tx.MsgStoreCode.fromPartial(object.storeCode) : undefined;
    message.instantiateContract = object.instantiateContract !== undefined && object.instantiateContract !== null ? _tx.MsgInstantiateContract.fromPartial(object.instantiateContract) : undefined;
    message.executeContract = object.executeContract !== undefined && object.executeContract !== null ? _tx.MsgExecuteContract.fromPartial(object.executeContract) : undefined;
    return message;
  }
};
exports.GenesisState_GenMsgs = GenesisState_GenMsgs;

function createBaseCode() {
  return {
    codeId: _helpers.Long.UZERO,
    codeInfo: undefined,
    codeBytes: new Uint8Array(),
    pinned: false
  };
}

var Code = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.codeInfo !== undefined) {
      _types.CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }

    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCode();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;

        case 2:
          message.codeInfo = _types.CodeInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.codeBytes = reader.bytes();
          break;

        case 4:
          message.pinned = reader.bool();
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
      codeId: (0, _helpers.isSet)(object.codeId) ? _helpers.Long.fromString(object.codeId) : _helpers.Long.UZERO,
      codeInfo: (0, _helpers.isSet)(object.codeInfo) ? _types.CodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: (0, _helpers.isSet)(object.codeBytes) ? (0, _helpers.bytesFromBase64)(object.codeBytes) : new Uint8Array(),
      pinned: (0, _helpers.isSet)(object.pinned) ? Boolean(object.pinned) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || _helpers.Long.UZERO).toString());
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? _types.CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined && (obj.codeBytes = (0, _helpers.base64FromBytes)(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$codeBytes, _object$pinned;

    var message = createBaseCode();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? _helpers.Long.fromValue(object.codeId) : _helpers.Long.UZERO;
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? _types.CodeInfo.fromPartial(object.codeInfo) : undefined;
    message.codeBytes = (_object$codeBytes = object.codeBytes) !== null && _object$codeBytes !== void 0 ? _object$codeBytes : new Uint8Array();
    message.pinned = (_object$pinned = object.pinned) !== null && _object$pinned !== void 0 ? _object$pinned : false;
    return message;
  }
};
exports.Code = Code;

function createBaseContract() {
  return {
    contractAddress: "",
    contractInfo: undefined,
    contractState: []
  };
}

var Contract = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.contractInfo !== undefined) {
      _types.ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }

    var _iterator5 = _createForOfIteratorHelper(message.contractState),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;

        _types.Model.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContract();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.contractInfo = _types.ContractInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.contractState.push(_types.Model.decode(reader, reader.uint32()));
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
      contractAddress: (0, _helpers.isSet)(object.contractAddress) ? String(object.contractAddress) : "",
      contractInfo: (0, _helpers.isSet)(object.contractInfo) ? _types.ContractInfo.fromJSON(object.contractInfo) : undefined,
      contractState: Array.isArray(object === null || object === void 0 ? void 0 : object.contractState) ? object.contractState.map(function (e) {
        return _types.Model.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? _types.ContractInfo.toJSON(message.contractInfo) : undefined);

    if (message.contractState) {
      obj.contractState = message.contractState.map(function (e) {
        return e ? _types.Model.toJSON(e) : undefined;
      });
    } else {
      obj.contractState = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$contractAddre, _object$contractState;

    var message = createBaseContract();
    message.contractAddress = (_object$contractAddre = object.contractAddress) !== null && _object$contractAddre !== void 0 ? _object$contractAddre : "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? _types.ContractInfo.fromPartial(object.contractInfo) : undefined;
    message.contractState = ((_object$contractState = object.contractState) === null || _object$contractState === void 0 ? void 0 : _object$contractState.map(function (e) {
      return _types.Model.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Contract = Contract;

function createBaseSequence() {
  return {
    idKey: new Uint8Array(),
    value: _helpers.Long.UZERO
  };
}

var Sequence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSequence();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;

        case 2:
          message.value = reader.uint64();
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
      idKey: (0, _helpers.isSet)(object.idKey) ? (0, _helpers.bytesFromBase64)(object.idKey) : new Uint8Array(),
      value: (0, _helpers.isSet)(object.value) ? _helpers.Long.fromString(object.value) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.idKey !== undefined && (obj.idKey = (0, _helpers.base64FromBytes)(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$idKey;

    var message = createBaseSequence();
    message.idKey = (_object$idKey = object.idKey) !== null && _object$idKey !== void 0 ? _object$idKey : new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? _helpers.Long.fromValue(object.value) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Sequence = Sequence;