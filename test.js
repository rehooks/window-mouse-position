"use strict";
let test = require("ava");
let { createElement: h } = require("react");
let ReactTestRenderer = require("react-test-renderer");
let useWindowMousePosition = require("./");

function render(val) {
  return ReactTestRenderer.create(val);
}

test(t => {
  function Component() {
    let { x, y } = useWindowMousePosition();
    return h("div", {
      "data-x": x,
      "data-y": y
    });
  }

  let div = render(h(Component));

  t.is(div.toJSON().props["data-x"], null);
  t.is(div.toJSON().props["data-x"], null);
});
