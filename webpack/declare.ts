/**
 * @author WMXPY
 * @namespace Webpack
 * @description Declare
 */

import * as Webpack from "webpack";

export type SudooWebpackPath = {

    readonly applicationPath: string;
    readonly applicationEntryFile: string;

    readonly buildPath: string;

    readonly tsconfigPath?: string;
};

export type SudooWebpackInternal = {
};

export type CopyPlugInElement = {

    readonly from: string;
    readonly to: string;
    readonly test?: RegExp;
    readonly cache?: boolean;
};

export type SudooWebpackSetting = {

    readonly outputFileName?: string;
    readonly electron?: boolean;

    readonly silent?: boolean;
    readonly analyze?: boolean;

    readonly defines?: Record<string, string>;
    readonly copies?: CopyPlugInElement[];
    readonly plugins?: Webpack.Plugin[],
};
