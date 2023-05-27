import React from 'react';

var Button = function (_a) {
  var text = _a.text,
    onClick = _a.onClick;
  return React.createElement("button", {
    onClick: onClick
  }, text);
};

export { Button };
