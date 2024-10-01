const path = require("path");

module.exports = {
  target: "node",
  mode: "none",
  entry: {
    extension: "./src/extension.js",
    "test/runTest": "./src/test/runTest.js",
  },
  output: {
    path: path.resolve(__dirname, "out"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
    devtoolModuleFilenameTemplate: "../[resource-path]",
  },
  externals: {
    vscode: "commonjs vscode",
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  devtool: "source-map",
};
