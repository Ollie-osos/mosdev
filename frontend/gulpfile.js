var gulp            = require('gulp'),
    jshint          = require('gulp-jshint'),
    changed 		    = require('gulp-changed'),
    imagemin 		    = require('gulp-imagemin'),
    concat          = require('gulp-concat'),
    stripDebug      = require('gulp-strip-debug'),
    uglify          = require('gulp-uglify'),
    minifyCSS   = require('gulp-clean-css'),
    sass            = require('gulp-sass'),
    sassGlob        = require('gulp-sass-glob'),
    autoprefixer    = require('gulp-autoprefixer'),
    cssMin          = require('gulp-minify-css'),
    livereload      = require('gulp-livereload'),
    runSequence     = require('run-sequence');
    notify          = require('gulp-notify');
    devLocation     = "source/assets/";
    publishedLocation = "public/assets/";
    foundationlocation = "node_modules/foundation-sites/";

//  LOOKS FOR ERRORS IN JS ---------

gulp.task('jshint', function(){
  gulp.src(devLocation+'js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// minify new images

gulp.task('imagemin', function(){
	var imgSrc = devLocation+'img/**/*',
	imgDst = publishedLocation+'img';

	gulp.src(imgSrc)
		.pipe(changed(imgDst))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDst));
})

//  COMPILES SASS ---------

gulp.task('sass', function () {

  gulp.src(devLocation+'/css/core.scss')
  .pipe(sassGlob())
  .pipe(sass({
      includePaths: ['./node-modules/foundation-sites/scss'],
      // errLogToConsole: false,
      // sourceMap: 'sass',
      // outputStyle: 'compressed'
      sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'
  }))
  .pipe(autoprefixer({
    browsers: ['ie >= 9', 'last 2 versions'] // auto prefix for cross-browser support
  }))
  .pipe(minifyCSS())
  .pipe(gulp.dest(publishedLocation+'css/'))
  .pipe(notify('gulp complete'))
  .pipe(livereload());
});

gulp.task('sass_dev', function () {

  gulp.src(devLocation+'/css/core.scss')
  .pipe(sassGlob())
  .pipe(sass({
      includePaths: ['./node-modules/foundation-sites/scss'],
      // errLogToConsole: false,
      // sourceMap: 'sass',
      // outputStyle: 'compressed'
      sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'
  }))
  .pipe(autoprefixer({
    browsers: ['ie >= 9', 'last 2 versions'] // auto prefix for cross-browser support
  }))
  .pipe(gulp.dest(publishedLocation+'css/'))
  .pipe(notify('gulp complete'))
  .pipe(livereload());

});

// vendor bundle

gulp.task('vendorcss', function(){
  gulp.src([devLocation+'/css/vendor/*.css'])
    .pipe(concat('vendorcss.css'))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(publishedLocation+'css/'))
});


//  COMPILES JS ---------

gulp.task('scripts', function(){
  gulp.src(devLocation+'js/*.js')
    //.pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(publishedLocation+'js/'));
});

gulp.task('vendorjs', function(){
  gulp.src([devLocation+'/js/vendor/*.js'])
    .pipe(concat('vendor.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(publishedLocation+'js/'))
});

gulp.task('foundationjs', function(){
  gulp.src([foundationlocation+'dist/js/foundation.min.js'])
    .pipe(concat('foundation.js'))
    // .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(publishedLocation+'js/'))
});

//  COMPILES FONTS ---------

gulp.task('fonts', function(){
  return gulp.src([devLocation+'fonts/**/**.*'])
    .pipe(gulp.dest(publishedLocation+'fonts/'));
})



gulp.task('publish', ['imagemin','scripts', 'vendorjs', 'foundationjs', 'vendorcss','sass', 'fonts']);

gulp.task('dev', ['imagemin','scripts', 'vendorjs', 'foundationjs', 'vendorcss','sass_dev', 'fonts']);

gulp.task('default', function() {
  livereload.listen();
  gulp.watch([devLocation+'css/**/*.scss', devLocation+'css/vendor/**/*.css', devLocation+'js/*.js'], ['dev']);
});