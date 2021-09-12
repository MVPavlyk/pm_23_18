/*//підключаємо gulp
var gulp = require ("gulp");

//текстовий таск
gulp.task ('testTask', function (){
	console.log ('This is a test task!');
});

//запуск за замовчуванням 
gulp.task ("default", ["testTask"]);

var sass = require ("gulp-sass"),
cssnano = require ("gulp-cssnano"),
autoprefixer = require ('gulp-autoprefixer'),*/

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask