import { RecursivePartial } from '@core/typings';
import { ISection } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type SectionProps = RecursivePartial<ISection['data']> & RecursivePartial<ISection['attributes']> & {
    children?: MjmlBlockProps<ISection>['children'];
};
export declare function Section(props: SectionProps): JSX.Element;
