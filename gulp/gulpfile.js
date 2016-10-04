var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');


// Concatenate Base Dependencies for Javascript
gulp.task('scripts', function () {
        return gulp.src(['js/jquery.js', 'js/underscore.js', 'js/bootstrap.js', 'js/backbone.js'])
                .pipe(concat('js/base.js'))
                .pipe(uglify())
                .pipe(gulp.dest('dist'));
});

// Minify CSS
gulp.task('minify-css', function () {
        return gulp.src('css/*.css')
                .pipe(minifyCss({
                        compatibility: 'ie8'
                }))
                .pipe(gulp.dest('dist/css'));
});

// Main Javascript File
gulp.task('main', function () {
        return gulp.src('js/main.js')
                .pipe(uglify()) // run uglify (for minification)
        .pipe(gulp.dest('dist/js')); // write to the dist/js file
});

// Default Gulp Task
gulp.task('default', function () {
        gulp.watch('css/*.css', ['minify-css']);
        gulp.watch('js/*.js', ['scripts']);
        gulp.watch('js/main.js', ['main']);
});


gulp.start('default');



