import React, { useState } from "react";
import { Navbar } from "./components/index";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";

import { CommandBar } from "./components/CommandBar/index";
import { Summary, SummaryItem } from "./components/Summary/index";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const commandBarList = [
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
            <Navbar leftSectionItems={[]} rightSectionItems={[]} idNumber={1}>
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

            <Summary
                image={
                    "https://st2.depositphotos.com/4111759/12123/v/450/depositphotos_121233262-stock-illustration-male-default-placeholder-avatar-profile.jpg"
                }
                header="Rick Hellenthal"
                subtext="Young Professional"
            >
                <SummaryItem header="Lid van:" subtext="2 teams" />
                <SummaryItem header="Andere header:" subtext="Een subtext" />
            </Summary>
        </div>
    );
};

export default App;
