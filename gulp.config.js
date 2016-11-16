module.exports = function() {
  var config = {
    // SASS and CSS paths
    styles: 'src/styles/',
    sassSrc: 'src/styles/app.scss',
    sassAll: 'src/styles/**/*.scss',
    cssDest: 'dist/styles/',

    // Images
    imageSrc: 'src/images/',
    imageDist: 'dist/images/',

    // JS paths
    jsAll: 'src/scripts/**.js',
    jsFiles: 'src/scripts/',
    jsDest: 'dist/scripts/'
  };
  return config;
};
