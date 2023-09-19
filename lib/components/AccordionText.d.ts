import { RecursivePartial } from '@core/typings';
import { IAccordionText } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type AccordionTextProps = RecursivePartial<IAccordionText['data']> & RecursivePartial<IAccordionText['attributes']> & {
    children?: MjmlBlockProps<IAccordionText>['children'];
};
export declare function AccordionText(props: AccordionTextProps): JSX.Element;
