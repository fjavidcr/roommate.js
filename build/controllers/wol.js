"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wakeOnLan = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _settings = require("../settings");

var _middleware = require("../middleware");

var wakeOnLan = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _middleware.wakeOnLanWithMAC)(_settings.NAS_MAC);

          case 2:
            response = _context.sent;
            console.log(response);
            return _context.abrupt("return", res.status(200).json(response));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function wakeOnLan(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.wakeOnLan = wakeOnLan;