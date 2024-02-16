import { Options } from "./types";
import { Configuration } from "webpack";

export const buildResolvers = (options: Options): Configuration['resolve'] => {
  return  {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@': options.paths.srcPath
    }
  }
}