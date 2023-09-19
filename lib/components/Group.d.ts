import { RecursivePartial } from '@core/typings';
import { IGroup } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type GroupProps = RecursivePartial<IGroup['data']> & RecursivePartial<IGroup['attributes']> & {
    children?: MjmlBlockProps<IGroup>['children'];
};
export declare function Group(props: GroupProps): JSX.Element;
