"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlMarketQueryClient = exports.BlMarketClient = void 0;

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
var BlMarketQueryClient = /*#__PURE__*/(0, _createClass2["default"])(function BlMarketQueryClient(client, contractAddress) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, BlMarketQueryClient);
  (0, _defineProperty2["default"])(this, "client", void 0);
  (0, _defineProperty2["default"])(this, "contractAddress", void 0);
  (0, _defineProperty2["default"])(this, "config", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
              config: {}
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  (0, _defineProperty2["default"])(this, "market", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
      var asset;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              asset = _ref2.asset;
              return _context2.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
                market: {
                  asset: asset
                }
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "marketsList", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
              markets_list: {}
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  (0, _defineProperty2["default"])(this, "userCollateral", /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref5) {
      var userAddress;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              userAddress = _ref5.userAddress;
              return _context4.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
                user_collateral: {
                  user_address: userAddress
                }
              }));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "userPosition", /*#__PURE__*/function () {
    var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref7) {
      var userAddress;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              userAddress = _ref7.userAddress;
              return _context5.abrupt("return", _this.client.queryContractSmart(_this.contractAddress, {
                user_position: {
                  user_address: userAddress
                }
              }));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x3) {
      return _ref8.apply(this, arguments);
    };
  }());
  this.client = client;
  this.contractAddress = contractAddress;
  this.config = this.config.bind(this);
  this.market = this.market.bind(this);
  this.marketsList = this.marketsList.bind(this);
  this.userCollateral = this.userCollateral.bind(this);
  this.userPosition = this.userPosition.bind(this);
});
exports.BlMarketQueryClient = BlMarketQueryClient;

