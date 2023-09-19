import { IBlockData, RecursivePartial } from '@core/typings';
export declare function createBlockDataByType<T extends IBlockData>(type: string, payload?: RecursivePartial<T>, json?: any): IBlockData;
