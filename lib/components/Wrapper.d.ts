import { RecursivePartial } from '@core/typings';
import { IWrapper } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type WrapperProps = RecursivePartial<IWrapper['data']> & RecursivePartial<IWrapper['attributes']> & {
    children?: MjmlBlockProps<IWrapper>['children'];
};
export declare function Wrapper(props: WrapperProps): JSX.Element;
