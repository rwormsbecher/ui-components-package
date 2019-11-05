import React from "react";
import { Navbar } from "../../../components";
import { mount, ReactWrapper } from "enzyme";

let container: ReactWrapper;
beforeEach(() => {
    const props = { idNumber: 1, leftSectionItems: [], rightSectionItems: [] };
    container = mount(<Navbar {...props} />);
});

describe("Navbar tests", () => {
    it("tests whether the navbar gets rendered", () => {
        expect(container.find("#navbar").length).toEqual(1);
    });

    it("tests whether there is a left section to fit other components", () => {
        expect(container.find("#navbar-left-section").length).toEqual(1);
    });

    it("tests whether the navbar includes the following props ( leftSection: [] , rightSetion: [] )", () => {
        console.log("rightSectionItems", container.prop("rightSectionItems"));
        expect(container.prop("leftSectionItems")).not.toBeUndefined();
        expect(container.prop("leftSectionItems")).not.toBeNull();
        expect(container.prop("rightSectionItems")).not.toBeUndefined();
        expect(container.prop("rightSectionItems")).not.toBeNull();
    });
});
