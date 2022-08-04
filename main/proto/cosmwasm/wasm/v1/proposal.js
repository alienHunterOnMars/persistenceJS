"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateInstantiateConfigProposal = exports.UpdateAdminProposal = exports.UnpinCodesProposal = exports.SudoContractProposal = exports.StoreCodeProposal = exports.PinCodesProposal = exports.MigrateContractProposal = exports.InstantiateContractProposal = exports.ExecuteContractProposal = exports.ClearAdminProposal = exports.AccessConfigUpdate = void 0;

var _types = require("./types");

var _coin = require("../../../cosmos/base/v1beta1/coin");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createBaseStoreCodeProposal() {
  return {
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined
  };
}

var StoreCodeProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }

    if (message.instantiatePermission !== undefined) {
      _types.AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStoreCodeProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.wasmByteCode = reader.bytes();
          break;

        case 7:
          message.instantiatePermission = _types.AccessConfig.decode(reader, reader.uint32());
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      runAs: (0, _helpers.isSet)(object.runAs) ? String(object.runAs) : "",
      wasmByteCode: (0, _helpers.isSet)(object.wasmByteCode) ? (0, _helpers.bytesFromBase64)(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: (0, _helpers.isSet)(object.instantiatePermission) ? _types.AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = (0, _helpers.base64FromBytes)(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? _types.AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title, _object$description, _object$runAs, _object$wasmByteCode;

    var message = createBaseStoreCodeProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.runAs = (_object$runAs = object.runAs) !== null && _object$runAs !== void 0 ? _object$runAs : "";
    message.wasmByteCode = (_object$wasmByteCode = object.wasmByteCode) !== null && _object$wasmByteCode !== void 0 ? _object$wasmByteCode : new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? _types.AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }
};
exports.StoreCodeProposal = StoreCodeProposal;

function createBaseInstantiateContractProposal() {
  return {
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: _helpers.Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}

var InstantiateContractProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }

    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }

    var _iterator = _createForOfIteratorHelper(message.funds),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;

        _coin.Coin.encode(v, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInstantiateContractProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.admin = reader.string();
          break;

        case 5:
          message.codeId = reader.uint64();
          break;

        case 6:
          message.label = reader.string();
          break;

        case 7:
          message.msg = reader.bytes();
          break;

        case 8:
          message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      runAs: (0, _helpers.isSet)(object.runAs) ? String(object.runAs) : "",
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      codeId: (0, _helpers.isSet)(object.codeId) ? _helpers.Long.fromString(object.codeId) : _helpers.Long.UZERO,
      label: (0, _helpers.isSet)(object.label) ? String(object.label) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || _helpers.Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = (0, _helpers.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(function (e) {
        return e ? _coin.Coin.toJSON(e) : undefined;
      });
    } else {
      obj.funds = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title2, _object$description2, _object$runAs2, _object$admin, _object$label, _object$msg, _object$funds;

    var message = createBaseInstantiateContractProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.runAs = (_object$runAs2 = object.runAs) !== null && _object$runAs2 !== void 0 ? _object$runAs2 : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? _helpers.Long.fromValue(object.codeId) : _helpers.Long.UZERO;
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : "";
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : new Uint8Array();
    message.funds = ((_object$funds = object.funds) === null || _object$funds === void 0 ? void 0 : _object$funds.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.InstantiateContractProposal = InstantiateContractProposal;

function createBaseMigrateContractProposal() {
  return {
    title: "",
    description: "",
    contract: "",
    codeId: _helpers.Long.UZERO,
    msg: new Uint8Array()
  };
}

var MigrateContractProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }

    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMigrateContractProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.codeId = reader.uint64();
          break;

        case 6:
          message.msg = reader.bytes();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      codeId: (0, _helpers.isSet)(object.codeId) ? _helpers.Long.fromString(object.codeId) : _helpers.Long.UZERO,
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || _helpers.Long.UZERO).toString());
    message.msg !== undefined && (obj.msg = (0, _helpers.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title3, _object$description3, _object$contract, _object$msg2;

    var message = createBaseMigrateContractProposal();
    message.title = (_object$title3 = object.title) !== null && _object$title3 !== void 0 ? _object$title3 : "";
    message.description = (_object$description3 = object.description) !== null && _object$description3 !== void 0 ? _object$description3 : "";
    message.contract = (_object$contract = object.contract) !== null && _object$contract !== void 0 ? _object$contract : "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? _helpers.Long.fromValue(object.codeId) : _helpers.Long.UZERO;
    message.msg = (_object$msg2 = object.msg) !== null && _object$msg2 !== void 0 ? _object$msg2 : new Uint8Array();
    return message;
  }
};
exports.MigrateContractProposal = MigrateContractProposal;

