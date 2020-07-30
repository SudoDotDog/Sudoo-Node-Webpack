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

export type WebpackTarget =
    | 'web'
    | 'webworker'
    | 'node'
    | 'async-node'
    | 'node-webkit'
    | 'atom'
    | 'electron'
    | 'electron-renderer'
    | 'electron-preload'
    | 'electron-main';

export type AvailableWebpackTarget =
    | 'node'
    | 'async-node'
    | 'node-webkit'
    | 'electron-preload'
    | 'electron-main';

export type SudooWebpackSetting = {

    readonly target?: AvailableWebpackTarget;

    readonly outputFileName?: string;

    readonly silent?: boolean;
    readonly warningsFilter?: string | RegExp | Array<string | RegExp> | ((warning: string) => boolean);
    readonly analyze?: boolean;

    readonly defines?: Record<string, string>;
    readonly copies?: CopyPlugInElement[];
    readonly plugins?: Webpack.Plugin[],
};

export const getWebpackTarget = (target?: AvailableWebpackTarget): WebpackTarget => {

    if (!target) {
        return 'node';
    }

    const available: AvailableWebpackTarget[] = [
        'async-node',
        'electron-main',
        'electron-preload',
        'node',
        'node-webkit',
    ];

    if (available.includes(target)) {
        return target;
    }

    return 'node';
};
