// vue.config.js
const path = require("path");
module.exports = {
  devServer: {
    host: 'localhost',
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        // pathRewrite: {
        //   '^/api': '/api', // rewrite path
        // },
      },
    },
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/style/common.less")]
    }
  }
};
