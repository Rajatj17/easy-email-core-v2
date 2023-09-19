import { BasicType } from '@core/constants';
import { IBlockData } from '@core';
export declare function generateAdvancedContentBlock<T extends IBlockData>(option: {
    type: string;
    baseType: BasicType;
}): import("@core").IBlock<T>;
