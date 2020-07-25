/**
 * @author WMXPY
 * @namespace Webpack
 * @description Sass Loader Development
 */

import * as Webpack from "webpack";

export const createSassDevelopmentLoader = (commonSassPath: string): Webpack.RuleSetRule[] => [
    {
        test: /\.s(a|c)ss$/,
        exclude: commonSassPath,
        use: [{
            loader: 'style-loader',
        }, {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
                banner: '// auto-generated - @sudoo/webpack-react',
                disableLocalsExport: true,
                verifyOnly: false,
            },
        }, {
            loader: "css-loader",
            options: {
                modules: true,
            },
        }, {
            loader: 'sass-loader',
            options: {
                sassOptions: {
                    outputStyle: 'expanded',
                    sourceMap: true,
                },
            },
        }],
    }, {

        test: /\.s(a|c)ss$/,
        include: commonSassPath,
        use: [{
            loader: 'style-loader',
        }, {
            loader: 'css-loader',
        }, {
            loader: 'sass-loader',
            options: {
                sassOptions: {
                    outputStyle: 'expanded',
                    sourceMap: true,
                },
            },
        }],
    }, {
        test: /\.css$/,
        use: [{
            loader: 'style-loader',
        }, {
            loader: 'css-loader',
        }],
    },
];
