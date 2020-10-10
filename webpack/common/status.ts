/**
 * @author WMXPY
 * @namespace Webpack
 * @description Status
 */

import { SudooWebpackSetting } from "../declare";

export const getStatsSetting = (setting: SudooWebpackSetting): {
    readonly stats?: any;
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
