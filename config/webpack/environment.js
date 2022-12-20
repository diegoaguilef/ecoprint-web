const { environment } = require('@rails/webpacker')
const webpack = require("webpack");

//environment.config.merge(customConfig);

environment.plugins.prepend(
    "Provide",
    new webpack.ProvidePlugin({
      moment: "moment",
      $: "jquery",
      jQuery: "jquery",
      Popper: ["popper.js", "default"],
    })
  );

module.exports = environment
