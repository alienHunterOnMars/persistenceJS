"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cw20Ics20QueryClient = exports.Cw20Ics20Client = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.3.6.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */
var Cw20Ics20QueryClient = /*#__PURE__*/(0, _createClass2["default"])(function Cw20Ics20QueryClient(client, contractAddress) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Cw20Ics20QueryClient);
  (0, _defineProperty2["default"])(this, "client", void 0);
  (0, _defineProperty2["default"])(this, "contractAddress", void 0);
  (0, _defineProperty2["default"])(this, "port", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
              port: {}
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  (0, _defineProperty2["default"])(this, "listChannels", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
              list_channels: {}
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  (0, _defineProperty2["default"])(this, "channel", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
      var id;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref3.id;
              return _context3.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
                channel: {
                  id: id
                }
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "config", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
              config: {}
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  (0, _defineProperty2["default"])(this, "admin", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
              admin: {}
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  (0, _defineProperty2["default"])(this, "allowed", /*#__PURE__*/function () {
    var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_ref7) {
      var contract;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              contract = _ref7.contract;
              return _context6.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
                allowed: {
                  contract: contract
                }
              }));

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x2) {
      return _ref8.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "listAllowed", /*#__PURE__*/function () {
    var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_ref9) {
      var limit, startAfter;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              limit = _ref9.limit, startAfter = _ref9.startAfter;
              return _context7.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
                list_allowed: {
                  limit: limit,
                  start_after: startAfter
                }
              }));

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x3) {
      return _ref10.apply(this, arguments);
    };
  }());
  this.client = client;
  this.contractAddress = contractAddress;
  this.port = this.port.bind(this);
  this.listChannels = this.listChannels.bind(this);
  this.channel = this.channel.bind(this);
  this.config = this.config.bind(this);
  this.admin = this.admin.bind(this);
  this.allowed = this.allowed.bind(this);
  this.listAllowed = this.listAllowed.bind(this);
});
exports.Cw20Ics20QueryClient = Cw20Ics20QueryClient;

var Cw20Ics20Client = /*#__PURE__*/function (_Cw20Ics20QueryClient) {
  (0, _inherits2["default"])(Cw20Ics20Client, _Cw20Ics20QueryClient);

  var _super = _createSuper(Cw20Ics20Client);

  function Cw20Ics20Client(client, _sender, contractAddress) {
    var _this2;

    (0, _classCallCheck2["default"])(this, Cw20Ics20Client);
    _this2 = _super.call(this, client, contractAddress);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "client", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "sender", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "contractAddress", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "receive", /*#__PURE__*/function () {
      var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(_ref11) {
        var amount,
            msg,
            sender,
            fee,
            memo,
            funds,
            _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                amount = _ref11.amount, msg = _ref11.msg, sender = _ref11.sender;
                fee = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : "auto";
                memo = _args8.length > 2 ? _args8[2] : undefined;
                funds = _args8.length > 3 ? _args8[3] : undefined;
                _context8.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  receive: {
                    amount: amount,
                    msg: msg,
                    sender: sender
                  }
                }, fee, memo, funds);

              case 6:
                return _context8.abrupt("return", _context8.sent);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x4) {
        return _ref12.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "transfer", /*#__PURE__*/function () {
      var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(_ref13) {
        var channel,
            remoteAddress,
            timeout,
            fee,
            memo,
            funds,
            _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                channel = _ref13.channel, remoteAddress = _ref13.remoteAddress, timeout = _ref13.timeout;
                fee = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : "auto";
                memo = _args9.length > 2 ? _args9[2] : undefined;
                funds = _args9.length > 3 ? _args9[3] : undefined;
                _context9.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  transfer: {
                    channel: channel,
                    remote_address: remoteAddress,
                    timeout: timeout
                  }
                }, fee, memo, funds);

              case 6:
                return _context9.abrupt("return", _context9.sent);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x5) {
        return _ref14.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "allow", /*#__PURE__*/function () {
      var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(_ref15) {
        var contract,
            gasLimit,
            fee,
            memo,
            funds,
            _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                contract = _ref15.contract, gasLimit = _ref15.gasLimit;
                fee = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : "auto";
                memo = _args10.length > 2 ? _args10[2] : undefined;
                funds = _args10.length > 3 ? _args10[3] : undefined;
                _context10.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  allow: {
                    contract: contract,
                    gas_limit: gasLimit
                  }
                }, fee, memo, funds);

              case 6:
                return _context10.abrupt("return", _context10.sent);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x6) {
        return _ref16.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "updateAdmin", /*#__PURE__*/function () {
      var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(_ref17) {
        var admin,
            fee,
            memo,
            funds,
            _args11 = arguments;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                admin = _ref17.admin;
                fee = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : "auto";
                memo = _args11.length > 2 ? _args11[2] : undefined;
                funds = _args11.length > 3 ? _args11[3] : undefined;
                _context11.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  update_admin: {
                    admin: admin
                  }
                }, fee, memo, funds);

              case 6:
                return _context11.abrupt("return", _context11.sent);

              case 7:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x7) {
        return _ref18.apply(this, arguments);
      };
    }());
    _this2.client = client;
    _this2.sender = _sender;
    _this2.contractAddress = contractAddress;
    _this2.receive = _this2.receive.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.transfer = _this2.transfer.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.allow = _this2.allow.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.updateAdmin = _this2.updateAdmin.bind((0, _assertThisInitialized2["default"])(_this2));
    return _this2;
  }

  return (0, _createClass2["default"])(Cw20Ics20Client);
}(Cw20Ics20QueryClient);

exports.Cw20Ics20Client = Cw20Ics20Client;