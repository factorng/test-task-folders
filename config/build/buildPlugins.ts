import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Options } from "./types/buildTypes";

export const buildPlugins = (options: Options): Configuration['plugins'] => {
  return  [
    //Template
    new HtmlWebpackPlugin({
      template: options.paths.htmlTemplatePath,
    }),
  ]
}