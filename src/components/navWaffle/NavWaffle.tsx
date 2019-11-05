import React from "react";
import { Icon } from "office-ui-fabric-react/lib/Icon";

import "./NavWaffle.css";

export interface INavbarWaffle {}

const NavWaffle: React.FC<INavbarWaffle> = () => {
    return (
        <a href="https://portal.office.com" target="_blank" rel="noopener noreferrer" id="nav-waffle-link">
            <div id="nav-waffle" className="navbar-waffle" role="presentation">
                <Icon iconName="Waffle" />
            </div>
        </a>
    );
};

export default NavWaffle;
