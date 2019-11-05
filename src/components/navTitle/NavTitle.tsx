import React from "react";

import { INavbarTitle } from "./typings";

import "./navTitle.css";

const NavTitle: React.FC<INavbarTitle> = ({ title }) => {
    return (
        <div id="navbar-title" className="navbar-title">
            {title}
        </div>
    );
};

export default NavTitle;
