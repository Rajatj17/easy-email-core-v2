import { RecursivePartial } from '@core/typings';
import { INavbar } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type NavbarProps = RecursivePartial<INavbar['data']> & RecursivePartial<INavbar['attributes']> & {
    children?: MjmlBlockProps<INavbar>['children'];
};
export declare function Navbar(props: NavbarProps): JSX.Element;
