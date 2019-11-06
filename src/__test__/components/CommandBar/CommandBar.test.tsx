import React from "react";
import { CommandBar } from "../../../components/CommandBar";
import { mount, ReactWrapper } from "enzyme";
import { ICommandBarItemProps } from "office-ui-fabric-react/lib/CommandBar";

let container: ReactWrapper;
beforeEach(() => {
    const items: ICommandBarItemProps[] = [
        {
            key: "filter",
            name: "filterText",
            cacheKey: "myCacheKey", // changing this key will invalidate this items cache
            // iconProps: {
            //     iconName: "Filter"
            // },
            ariaLabel: "Filter teams",
            onClick: () => console.log("clicked")
        }
    ];
    container = mount(<CommandBar items={items} />);
});

describe("Commandbar tests", () => {
    it("renders the commandbar", () => {
        expect(container.find("#commandbar-wrapper").length).toEqual(1);
    });

    it("has the 'items' prop", () => {
        expect(container.prop("items")).not.toBeUndefined();
        expect(container.prop("items")).not.toBeNull();
    });

    it("correctly renders the correct amount of buttons", () => {
        expect(container.find(".ms-OverflowSet").children).not.toBeUndefined();
        expect(container.find(".ms-OverflowSet").children).not.toBeNull();
        expect(container.find(".ms-OverflowSet").children.length).toEqual(1);
    });
});
