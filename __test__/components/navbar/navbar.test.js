"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var components_1 = require("../../../components");
var enzyme_1 = require("enzyme");
beforeEach(function () { });
describe("Navbar tests", function () {
    it("tests whether the navbar gets rendered", function () {
        var container = enzyme_1.shallow(react_1.default.createElement(components_1.Navbar, { idNumber: 0 }));
        expect(container.find("#navbar").length).toEqual(1);
    });
});
