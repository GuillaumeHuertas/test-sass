const gulp = require('gulp');
const sass = require('gulp-sass');
const useref = require('gulp-useref');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});


gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
});
