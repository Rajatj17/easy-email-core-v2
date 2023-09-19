import { IBlockData } from '@core/typings';
import { CSSProperties } from 'react';
export declare type IWrapper = IBlockData<{
    'background-color'?: string;
    border?: string;
    'border-radius'?: string;
    'full-width'?: string;
    direction?: 'ltr' | 'rtl';
    padding?: string;
    'text-align'?: CSSProperties['textAlign'];
}, {}>;
export declare const Wrapper: import("@core/typings").IBlock<IWrapper>;
