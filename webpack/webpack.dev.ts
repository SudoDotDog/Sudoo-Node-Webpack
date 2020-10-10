/**
 * @author WMXPY
 * @namespace Webpack
 * @description Development
 */

import * as Path from "path";
import * as Webpack from "webpack";
import { createCopyPlugins } from "./common/copy";
import { getStatsSetting } from "./common/status";
import { createTypescriptLoader, getResolves } from "./common/ts";
import { getWebpackTarget, SudooWebpackPath, SudooWebpackSetting } from "./declare";

export const createDevConfig = (
    paths: SudooWebpackPath,
    setting: SudooWebpackSetting,
): Webpack.Configuration => {

    const plugins: Webpack.Plugin[] = setting.plugins || [];
    const devConfigPath: string = paths.tsconfigPath
        ? paths.tsconfigPath
        : Path.join(__dirname, 'config', 'tsconfig.dev.json');

    return {

        target: getWebpackTarget(setting.target),
        devtool: 'cheap-module-eval-source-map',
        mode: "development",
        optimization: {
            moduleIds: 'named',
        },
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
                createTypescriptLoader(devConfigPath),
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader",
                },
            ],
        },
        plugins: [
            new Webpack.LoaderOptionsPlugin({
                debug: true,
            }),
            ...createCopyPlugins(setting.copies),
            ...plugins,
        ],
    };
};
