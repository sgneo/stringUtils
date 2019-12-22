"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.trimEnd = exports.trimStart = exports.startsWith = exports.isBlank = exports.isEmpty = exports.handleParams = void 0;

var handleParams = function handleParams() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  params.forEach(function (param) {
    if (typeof param !== "string") {
      throw new Error("Required: string, received: something else");
    }
  });
};

exports.handleParams = handleParams;

var isEmpty = function isEmpty(str) {
  handleParams(str);
  return str.length === 0;
};

exports.isEmpty = isEmpty;

var isBlank = function isBlank(str) {
  handleParams(str);
  return str.trim().length === 0;
};

exports.isBlank = isBlank;

var startsWith = function startsWith(str1, str2) {
  handleParams(str1, str2);
  return str1.indexOf(str2) === 0;
};

exports.startsWith = startsWith;

var trimStart = function trimStart(str) {
  handleParams(str);
  return str.replace(/^\s+/, '');
};

exports.trimStart = trimStart;

var trimEnd = function trimEnd(str) {
  handleParams(str);
  return str.replace(/\s+$/, '');
};

exports.trimEnd = trimEnd;
var _default = {
  isEmpty: isEmpty,
  isBlank: isBlank,
  startsWith: startsWith,
  trimStart: trimStart,
  trimEnd: trimEnd
};
exports["default"] = _default;