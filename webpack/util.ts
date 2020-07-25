/**
 * @author WMXPY
 * @namespace Webpack
 * @description Util
 */

import { SudooWebpackSetting } from "./declare";

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

export const getWebpackTarget = (setting: SudooWebpackSetting): WebpackTarget => {

    if (setting.electron) {

        return 'electron-renderer';
    }

    return 'web';
};
