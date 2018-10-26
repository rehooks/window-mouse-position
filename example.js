import React from "react";
import { render } from "react-dom";
import useWindowMousePosition from "./";

function App() {
  let { x, y } = useWindowMousePosition();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <pre>{JSON.stringify({ x, y })}</pre>
    </div>
  );
}

render(<App />, window.root);
