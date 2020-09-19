'use strict';
const { src, dest, series, parallel } = require('gulp');

const sass = require('gulp-sass');

const include = require('gulp-include');

const clean = require('gulp-clean');

const svgo = require('gulp-svgo');

const terser = require('gulp-terser');

sass.compiler = require('node-sass');

const gm = require('gulp-gm');

const ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

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


function copiehtml(cb){
  return src('./src/html/index.html')
  .pipe(include())
  .pipe(dest('./dist'));
}


function typescript() {
 return tsProject.src().pipe(tsProject({
   target: "es6",
 })).js
 .pipe(terser())
 .pipe(dest("dist"));
};

exports.typescript = typescript;

exports.default = series(parallel(copiehtml, typescript));
