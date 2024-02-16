import {ModuleOptions} from "webpack";
import { Options } from "./types/buildTypes";

export const buildLoaders = (options: Options): ModuleOptions['rules'] => {

  const isDev = options.mode === 'development';

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName:  isDev ? "[path][name]__[local]" : "[hash:base64:8]"
      }
    },
  };
  
  return [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        cssLoaderWithModules,
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
  ];
}