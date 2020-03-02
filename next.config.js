const withImages = require('next-images');
module.exports = withImages();
module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};