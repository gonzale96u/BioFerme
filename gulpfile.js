'use strict';
const { src, dest, series, parallel } = require('gulp');

const sass = require('gulp-sass');

const clean = require('gulp-clean');

const svgo = require('gulp-svgo');

sass.compiler = require('node-sass');

const gm = require('gulp-gm');

function photo(cb){
  return src('./src/photo/**/*.*')
  .pipe(dest('./dist/original'))
  .pipe(gm(function (gmfile) {
    return gmfile.resize(100, 100);
  }))
  .pipe(dest('./dist/vignettes'));
}

function svg(cb) {
  return src('./src/svg/BioFerme.svg')
  .pipe(svgo())
  .pipe(dest('./dist/svg'));
  };

  exports.svg = svg;


function nettoyage(cb) {
  return src('./dist', {read: false})
  .pipe(clean())
}
exports.nettoyage = nettoyage;

function css(cb) {
  return src('./src/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./dist/css'));
  };

  const inclu = require('gulp-include');

function copiehtml(cb){
  return src('./src/html/index.html')
  .pipe(inclu())
  .pipe(dest('./dist'));
}

exports.default =parallel(css, copiehtml, photo, svg);
