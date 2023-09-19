import { RecursivePartial } from '@core/typings';
import { IDivider } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type DividerProps = RecursivePartial<IDivider['data']> & RecursivePartial<IDivider['attributes']> & {
    children?: MjmlBlockProps<IDivider>['children'];
};
export declare function Divider(props: DividerProps): JSX.Element;
