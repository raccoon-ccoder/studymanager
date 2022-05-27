const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "@api": path.resolve(__dirname, "src/api"),
    "@components": path.resolve(__dirname, "src/components"),
    "@images": path.resolve(__dirname, "src/images"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@recoil": path.resolve(__dirname, "src/recoil"),
    "@styles": path.resolve(__dirname, "src/components"),
  })
);
