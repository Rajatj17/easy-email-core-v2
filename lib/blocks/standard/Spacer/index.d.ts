import { IBlock, IBlockData } from '@core/typings';
export declare type ISpacer = IBlockData<{
    'container-background-color'?: string;
    height?: string;
    padding?: string;
}>;
export declare const Spacer: IBlock<ISpacer>;
