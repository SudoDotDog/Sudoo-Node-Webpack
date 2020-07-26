/**
 * @author WMXPY
 * @namespace Webpack
 * @description Production
 */

import { LicenseWebpackPlugin } from "license-webpack-plugin";
import * as Path from "path";
import * as Webpack from "webpack";
import { createAnalyzers } from "./common/analyze";
import { createCopyPlugins } from "./common/copy";
import { createDefinePlugin } from "./common/define";
import { getStatsSetting } from "./common/status";
import { createTypescriptLoader, getResolves } from "./common/ts";
import { getWebpackTarget, SudooWebpackPath, SudooWebpackSetting } from "./declare";

export const createBuildConfig = (
    paths: SudooWebpackPath,
    setting: SudooWebpackSetting,
): Webpack.Configuration => {

    const plugins: Webpack.Plugin[] = setting.plugins || [];
    const buildConfigPath: string = paths.tsconfigPath
        ? paths.tsconfigPath
        : Path.join(__dirname, 'config', 'tsconfig.build.json');

    return {

        target: getWebpackTarget(setting.target),
        mode: 'production',
        entry: {
            index: Path.join(paths.applicationPath, paths.applicationEntryFile),
        },
        output: {
            filename: setting.outputFileName ?? '[name].bundle.js',
            path: paths.buildPath,
        },
        node: {
            __dirname: false,
            __filename: false,
        },
        ...getStatsSetting(setting),
        ...getResolves(),
        module: {
            rules: [
                createTypescriptLoader(buildConfigPath),
            ],
        },
        plugins: [
            new LicenseWebpackPlugin({
                addBanner: true,
                renderBanner: (filename: string) => {
                    return `/*! SEE LICENSE AT ${filename} */`;
                },
                outputFilename: '[name].[id].LICENSE.txt',
            }),
            createDefinePlugin(setting.defines),
            ...createCopyPlugins(setting.copies),
            ...createAnalyzers(setting),
            ...plugins,
        ],
    };
};
