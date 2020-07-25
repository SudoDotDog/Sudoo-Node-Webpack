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
import { SudooWebpackPath, SudooWebpackSetting } from "./declare";
import { getWebpackTarget } from "./util";

export const createDevConfig = (
    paths: SudooWebpackPath,
    setting: SudooWebpackSetting,
): Webpack.Configuration => {

    const plugins: Webpack.Plugin[] = setting.plugins || [];
    const devConfigPath: string = paths.tsconfigPath
        ? paths.tsconfigPath
        : Path.join(__dirname, 'config', 'tsconfig.dev.json');

    return {

        target: getWebpackTarget(setting),
        devtool: 'cheap-module-eval-source-map',
        mode: "development",
        entry: {
            index: [
                'react-hot-loader/patch',
                'webpack-dev-server/client',
                'webpack/hot/only-dev-server',
                Path.join(paths.applicationPath, paths.applicationEntryFile),
            ],
        },
        output: {
            filename: "[name].bundle.js",
            path: paths.buildPath,
            publicPath: '/',
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
            new Webpack.NamedModulesPlugin(),
            ...createCopyPlugins(setting.copies),
            ...plugins,
        ],
    };
};
