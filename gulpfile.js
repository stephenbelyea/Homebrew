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
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe($.rename('main.css'))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.cssDest));
});

// Clone image files for dist - no min or optim yet.
gulp.task('images', function() {
  return gulp
    .src(config.imageSrc + "*")
    .pipe($.imagemin())
    .pipe(gulp.dest(config.imageDist))
});

// Collect and concat vendor CSS.
gulp.task('css:vendor', function() {
  return gulp
    .src([
      // Nothing yet...
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat("vendor.css"))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.cssDest));
});

// Collect and concat vendor JS.
gulp.task('js:vendor', function() {
  return gulp
    .src([
      "node_modules/jquery/dist/jquery.min.js"
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat("vendor.js"))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.jsDest));
});

// Transpile ES2015 via Babel.
gulp.task('js:dev', function() {
  return gulp
    .src(config.jsAll)
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe($.concat('main.js'))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.jsDest));
});

gulp.task('prep', ['images', 'css:vendor', 'js:vendor']);
gulp.task('build', ['sass:dev', 'js:dev']);
gulp.task('default', ['prep', 'build']);

gulp.task('watch', ['build'], function() {
  gulp.watch([config.sassAll], ['sass:dev']);
  gulp.watch([config.jsAll], ['js:dev']);
});
