"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var wolRouter = _express["default"].Router();

wolRouter.get('/wol', _controllers.wakeOnLan);
var _default = wolRouter;
exports["default"] = _default;