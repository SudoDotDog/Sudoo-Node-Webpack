/**
 * @author WMXPY
 * @namespace Webpack
 * @description HTML
 */

import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as Webpack from "webpack";
import { SudooWebpackSetting } from "../declare";

const getFaviconType = (setting: SudooWebpackSetting): string => {

    if (setting.faviconType) {
        return setting.faviconType;
    }
    return 'image/png';
};

const buildFavicon = (setting: SudooWebpackSetting): string => {

    if (setting.favicon) {

        return `<link rel="shortcut icon" type="${getFaviconType(setting)}" href="${setting.favicon}"/>`;
    }
    return '<link rel="shortcut icon" href = "data:image/x-icon;," type = "image/x-icon"/>';
};

export const parseSettingForHtmlPlugin = (setting: SudooWebpackSetting): Record<string, string> => {

    return {
        title: setting.title,
        viewport: setting.mobile
            ? `width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0`
            : `width=device-width, initial-scale=1.0"`,
        insertion: setting.insertion || '',
        faviconLink: buildFavicon(setting),
    };
};

export const createDevlHtmlWebpackPlugin = (template: string, setting: SudooWebpackSetting): Webpack.Plugin => {

    const parsed: Record<string, string> = parseSettingForHtmlPlugin(setting);

    return new HtmlWebpackPlugin({
        chunks: ['index'],
        template,
        filename: 'index.html',
        minify: false,
        ...parsed,
    });
};
