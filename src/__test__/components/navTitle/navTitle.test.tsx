import React from "react";
import { NavTitle } from "../../../components";
import { mount, ReactWrapper } from "enzyme";

let container: ReactWrapper;

beforeEach(() => {
    const props = { title: "One News" };
    container = mount(<NavTitle {...props} />);
});

describe("NavTitle tests", () => {
    it("tests whether the navTitle gets rendered", () => {
        expect(container.find("#navbar-title").length).toEqual(1);
    });

    it("tests whether the title is passed from the props", () => {
        expect(container.prop("title")).not.toBeUndefined();
        expect(container.prop("title")).not.toBeNull();
    });
});
