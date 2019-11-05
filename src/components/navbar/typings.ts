import { INavbarWaffle } from "../navWaffle/NavWaffle";
import { INavbarTitle } from "../navTitle/typings";

export interface INavbarSectionItem {
    component: INavbarTitle | INavbarWaffle;
}
