'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function (_a) {
  var text = _a.text,
    _b = _a.bgColor,
    bgColor = _b === void 0 ? "black" : _b,
    _c = _a.textColor,
    textColor = _c === void 0 ? "white" : _c,
    onClick = _a.onClick;
  return /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: onClick,
    style: {
      backgroundColor: bgColor,
      color: textColor
    }
  }, text);
};

exports.Button = Button;
