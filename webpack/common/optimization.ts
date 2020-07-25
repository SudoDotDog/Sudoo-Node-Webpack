/**
 * @author WMXPY
 * @namespace Webpack
 * @description Optimization
 */

import * as OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import * as TerserPlugin from "terser-webpack-plugin";
import * as Webpack from "webpack";

export const createOptimization = (): Webpack.Options.Optimization => ({

    runtimeChunk: 'single',
    minimizer: [
        new TerserPlugin({
            cache: true,
            parallel: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
        chunks: 'all',
        cacheGroups: {
            core: {
                test: /[\\/]src[\\/]/,
                maxInitialRequests: 2,
                priority: 10,
                name: 'core',
                enforce: true,
                reuseExistingChunk: true,
            },
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                maxInitialRequests: 9,
                name: (module) => {
                    const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                    return `vendor.${packageName.replace('@', '')}`;
                },
                reuseExistingChunk: true,
            },
            style: {
                test: /\.css$/,
                priority: 10,
                maxInitialRequests: 2,
                name: 'style',
                enforce: true,
            },
        },
    },
});
