"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var index_1 = require("./components/index");
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
var App = function () {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(Icon_1.Icon, { iconName: "Cancel" }),
        react_1.default.createElement(index_1.Navbar, { idNumber: 1 })));
};
exports.default = App;
