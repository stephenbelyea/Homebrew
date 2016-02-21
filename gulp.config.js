module.exports = function() {
  var config = {
    // SASS and CSS paths
    sassSrc: 'scss/app.scss',
    sassAll: 'scss/**/*.scss',
    cssDest: 'css/dist/',

    // TS paths
    tsAll: 'ts/**.ts',
    tsFiles: 'ts/',
    jsDest: 'js/dist/'
  };
  return config;
};
