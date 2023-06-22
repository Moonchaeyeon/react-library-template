import React from 'react';

var Button = function (_a) {
  var text = _a.text,
    _b = _a.bgColor,
    bgColor = _b === void 0 ? "black" : _b,
    _c = _a.textColor,
    textColor = _c === void 0 ? "white" : _c,
    onClick = _a.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      backgroundColor: bgColor,
      color: textColor
    }
  }, text);
};

export { Button };
