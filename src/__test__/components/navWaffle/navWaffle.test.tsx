import React from "react";
import { NavWaffle } from "../../../components";
import { mount, ReactWrapper } from "enzyme";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

initializeIcons();

let container: ReactWrapper;

beforeEach(() => {
    container = mount(<NavWaffle />);
});

describe("NavWaffle tests", () => {
    it("tests whether the navWaffle icon gets rendered ", () => {
        expect(container.find("#nav-waffle").length).toEqual(1);
    });

    it("tests whether the link to the office portal is present", () => {
        const waffleLink = container.find("#nav-waffle-link");
        expect(waffleLink.find({ href: "https://portal.office.com" }).length).toEqual(1);
    });
});
