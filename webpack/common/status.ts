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
            stats: {
                all: false,
                errors: true,
                moduleTrace: true,
                warningsFilter: setting.warningsFilter,
            },
        };
    }

    if (setting.warningsFilter) {
        return {
            stats: {
                warningsFilter: setting.warningsFilter,
            },
        };
    }

    return {};
};
