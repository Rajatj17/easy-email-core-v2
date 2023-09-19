import { RecursivePartial } from '@core/typings';
import { ISpacer } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type SpacerProps = RecursivePartial<ISpacer['data']> & RecursivePartial<ISpacer['attributes']> & {
    children?: MjmlBlockProps<ISpacer>['children'];
};
export declare function Spacer(props: SpacerProps): JSX.Element;
