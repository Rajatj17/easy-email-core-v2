import { RecursivePartial } from '@core/typings';
import { ISocial } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type SocialProps = RecursivePartial<ISocial['data']> & RecursivePartial<ISocial['attributes']> & {
    children?: MjmlBlockProps<ISocial>['children'];
};
export declare function Social(props: SocialProps): JSX.Element;
