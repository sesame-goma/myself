// TODO: 現状、２行目と３行目のコメントインでビルド、コメントアウトでエクスポートなのでなんとかしたい。
const withImages = require('next-images');
module.exports = withImages();
module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
};