function createBaseSudoContractProposal() {
  return {
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}

var SudoContractProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSudoContractProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.msg = reader.bytes();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = (0, _helpers.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title4, _object$description4, _object$contract2, _object$msg3;

    var message = createBaseSudoContractProposal();
    message.title = (_object$title4 = object.title) !== null && _object$title4 !== void 0 ? _object$title4 : "";
    message.description = (_object$description4 = object.description) !== null && _object$description4 !== void 0 ? _object$description4 : "";
    message.contract = (_object$contract2 = object.contract) !== null && _object$contract2 !== void 0 ? _object$contract2 : "";
    message.msg = (_object$msg3 = object.msg) !== null && _object$msg3 !== void 0 ? _object$msg3 : new Uint8Array();
    return message;
  }
};
exports.SudoContractProposal = SudoContractProposal;

function createBaseExecuteContractProposal() {
  return {
    title: "",
    description: "",
    runAs: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}

var ExecuteContractProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    var _iterator2 = _createForOfIteratorHelper(message.funds),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;

        _coin.Coin.encode(v, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseExecuteContractProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      runAs: (0, _helpers.isSet)(object.runAs) ? String(object.runAs) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = (0, _helpers.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(function (e) {
        return e ? _coin.Coin.toJSON(e) : undefined;
      });
    } else {
      obj.funds = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title5, _object$description5, _object$runAs3, _object$contract3, _object$msg4, _object$funds2;

    var message = createBaseExecuteContractProposal();
    message.title = (_object$title5 = object.title) !== null && _object$title5 !== void 0 ? _object$title5 : "";
    message.description = (_object$description5 = object.description) !== null && _object$description5 !== void 0 ? _object$description5 : "";
    message.runAs = (_object$runAs3 = object.runAs) !== null && _object$runAs3 !== void 0 ? _object$runAs3 : "";
    message.contract = (_object$contract3 = object.contract) !== null && _object$contract3 !== void 0 ? _object$contract3 : "";
    message.msg = (_object$msg4 = object.msg) !== null && _object$msg4 !== void 0 ? _object$msg4 : new Uint8Array();
    message.funds = ((_object$funds2 = object.funds) === null || _object$funds2 === void 0 ? void 0 : _object$funds2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ExecuteContractProposal = ExecuteContractProposal;

function createBaseUpdateAdminProposal() {
  return {
    title: "",
    description: "",
    newAdmin: "",
    contract: ""
  };
}

var UpdateAdminProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUpdateAdminProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        case 4:
          message.contract = reader.string();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      newAdmin: (0, _helpers.isSet)(object.newAdmin) ? String(object.newAdmin) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title6, _object$description6, _object$newAdmin, _object$contract4;

    var message = createBaseUpdateAdminProposal();
    message.title = (_object$title6 = object.title) !== null && _object$title6 !== void 0 ? _object$title6 : "";
    message.description = (_object$description6 = object.description) !== null && _object$description6 !== void 0 ? _object$description6 : "";
    message.newAdmin = (_object$newAdmin = object.newAdmin) !== null && _object$newAdmin !== void 0 ? _object$newAdmin : "";
    message.contract = (_object$contract4 = object.contract) !== null && _object$contract4 !== void 0 ? _object$contract4 : "";
    return message;
  }
};
exports.UpdateAdminProposal = UpdateAdminProposal;

function createBaseClearAdminProposal() {
  return {
    title: "",
    description: "",
    contract: ""
  };
}

var ClearAdminProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseClearAdminProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title7, _object$description7, _object$contract5;

    var message = createBaseClearAdminProposal();
    message.title = (_object$title7 = object.title) !== null && _object$title7 !== void 0 ? _object$title7 : "";
    message.description = (_object$description7 = object.description) !== null && _object$description7 !== void 0 ? _object$description7 : "";
    message.contract = (_object$contract5 = object.contract) !== null && _object$contract5 !== void 0 ? _object$contract5 : "";
    return message;
  }
};
exports.ClearAdminProposal = ClearAdminProposal;

