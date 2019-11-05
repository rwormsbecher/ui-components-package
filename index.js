"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@uifabric/icons");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
icons_1.initializeIcons();
react_dom_1.default.render(react_1.default.createElement(App_1.default, null), document.getElementById("root"));
