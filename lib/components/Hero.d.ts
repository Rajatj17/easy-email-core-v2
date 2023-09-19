import { RecursivePartial } from '@core/typings';
import { IHero } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type HeroProps = RecursivePartial<IHero['data']> & RecursivePartial<IHero['attributes']> & {
    children?: MjmlBlockProps<IHero>['children'];
};
export declare function Hero(props: HeroProps): JSX.Element;
