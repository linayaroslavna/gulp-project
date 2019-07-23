const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");


// function task(done){
//     console.log('gulp works');
//     done();

// }
// exports.default = task;

function styles(){
    return gulp.src('app/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(autoprefixer())
        .pipe(rename(
            {
                suffix: '.min'
            }
        ))
        .pipe(gulp.dest('build/css'))
}

function html(){
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('build/'))
}

function watch(){
    gulp.watch('app/styles/**/*.scss', styles);
    gulp.watch('app/**/*.html', html);
    
}

const build = gulp.parallel(styles,html);

gulp.task('build', build);

gulp.task('default', gulp.parallel(watch,build))

