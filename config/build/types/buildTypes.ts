export type Mode = "development" | "production";

export type Env = {
  mode: Mode;
  port: number;
};

export type Paths = {
  entryPath: string,
  outputPath: string,
  buildPath: string,
  htmlTemplatePath: string,
  srcPath: string,
  dataPath: string,
}

export type Options = {
  port: number,
  mode: Mode,
  paths: Paths,
};