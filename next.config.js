const withPWA = require("next-pwa");
const nextTranslate = require("next-translate");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  withImages,
  nextTranslate,
]);
