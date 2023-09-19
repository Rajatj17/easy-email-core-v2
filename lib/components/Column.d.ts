import { RecursivePartial } from '@core/typings';
import { IColumn } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type ColumnProps = RecursivePartial<IColumn['data']> & RecursivePartial<IColumn['attributes']> & {
    children?: MjmlBlockProps<IColumn>['children'];
};
export declare function Column(props: ColumnProps): JSX.Element;
