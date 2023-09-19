import { RecursivePartial } from '@core/typings';
import { IText } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type TextProps = RecursivePartial<IText['data']> & RecursivePartial<IText['attributes']> & {
    children?: MjmlBlockProps<IText>['children'];
};
export declare function Text(props: TextProps): JSX.Element;
