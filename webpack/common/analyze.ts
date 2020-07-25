/**
 * @author WMXPY
 * @namespace Webpack
 * @description Analyze
 */

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { SudooWebpackSetting } from "../declare";

export const createAnalyzers = (setting: SudooWebpackSetting): any => {

    if (setting.analyze) {
        return [
            new BundleAnalyzerPlugin(),
        ];
    }
    return [];
};
