import { RecursivePartial } from '@core/typings';
import { IAccordionTitle } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type AccordionTitleProps = RecursivePartial<IAccordionTitle['data']> & RecursivePartial<IAccordionTitle['attributes']> & {
    children?: MjmlBlockProps<IAccordionTitle>['children'];
};
export declare function AccordionTitle(props: AccordionTitleProps): JSX.Element;
