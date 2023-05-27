'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function (_a) {
  var text = _a.text,
    onClick = _a.onClick;
  return React__default["default"].createElement("button", {
    onClick: onClick
  }, text);
};

exports.Button = Button;
