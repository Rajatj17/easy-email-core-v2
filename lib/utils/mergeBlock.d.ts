import { IBlockData, RecursivePartial } from '@core/typings';
export declare function mergeBlock<T extends IBlockData>(a: T, b?: RecursivePartial<T>): T;
