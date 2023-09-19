import { RecursivePartial } from '@core/typings';
import { IImage } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type ImageProps = RecursivePartial<IImage['data']> & RecursivePartial<IImage['attributes']> & {
    children?: MjmlBlockProps<IImage>['children'];
};
export declare function Image(props: ImageProps): JSX.Element;
