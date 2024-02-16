import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from "webpack";
import { Options } from "./types/buildTypes";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpack = (options: Options): webpack.Configuration => {
  return {
    mode: options.mode ?? "development",
    //Entry point
    entry: options.paths.entryPath,
    output: {
      filename: "[name].[contenthash].js",
      //Output directory
      path: options.paths.outputPath,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devServer: buildDevServer(options),
    devtool: 'inline-source-map',
  };
}