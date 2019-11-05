import React from "react";
import "./navbar.css";
import { INavbarSectionItem } from "./typings";

interface IProps {
    idNumber: number;
    leftSectionItems: Array<INavbarSectionItem>;
    rightSectionItems: Array<INavbarSectionItem>;
}

const Navbar: React.FC<IProps> = ({ idNumber, leftSectionItems, rightSectionItems }) => {
    return (
        <section id="navbar" className="navbar">
            <div className="navbar-area-wrapper">
                <div style={{ width: "4.8rem", height: "4.8rem", background: "red" }}></div>
                <div style={{ width: "4.8rem", height: "4.8rem", background: "green" }}></div>
            </div>

            {/* <div id="navbar-left-section" className="navbar-left-section">
                {leftSectionItems.map(item => {
                    return item.component;
                })}
            </div> */}
        </section>
    );
};

export default Navbar;
