import React from "react";

import { CommandBar as FabricBar, ICommandBarItemProps } from "office-ui-fabric-react/lib/CommandBar";
import "./CommandBar.css";

interface IProps {
    items: ICommandBarItemProps[];
}

const CommandBar: React.FC<IProps> = ({ items }) => {
    const itemsWithClass = items.map(item => {
        return {
            ...item,
            className: "commandbar-button"
        };
    });

    return (
        <section id="commandbar-wrapper" className="commandbar-wrapper">
            <FabricBar className="commandbar-fabric" items={itemsWithClass}></FabricBar>
        </section>
    );
};

export default CommandBar;
