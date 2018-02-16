/**
 * @file             : gulpfile.js
 * @author           : John Gentile <johncgentile17@gmail.com>
 * Date              : 16.02.2018
 * Last Modified Date: 16.02.2018
 * Last Modified By  : John Gentile <johncgentile17@gmail.com>
 */

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var uncss = require('postcss-uncss');

gulp.task('default', function () {
  var plugins = [
    uncss({
      html: ['*.html']
    }),
  ];
  return gulp.src('./assets/**/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist'));
});
