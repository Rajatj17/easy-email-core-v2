import { RecursivePartial } from '@core/typings';
import React from 'react';
import { ITemplate } from '@core/blocks';
export declare type TemplateProps = RecursivePartial<ITemplate['data']> & RecursivePartial<ITemplate['attributes']> & {
    children: string | React.ReactNode;
    idx?: string | null;
};
export declare function Template(props: TemplateProps): React.ReactNode;
