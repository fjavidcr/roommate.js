"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wakeOnLanWithMAC = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var wol = require('../lib/wake-on-lan');

var wakeOnLanWithMAC = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(mac) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = {};
            _context.next = 3;
            return wol.wake(mac, function (err) {
              if (err) throw err;
              response.message = "send magic packet to ".concat(mac, " success .");
            }).then(function (result) {
              response.result = result;
            });

          case 3:
            return _context.abrupt("return", response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function wakeOnLanWithMAC(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.wakeOnLanWithMAC = wakeOnLanWithMAC;