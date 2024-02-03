const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
module.exports = {
  syntax: "postcss-scss",
  plugins: [autoprefixer(), postcssPresetEnv()],
};
