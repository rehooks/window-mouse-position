"use strict";
let { useState, useEffect } = require("react");

function useWindowMousePosition() {
  let [WindowMousePosition, setWindowMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setWindowMousePosition({
      x: e.pageX,
      y: e.pageY
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return WindowMousePosition;
}

module.exports = useWindowMousePosition;
