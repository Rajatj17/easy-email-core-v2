import { RecursivePartial } from '@core/typings';
import { IButton } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type ButtonProps = RecursivePartial<IButton['data']> & RecursivePartial<IButton['attributes']> & {
    children?: MjmlBlockProps<IButton>['children'];
};
export declare function Button(props: ButtonProps): JSX.Element;
