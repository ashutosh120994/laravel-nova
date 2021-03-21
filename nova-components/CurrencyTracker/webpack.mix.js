let mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .js('resources/js/tool.js', 'js')
  .sass('resources/sass/tool.scss', 'css')

module.exports = {
  dev: {
    proxyTable: {
      "/gists": {
        target: "https://api.github.com",
        changeOrigin: true,
      }
    }
  }
};