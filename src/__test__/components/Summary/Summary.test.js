import React from "react";
import { mount } from "enzyme";

import { Summary } from "../../../components/Summary";

let container;
beforeEach(() => {
    container = mount(<Summary image="" header="header" subtext="subtext" />);
});

describe("Summary tests", () => {
    it("renders the Summary component", () => {
        expect(container.find("#summary").length).toEqual(1);
    });
});
