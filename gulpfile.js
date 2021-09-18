/*function simpleTask() {
console.log ('This is a test task!');
}
exports.default = simpleTask;*/

const { src, dest, watch, series } = require ("gulp");
const concat = require ("gulp-concat");
const sass = require ("gulp-sass");
const autoprefixer = require ("gulp-autoprefixer");
const cssnano = require ("gulp-cssnano");
const rename = require ("gulp-rename");
const uglify = require ("gulp-uglify");
const imagemin = require ("gulp-imagemin");

function task_html () {
return src ( "app/*.html")
.pipe (dest ( "build"));
}
exports.html = task_html