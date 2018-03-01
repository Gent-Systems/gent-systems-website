/**
 * @file             : gulpfile.js
 * @author           : John Gentile <johncgentile17@gmail.com>
 * Date              : 20.01.2018
 * Last Modified Date: 28.02.2018
 * Last Modified By  : John Gentile <johncgentile17@gmail.com>
 */

// Required npm plugins
var gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  uglify = require('gulp-uglify'),
  pump = require('pump'),
  todo = require('gulp-todo'),
  htmlmin = require('gulp-htmlmin'),
  nano = require('gulp-cssnano'),
  uncss = require('gulp-uncss');

// Minimize and optimize CSS
gulp.task('css', function() {
  return gulp.src('./assets/**/*.css')
    .pipe(uncss({
      html: ['./*.html']
    }))
    .pipe(nano())
    .pipe(gulp.dest('./dist/assets/'));
});

// Generate TODO.md from source files
gulp.task('todo', function() {
  gulp.src(['./**/*.{css,html,js}', '!node_modules/', '!node_modules/**'])
    .pipe(todo())
    .pipe(gulp.dest('./'));
});

// Minimize images
gulp.task('minify-img', function() {
  gulp.src('./assets/**/*.{gif,jpeg,jpg,png,svg}')
    .pipe(imagemin([
      // https://github.com/imagemin/imagemin-gifsicle
      imagemin.gifsicle({optimizationLevel: 3}),
      // https://github.com/imagemin/imagemin-jpegtran
      imagemin.jpegtran({progressive: true}),
      // https://github.com/imagemin/imagemin-optipng
      imagemin.optipng({optimizationLevel: 5})
      // https://github.com/svg/svgo#what-it-can-do
    ], { verbose: true }
    ))
    .pipe(gulp.dest('./dist/assets/'))
});

// Minimize final JavaScript: see options https://github.com/mishoo/UglifyJS2#minify-options
gulp.task('minify-js', function (cb) {
  pump([
    gulp.src('./assets/**/*.js'),
    uglify(),
    gulp.dest('./dist/assets/')
  ],
  cb
  );
});

// Minimize final HTML: see options https://github.com/kangax/html-minifier
gulp.task('minify-html', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true, removeComments: true}))
    .pipe(gulp.dest('./dist'));
});

// Move over all other files
gulp.task('move-files', function() {
  console.log("Moving fonts files to distribution.");
  gulp.src('./**/*.{ttf,woff}')
    .pipe(gulp.dest('./dist'));
});
