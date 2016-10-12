var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({
  lazy: true
});
var ts = $.typescript;

// Compile SASS for dev. No min or concat.
gulp.task('sass:dev', function() {
  return gulp
    .src(config.sassSrc)
    .pipe(
      $.sass()
      .on('error', $.sass.logError))
    .pipe(
      $.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9']
      })
    )
    .pipe(gulp.dest(config.cssDest));
});

// Collect and concat vendor JS.
gulp.task('js:vendor', function() {
  return gulp
    .src([
      "node_modules/jquery/dist/jquery.min.js"
    ])
    .pipe($.concat("vendor.js"))
    .pipe(gulp.dest(config.jsDest + "vendor/"));
});

// Compile TS for dev. No min or concat.
gulp.task('ts:dev', function() {
  var tsProject = ts.createProject(config.tsFiles + 'tsconfig.json');
  var tsResult =
    gulp.src(config.tsAll)
    .pipe($.sourcemaps.init())
    .pipe(tsProject());
  return tsResult.js
    .pipe($.concat('main.js'))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.jsDest));
});

gulp.task('build', ['sass:dev', 'js:vendor', 'ts:dev']);

gulp.task('default', ['build'], function() {
  gulp.watch([config.sassAll], ['sass:dev']);
  gulp.watch([config.tsAll], ['ts:dev']);
});
