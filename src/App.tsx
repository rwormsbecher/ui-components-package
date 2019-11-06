import React, { useState } from "react";
import { Navbar } from "./components/index";
import { INavbarSectionItem } from "./components/navbar/typings";
import { ICommandBarItemProps } from "office-ui-fabric-react/lib/CommandBar";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";

import NavWaffle from "./components/navWaffle/NavWaffle";
import NavTitle from "./components/navTitle/NavTitle";

import { CommandBar } from "./components/CommandBar";

const App: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const commandBarList: ICommandBarItemProps[] = [
        {
            key: "openPanel",
            name: "Open panel",
            cacheKey: "myCacheKey", // changing this key will invalidate this items cache
            iconProps: {
                iconName: "SidePanelMirrored"
            },
            ariaLabel: "Open panel",
            onClick: () => setIsOpen(true)
        }
    ];

    return (
        <div>
            <Navbar leftSectionItems={leftSectionItems} rightSectionItems={[]} idNumber={1}>
                <div></div>
            </Navbar>
            <CommandBar items={commandBarList} />

            <Panel
                className="account-panel"
                isOpen={isOpen}
                type={PanelType.smallFixedFar}
                onDismiss={() => setIsOpen(false)}
                isLightDismiss
                onLightDismissClick={() => setIsOpen(false)}
                closeButtonAriaLabel="Close"
            >
                <div>Panel</div>
            </Panel>
        </div>
    );
};

export const leftSectionItems: Array<INavbarSectionItem> = [
    {
        component: <NavWaffle />
    },
    {
        component: <NavTitle title="One News" />
    }
];
export default App;
