/**
 * @author WMXPY
 * @namespace Webpack
 * @description Status
 */

import * as Webpack from "webpack";
import { SudooWebpackSetting } from "../declare";

export const getStatsSetting = (setting: SudooWebpackSetting): {
    readonly stats?: Webpack.Stats.ToStringOptions;
} => {

    if (setting.silent) {
        return {
            stats: 'errors-only',
        };
    }

    return {};
};
