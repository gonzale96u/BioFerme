'use strict';
const { src, dest, series, parallel } = require('gulp');

const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function css(cb) {
  return src('./src/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./dist/css'));
  };

function copiehtml(cb){
  return src('./src/html/index.html')
  .pipe(dest('./dist'));
}
exports.default = parallel(css, copiehtml);
