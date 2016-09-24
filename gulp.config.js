module.exports = function() {
  var config = {
    // SASS and CSS paths
    sassSrc: 'src/styles/global.scss',
    sassAll: 'src/styles/**/*.scss',
    cssDest: 'dist/styles/',

    // TS paths
    tsAll: 'src/scripts/**.ts',
    tsFiles: 'src/scripts/',
    jsDest: 'dist/scripts/'
  };
  return config;
};
