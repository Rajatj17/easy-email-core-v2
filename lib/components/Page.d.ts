import { RecursivePartial } from '@core/typings';
import { IPage } from '@core/blocks';
import { MjmlBlockProps } from '@core/components/MjmlBlock';
export declare type PageProps = RecursivePartial<IPage['data']> & RecursivePartial<IPage['attributes']> & {
    children?: MjmlBlockProps<IPage>['children'];
};
export declare function Page(props: PageProps): JSX.Element;
