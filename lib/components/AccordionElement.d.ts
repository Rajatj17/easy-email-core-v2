import { RecursivePartial } from '@core/typings';
import { IAccordionElement } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type AccordionElementProps = RecursivePartial<IAccordionElement['data']> & RecursivePartial<IAccordionElement['attributes']> & {
    children?: MjmlBlockProps<IAccordionElement>['children'];
};
export declare function AccordionElement(props: AccordionElementProps): JSX.Element;
