var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var devLocation = 'source/assets/';
var publishedLocation = 'public/assets/';

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {
  // Bootstrap
  gulp
    .src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*',
    ])
    .pipe(gulp.dest('./vendor/bootstrap'));
});

//  COMPILES SASS ---------

gulp.task('sass', function() {
  gulp
    .src(devLocation + '/css/core.scss')
    .pipe(sassGlob())
    .pipe(
      sass({
        includePaths: [
          './node_modules/bootstrap/dist/**/*',
          '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
          '!./node_modules/bootstrap/dist/css/bootstrap-reboot*',
        ],
        // errLogToConsole: false,
        // sourceMap: 'sass',
        // outputStyle: 'compressed'
        sourceComments: 'map',
        sourceMap: 'sass',
        outputStyle: 'nested',
      })
    )
    .pipe(
      autoprefixer({
        browsers: ['ie >= 9', 'last 2 versions'], // auto prefix for cross-browser support
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(publishedLocation + 'css/'))
    .pipe(notify('gulp complete'))
    .pipe(livereload());
});

gulp.task('sass_dev', function() {
  gulp
    .src(devLocation + '/css/core.scss')
    .pipe(sassGlob())
    .pipe(
      sass({
        includePaths: ['./node-modules/foundation-sites/scss'],
        // errLogToConsole: false,
        // sourceMap: 'sass',
        // outputStyle: 'compressed'
        sourceComments: 'map',
        sourceMap: 'sass',
        outputStyle: 'nested',
      })
    )
    .pipe(
      autoprefixer({
        browsers: ['ie >= 9', 'last 2 versions'], // auto prefix for cross-browser support
      })
    )
    .pipe(gulp.dest(publishedLocation + 'css/'))
    .pipe(notify('gulp complete'))
    .pipe(livereload());
});

// Default task
gulp.task('default', ['vendor']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
});

// Dev task
gulp.task('dev', ['browserSync'], function() {
  gulp.watch('./css/*.css', browserSync.reload);
  gulp.watch('./js/*.js', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
});
