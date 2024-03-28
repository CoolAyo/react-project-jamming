import React from "react";
import { createRoot } from "react-dom/client";
//import App from "./components/App/App";
//import "./index.css";

import ReactDOM from "react-dom/client";
//import "./index.css";

function MyComponentTest() {
    return <h1>Testing root render</h1>;
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyComponentTest />
);