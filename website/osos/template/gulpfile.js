var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var devLocation = '';
var publishedLocation = '';
// var publishedLocation = '../src/assets/styles';

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
    .src(devLocation + 'css/scss/style.scss')
    .pipe(
      sass({
        // includePaths: [
        //   './node_modules/bootstrap/dist/**/*',
        //   '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
        //   '!./node_modules/bootstrap/dist/css/bootstrap-reboot*',
        // ],
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
    .pipe(gulp.dest(publishedLocation + 'css/'));
});

gulp.task('sass_dev', function() {
  gulp
    .src(devLocation + 'css/scss/style.scss')
    .pipe(
      sass({
        // includePaths: [
        //   '/node_modules/bootstrap/scss/bootstrap*',
        //   '/node_modules/bootstrap/scss/bootstrap-grid*',
        //   '/node_modules/bootstrap/scss/bootstrap-reboot*'
        //   '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
        //   '!./node_modules/bootstrap/dist/css/bootstrap-reboot*',
        // ],
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
    .pipe(gulp.dest(publishedLocation + 'css/'));
});

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch(devLocation + 'css/**/*.scss', ['sass_dev']);
});

// Dev task
gulp.task('dev', ['sass_dev', 'watch', 'browserSync']);

// Production task
gulp.task('default', ['sass']);
