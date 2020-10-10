/**
 * @author WMXPY
 * @namespace Webpack
 * @description Copy
 */

import * as CopyWebpackPlugin from "copy-webpack-plugin";
import { CopyPlugInElement } from "../declare";

export const createCopyPlugins = (copies?: CopyPlugInElement[]): any => {

    if (copies && Array.isArray(copies) && copies.length > 0) {
        return [
            new CopyWebpackPlugin({
                patterns: copies || [],
                options: {
                    concurrency: 100,
                },
            }),
        ];
    }

    return [];
};
