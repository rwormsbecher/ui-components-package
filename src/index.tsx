import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import { initializeIcons } from "@uifabric/icons";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

initializeIcons();

ReactDOM.render(<App />, document.getElementById("root"));
