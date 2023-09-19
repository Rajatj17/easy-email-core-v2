import { RecursivePartial } from '@core/typings';
import { IRaw } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type RawProps = RecursivePartial<IRaw['data']> & RecursivePartial<IRaw['attributes']> & {
    children?: MjmlBlockProps<IRaw>['children'];
};
export declare function Raw(props: RawProps): JSX.Element;
