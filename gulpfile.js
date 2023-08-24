const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// compile sass
gulp.task('styles', function () {
  return gulp.src('./assets/sass/style.scss')
    .pipe(sass({ outputStyled: 'nested' }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

//watch all files ending with .scss in sass folder and this children dirs
gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.scss', gulp.series('styles'));
});
