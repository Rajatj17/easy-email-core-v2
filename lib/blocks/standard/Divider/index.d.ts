import { IBlockData } from '@core/typings';
export declare type IDivider = IBlockData<{
    'border-color'?: string;
    'border-style'?: string;
    'border-width'?: string;
    'container-background-color'?: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
    padding?: string;
}, {}>;
export declare const Divider: import("@core/typings").IBlock<IDivider>;
