import { Configuration } from "webpack";
import { Options } from "./types/buildTypes";
import path from "path";

export const buildDevServer = (options: Options): Configuration['devServer'] => {
  return {
    port: options.port ?? 3000,
    open: true,
    historyApiFallback: true,
    static: {
      directory: options.paths.dataPath,
    },
  }
}