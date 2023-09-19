import { RecursivePartial } from '@core/typings';
import { IAccordion } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type AccordionProps = RecursivePartial<IAccordion['data']> & RecursivePartial<IAccordion['attributes']> & {
    children?: MjmlBlockProps<IAccordion>['children'];
};
export declare function Accordion(props: AccordionProps): JSX.Element;
