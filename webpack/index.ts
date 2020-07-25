/**
 * @author WMXPY
 * @namespace Webpack
 * @description Index
 */

import * as Webpack from "webpack";
import { SudooWebpackInternal, SudooWebpackPath, SudooWebpackSetting } from "./declare";
import { createBuildConfig } from "./webpack.config";
import { createDevConfig } from "./webpack.dev";

export class SudooWebpack {

    public static create(path: SudooWebpackPath, setting: SudooWebpackSetting): SudooWebpack {

        return new SudooWebpack(path, setting);
    }

    private readonly _path: SudooWebpackPath;
    private readonly _setting: SudooWebpackSetting;

    private readonly _internal: SudooWebpackInternal;

    private constructor(
        path: SudooWebpackPath,
        setting: SudooWebpackSetting,
    ) {

        this._path = path;
        this._setting = setting;

        this._internal = {
        };
    }

    public production(): Webpack.Configuration {

        return createBuildConfig(this._path, this._setting);
    }

    public development(): Webpack.Configuration {

        return createDevConfig(this._path, this._setting);
    }
}
