/**
 * @author WMXPY
 * @namespace Webpack
 * @description Define
 */

import { DefinePlugin } from "webpack";

export const createDefinePlugin = (defines: Record<string, string> = {}): DefinePlugin => {

    return new DefinePlugin({
        ...defines,
    });
};
