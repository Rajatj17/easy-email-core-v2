import { RecursivePartial } from '@core/typings';
import { ICarousel } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type CarouselProps = RecursivePartial<ICarousel['data']> & RecursivePartial<ICarousel['attributes']> & {
    children?: MjmlBlockProps<ICarousel>['children'];
};
export declare function Carousel(props: CarouselProps): JSX.Element;
