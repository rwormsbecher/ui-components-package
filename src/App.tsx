import React from "react";
import { Navbar } from "./components/index";
import { INavbarSectionItem } from "./components/navbar/typings";

import NavWaffle from "./components/navWaffle/NavWaffle";
import NavTitle from "./components/navTitle/NavTitle";

const App: React.FC = () => {
    return (
        <div>
            <Navbar leftSectionItems={leftSectionItems} rightSectionItems={[]} idNumber={1} />
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
