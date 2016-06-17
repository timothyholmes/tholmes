var Promise = require('es6-promise').Promise,
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    runSequence = require('run-sequence'),
    connect = require('gulp-connect');

gulp.task('move-assets', function(){
    return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('useref', function(){
    return gulp.src('src/index.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify({mangle: false})))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('build', function (callback) {
    runSequence('clean',
        'sass',
        'useref',
        'move-assets',
        callback
    );
});

gulp.task('webserver', function() {
    connect.server({
        root: './dist/',
        port: 8080
    });
    connect.server({
        root: './src/',
        port: 9090
    });
});

gulp.task('default', function (callback) {
    runSequence(['build', 'webserver', 'watch'],
        callback
    );
});
