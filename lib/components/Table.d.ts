import { RecursivePartial } from '@core/typings';
import { ITable } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type TableProps = RecursivePartial<ITable['data']> & RecursivePartial<ITable['attributes']> & {
    children?: MjmlBlockProps<ITable>['children'];
};
export declare function Table(props: TableProps): JSX.Element;