function createBasePinCodesProposal() {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}

var PinCodesProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(26).fork();

    var _iterator3 = _createForOfIteratorHelper(message.codeIds),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePinCodesProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.codeIds) ? object.codeIds.map(function (e) {
        return _helpers.Long.fromString(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(function (e) {
        return (e || _helpers.Long.UZERO).toString();
      });
    } else {
      obj.codeIds = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title8, _object$description8, _object$codeIds;

    var message = createBasePinCodesProposal();
    message.title = (_object$title8 = object.title) !== null && _object$title8 !== void 0 ? _object$title8 : "";
    message.description = (_object$description8 = object.description) !== null && _object$description8 !== void 0 ? _object$description8 : "";
    message.codeIds = ((_object$codeIds = object.codeIds) === null || _object$codeIds === void 0 ? void 0 : _object$codeIds.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.PinCodesProposal = PinCodesProposal;

function createBaseUnpinCodesProposal() {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}

var UnpinCodesProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(26).fork();

    var _iterator4 = _createForOfIteratorHelper(message.codeIds),
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
    var message = createBaseUnpinCodesProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.codeIds) ? object.codeIds.map(function (e) {
        return _helpers.Long.fromString(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(function (e) {
        return (e || _helpers.Long.UZERO).toString();
      });
    } else {
      obj.codeIds = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title9, _object$description9, _object$codeIds2;

    var message = createBaseUnpinCodesProposal();
    message.title = (_object$title9 = object.title) !== null && _object$title9 !== void 0 ? _object$title9 : "";
    message.description = (_object$description9 = object.description) !== null && _object$description9 !== void 0 ? _object$description9 : "";
    message.codeIds = ((_object$codeIds2 = object.codeIds) === null || _object$codeIds2 === void 0 ? void 0 : _object$codeIds2.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.UnpinCodesProposal = UnpinCodesProposal;

function createBaseAccessConfigUpdate() {
  return {
    codeId: _helpers.Long.UZERO,
    instantiatePermission: undefined
  };
}

var AccessConfigUpdate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.instantiatePermission !== undefined) {
      _types.AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccessConfigUpdate();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;

        case 2:
          message.instantiatePermission = _types.AccessConfig.decode(reader, reader.uint32());
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
      instantiatePermission: (0, _helpers.isSet)(object.instantiatePermission) ? _types.AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || _helpers.Long.UZERO).toString());
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? _types.AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseAccessConfigUpdate();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? _helpers.Long.fromValue(object.codeId) : _helpers.Long.UZERO;
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? _types.AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }
};
exports.AccessConfigUpdate = AccessConfigUpdate;

function createBaseUpdateInstantiateConfigProposal() {
  return {
    title: "",
    description: "",
    accessConfigUpdates: []
  };
}

var UpdateInstantiateConfigProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    var _iterator5 = _createForOfIteratorHelper(message.accessConfigUpdates),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        AccessConfigUpdate.encode(v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseUpdateInstantiateConfigProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.accessConfigUpdates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      accessConfigUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.accessConfigUpdates) ? object.accessConfigUpdates.map(function (e) {
        return AccessConfigUpdate.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.accessConfigUpdates) {
      obj.accessConfigUpdates = message.accessConfigUpdates.map(function (e) {
        return e ? AccessConfigUpdate.toJSON(e) : undefined;
      });
    } else {
      obj.accessConfigUpdates = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title10, _object$description10, _object$accessConfigU;

    var message = createBaseUpdateInstantiateConfigProposal();
    message.title = (_object$title10 = object.title) !== null && _object$title10 !== void 0 ? _object$title10 : "";
    message.description = (_object$description10 = object.description) !== null && _object$description10 !== void 0 ? _object$description10 : "";
    message.accessConfigUpdates = ((_object$accessConfigU = object.accessConfigUpdates) === null || _object$accessConfigU === void 0 ? void 0 : _object$accessConfigU.map(function (e) {
      return AccessConfigUpdate.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.UpdateInstantiateConfigProposal = UpdateInstantiateConfigProposal;