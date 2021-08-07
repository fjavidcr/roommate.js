"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wol = require("./wol");

Object.keys(_wol).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _wol[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wol[key];
    }
  });
});