var BlMarketClient = /*#__PURE__*/function (_BlMarketQueryClient) {
  (0, _inherits2["default"])(BlMarketClient, _BlMarketQueryClient);

  var _super = _createSuper(BlMarketClient);

  function BlMarketClient(client, _sender, contractAddress) {
    var _this2;

    (0, _classCallCheck2["default"])(this, BlMarketClient);
    _this2 = _super.call(this, client, contractAddress);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "client", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "sender", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "contractAddress", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "receive", /*#__PURE__*/function () {
      var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_ref9) {
        var amount,
            msg,
            sender,
            fee,
            memo,
            funds,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                amount = _ref9.amount, msg = _ref9.msg, sender = _ref9.sender;
                fee = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : "auto";
                memo = _args6.length > 2 ? _args6[2] : undefined;
                funds = _args6.length > 3 ? _args6[3] : undefined;
                _context6.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  receive: {
                    amount: amount,
                    msg: msg,
                    sender: sender
                  }
                }, fee, memo, funds);

              case 6:
                return _context6.abrupt("return", _context6.sent);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x4) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "updateConfig", /*#__PURE__*/function () {
      var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_ref11) {
        var config,
            fee,
            memo,
            funds,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                config = _ref11.config;
                fee = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : "auto";
                memo = _args7.length > 2 ? _args7[2] : undefined;
                funds = _args7.length > 3 ? _args7[3] : undefined;
                _context7.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  update_config: {
                    config: config
                  }
                }, fee, memo, funds);

              case 6:
                return _context7.abrupt("return", _context7.sent);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x5) {
        return _ref12.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "initAsset", /*#__PURE__*/function () {
      var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(_ref13) {
        var asset,
            assetParams,
            assetSymbol,
            fee,
            memo,
            funds,
            _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                asset = _ref13.asset, assetParams = _ref13.assetParams, assetSymbol = _ref13.assetSymbol;
                fee = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : "auto";
                memo = _args8.length > 2 ? _args8[2] : undefined;
                funds = _args8.length > 3 ? _args8[3] : undefined;
                _context8.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  init_asset: {
                    asset: asset,
                    asset_params: assetParams,
                    asset_symbol: assetSymbol
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

      return function (_x6) {
        return _ref14.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "initAssetTokenCallback", /*#__PURE__*/function () {
      var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(_ref15) {
        var reference,
            fee,
            memo,
            funds,
            _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                reference = _ref15.reference;
                fee = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : "auto";
                memo = _args9.length > 2 ? _args9[2] : undefined;
                funds = _args9.length > 3 ? _args9[3] : undefined;
                _context9.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  __init_asset_token_callback: {
                    reference: reference
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

      return function (_x7) {
        return _ref16.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "updateAsset", /*#__PURE__*/function () {
      var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(_ref17) {
        var asset,
            assetParams,
            fee,
            memo,
            funds,
            _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                asset = _ref17.asset, assetParams = _ref17.assetParams;
                fee = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : "auto";
                memo = _args10.length > 2 ? _args10[2] : undefined;
                funds = _args10.length > 3 ? _args10[3] : undefined;
                _context10.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  update_asset: {
                    asset: asset,
                    asset_params: assetParams
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

      return function (_x8) {
        return _ref18.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "depositNative", /*#__PURE__*/function () {
      var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(_ref19) {
        var denom,
            onBehalfOf,
            fee,
            memo,
            funds,
            _args11 = arguments;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                denom = _ref19.denom, onBehalfOf = _ref19.onBehalfOf;
                fee = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : "auto";
                memo = _args11.length > 2 ? _args11[2] : undefined;
                funds = _args11.length > 3 ? _args11[3] : undefined;
                _context11.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  deposit_native: {
                    denom: denom,
                    on_behalf_of: onBehalfOf
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

      return function (_x9) {
        return _ref20.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "withdraw", /*#__PURE__*/function () {
      var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(_ref21) {
        var amount,
            asset,
            fee,
            memo,
            funds,
            _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                amount = _ref21.amount, asset = _ref21.asset;
                fee = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : "auto";
                memo = _args12.length > 2 ? _args12[2] : undefined;
                funds = _args12.length > 3 ? _args12[3] : undefined;
                _context12.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  withdraw: {
                    amount: amount,
                    asset: asset
                  }
                }, fee, memo, funds);

              case 6:
                return _context12.abrupt("return", _context12.sent);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x10) {
        return _ref22.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "borrow", /*#__PURE__*/function () {
      var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(_ref23) {
        var amount,
            asset,
            recipient,
            fee,
            memo,
            funds,
            _args13 = arguments;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                amount = _ref23.amount, asset = _ref23.asset, recipient = _ref23.recipient;
                fee = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : "auto";
                memo = _args13.length > 2 ? _args13[2] : undefined;
                funds = _args13.length > 3 ? _args13[3] : undefined;
                _context13.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  borrow: {
                    amount: amount,
                    asset: asset,
                    recipient: recipient
                  }
                }, fee, memo, funds);

              case 6:
                return _context13.abrupt("return", _context13.sent);

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x11) {
        return _ref24.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "repayNative", /*#__PURE__*/function () {
      var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(_ref25) {
        var denom,
            onBehalfOf,
            fee,
            memo,
            funds,
            _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                denom = _ref25.denom, onBehalfOf = _ref25.onBehalfOf;
                fee = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : "auto";
                memo = _args14.length > 2 ? _args14[2] : undefined;
                funds = _args14.length > 3 ? _args14[3] : undefined;
                _context14.next = 6;
                return _this2.client.execute(_this2.sender, _this2.contractAddress, {
                  repay_native: {
                    denom: denom,
                    on_behalf_of: onBehalfOf
                  }
                }, fee, memo, funds);

              case 6:
                return _context14.abrupt("return", _context14.sent);

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x12) {
        return _ref26.apply(this, arguments);
      };
    }());
    _this2.client = client;
    _this2.sender = _sender;
    _this2.contractAddress = contractAddress;
    _this2.receive = _this2.receive.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.updateConfig = _this2.updateConfig.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.initAsset = _this2.initAsset.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.initAssetTokenCallback = _this2.initAssetTokenCallback.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.updateAsset = _this2.updateAsset.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.depositNative = _this2.depositNative.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.withdraw = _this2.withdraw.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.borrow = _this2.borrow.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.repayNative = _this2.repayNative.bind((0, _assertThisInitialized2["default"])(_this2));
    return _this2;
  }

  return (0, _createClass2["default"])(BlMarketClient);
}(BlMarketQueryClient);

exports.BlMarketClient = BlMarketClient;