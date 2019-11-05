declare module "one-suite-ui-components-factory" {
    export interface INavbarTitle {
        title: string;
    }

    export interface INavbarWaffle {}

    export interface INavbarSectionItem {
        component: INavbarTitle | INavbarWaffle;
    }

    interface INavbarProps {
        idNumber: number;
        leftSectionItems: Array<INavbarSectionItem>;
        rightSectionItems: Array<INavbarSectionItem>;
    }

    export type Navbar<INavbarProps> = (props: INavbarProps, context?: any) => JSX.Element | null;
}
