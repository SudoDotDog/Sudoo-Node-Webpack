/**
 * @author WMXPY
 * @namespace Webpack
 * @description Typescript Loader
 */

import * as Webpack from "webpack";

export const createTypescriptLoader = (TSCONFIG_DIR: string): Webpack.RuleSetRule => ({

    test: /\.tsx?$/,
    use: [{
        loader: 'ts-loader',
        options: {
            configFile: TSCONFIG_DIR,
            transpileOnly: false,
        },
    }],
});


export const getResolves = (): {
    readonly resolve: Webpack.Resolve;
} => ({
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".sass"],
    },
});
