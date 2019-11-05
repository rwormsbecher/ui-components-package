"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./navbar.css");
var Navbar = function (_a) {
    var idNumber = _a.idNumber;
    return (react_1.default.createElement("div", { id: "navbar", className: "navbar" },
        react_1.default.createElement("div", { className: "navbar__test" }, "test")));
};
exports.default = Navbar;
