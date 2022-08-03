import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "@osmonauts/helpers";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */

function createBaseStoreCodeProposal() {
  return {
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined
  };
}

export const StoreCodeProposal = {
  encode(message, writer = _m0.Writer.create()) {
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
      AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

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
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$title, _object$description, _object$runAs, _object$wasmByteCode;

    const message = createBaseStoreCodeProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.runAs = (_object$runAs = object.runAs) !== null && _object$runAs !== void 0 ? _object$runAs : "";
    message.wasmByteCode = (_object$wasmByteCode = object.wasmByteCode) !== null && _object$wasmByteCode !== void 0 ? _object$wasmByteCode : new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }

};

function createBaseInstantiateContractProposal() {
  return {
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const InstantiateContractProposal = {
  encode(message, writer = _m0.Writer.create()) {
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

    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

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
          message.funds.push(Coin.decode(reader, reader.uint32()));
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(e => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$title2, _object$description2, _object$runAs2, _object$admin, _object$label, _object$msg, _object$funds;

    const message = createBaseInstantiateContractProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.runAs = (_object$runAs2 = object.runAs) !== null && _object$runAs2 !== void 0 ? _object$runAs2 : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : "";
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : new Uint8Array();
    message.funds = ((_object$funds = object.funds) === null || _object$funds === void 0 ? void 0 : _object$funds.map(e => Coin.fromPartial(e))) || [];
    return message;
  }

};

function createBaseMigrateContractProposal() {
  return {
    title: "",
    description: "",
    contract: "",
    codeId: Long.UZERO,
    msg: new Uint8Array()
  };
}

export const MigrateContractProposal = {
  encode(message, writer = _m0.Writer.create()) {
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

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromJSON(object) {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$title3, _object$description3, _object$contract, _object$msg2;

    const message = createBaseMigrateContractProposal();
    message.title = (_object$title3 = object.title) !== null && _object$title3 !== void 0 ? _object$title3 : "";
    message.description = (_object$description3 = object.description) !== null && _object$description3 !== void 0 ? _object$description3 : "";
    message.contract = (_object$contract = object.contract) !== null && _object$contract !== void 0 ? _object$contract : "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.msg = (_object$msg2 = object.msg) !== null && _object$msg2 !== void 0 ? _object$msg2 : new Uint8Array();
    return message;
  }

};

function createBaseSudoContractProposal() {
  return {
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}

export const SudoContractProposal = {
  encode(message, writer = _m0.Writer.create()) {
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

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromJSON(object) {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$title4, _object$description4, _object$contract2, _object$msg3;

    const message = createBaseSudoContractProposal();
    message.title = (_object$title4 = object.title) !== null && _object$title4 !== void 0 ? _object$title4 : "";
    message.description = (_object$description4 = object.description) !== null && _object$description4 !== void 0 ? _object$description4 : "";
    message.contract = (_object$contract2 = object.contract) !== null && _object$contract2 !== void 0 ? _object$contract2 : "";
    message.msg = (_object$msg3 = object.msg) !== null && _object$msg3 !== void 0 ? _object$msg3 : new Uint8Array();
    return message;
  }

};

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

export const ExecuteContractProposal = {
  encode(message, writer = _m0.Writer.create()) {
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

    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

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
          message.funds.push(Coin.decode(reader, reader.uint32()));
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(e => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$title5, _object$description5, _object$runAs3, _object$contract3, _object$msg4, _object$funds2;

    const message = createBaseExecuteContractProposal();
    message.title = (_object$title5 = object.title) !== null && _object$title5 !== void 0 ? _object$title5 : "";
    message.description = (_object$description5 = object.description) !== null && _object$description5 !== void 0 ? _object$description5 : "";
    message.runAs = (_object$runAs3 = object.runAs) !== null && _object$runAs3 !== void 0 ? _object$runAs3 : "";
    message.contract = (_object$contract3 = object.contract) !== null && _object$contract3 !== void 0 ? _object$contract3 : "";
    message.msg = (_object$msg4 = object.msg) !== null && _object$msg4 !== void 0 ? _object$msg4 : new Uint8Array();
    message.funds = ((_object$funds2 = object.funds) === null || _object$funds2 === void 0 ? void 0 : _object$funds2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }

};

function createBaseUpdateAdminProposal() {
  return {
    title: "",
    description: "",
    newAdmin: "",
    contract: ""
  };
}

export const UpdateAdminProposal = {
  encode(message, writer = _m0.Writer.create()) {
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

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromJSON(object) {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(object) {
    var _object$title6, _object$description6, _object$newAdmin, _object$contract4;

    const message = createBaseUpdateAdminProposal();
    message.title = (_object$title6 = object.title) !== null && _object$title6 !== void 0 ? _object$title6 : "";
    message.description = (_object$description6 = object.description) !== null && _object$description6 !== void 0 ? _object$description6 : "";
    message.newAdmin = (_object$newAdmin = object.newAdmin) !== null && _object$newAdmin !== void 0 ? _object$newAdmin : "";
    message.contract = (_object$contract4 = object.contract) !== null && _object$contract4 !== void 0 ? _object$contract4 : "";
    return message;
  }

};

function createBaseClearAdminProposal() {
  return {
    title: "",
    description: "",
    contract: ""
  };
}

export const ClearAdminProposal = {
  encode(message, writer = _m0.Writer.create()) {
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

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromJSON(object) {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(object) {
    var _object$title7, _object$description7, _object$contract5;

    const message = createBaseClearAdminProposal();
    message.title = (_object$title7 = object.title) !== null && _object$title7 !== void 0 ? _object$title7 : "";
    message.description = (_object$description7 = object.description) !== null && _object$description7 !== void 0 ? _object$description7 : "";
    message.contract = (_object$contract5 = object.contract) !== null && _object$contract5 !== void 0 ? _object$contract5 : "";
    return message;
  }

};

function createBasePinCodesProposal() {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}

export const PinCodesProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(26).fork();

    for (const v of message.codeIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

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

  fromJSON(object) {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.codeIds) ? object.codeIds.map(e => Long.fromString(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$title8, _object$description8, _object$codeIds;

    const message = createBasePinCodesProposal();
    message.title = (_object$title8 = object.title) !== null && _object$title8 !== void 0 ? _object$title8 : "";
    message.description = (_object$description8 = object.description) !== null && _object$description8 !== void 0 ? _object$description8 : "";
    message.codeIds = ((_object$codeIds = object.codeIds) === null || _object$codeIds === void 0 ? void 0 : _object$codeIds.map(e => Long.fromValue(e))) || [];
    return message;
  }

};

function createBaseUnpinCodesProposal() {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}

export const UnpinCodesProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(26).fork();

    for (const v of message.codeIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

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

  fromJSON(object) {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.codeIds) ? object.codeIds.map(e => Long.fromString(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$title9, _object$description9, _object$codeIds2;

    const message = createBaseUnpinCodesProposal();
    message.title = (_object$title9 = object.title) !== null && _object$title9 !== void 0 ? _object$title9 : "";
    message.description = (_object$description9 = object.description) !== null && _object$description9 !== void 0 ? _object$description9 : "";
    message.codeIds = ((_object$codeIds2 = object.codeIds) === null || _object$codeIds2 === void 0 ? void 0 : _object$codeIds2.map(e => Long.fromValue(e))) || [];
    return message;
  }

};

function createBaseAccessConfigUpdate() {
  return {
    codeId: Long.UZERO,
    instantiatePermission: undefined
  };
}

export const AccessConfigUpdate = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfigUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;

        case 2:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
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
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO,
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseAccessConfigUpdate();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }

};

function createBaseUpdateInstantiateConfigProposal() {
  return {
    title: "",
    description: "",
    accessConfigUpdates: []
  };
}

export const UpdateInstantiateConfigProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.accessConfigUpdates) {
      AccessConfigUpdate.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstantiateConfigProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromJSON(object) {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      accessConfigUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.accessConfigUpdates) ? object.accessConfigUpdates.map(e => AccessConfigUpdate.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.accessConfigUpdates) {
      obj.accessConfigUpdates = message.accessConfigUpdates.map(e => e ? AccessConfigUpdate.toJSON(e) : undefined);
    } else {
      obj.accessConfigUpdates = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$title10, _object$description10, _object$accessConfigU;

    const message = createBaseUpdateInstantiateConfigProposal();
    message.title = (_object$title10 = object.title) !== null && _object$title10 !== void 0 ? _object$title10 : "";
    message.description = (_object$description10 = object.description) !== null && _object$description10 !== void 0 ? _object$description10 : "";
    message.accessConfigUpdates = ((_object$accessConfigU = object.accessConfigUpdates) === null || _object$accessConfigU === void 0 ? void 0 : _object$accessConfigU.map(e => AccessConfigUpdate.fromPartial(e))) || [];
    return message;
  }

};