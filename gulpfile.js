// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass       = require('gulp-sass');
var refills    = require('node-refills').includePaths;
var concat     = require('gulp-concat');
var jshint     = require('gulp-jshint');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var livereload = require('gulp-livereload');
//var sourcemaps = require('gulp-sourcemaps');

var paths = {
        scss: 'public/stylesheets/style.scss'
};

// Lint Task
gulp.task('lint', function() {
    return gulp.src('javascripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(paths.scss)
        .pipe(sass({
          // includePaths: require('node-neat').with('other/path', 'another/path')
          // - or -
          includePaths: ['sass'].concat(refills)
          //require('node-neat').includePaths
        }))
        //.pipe(sourcemaps.init())  // Process the original sources
        //.pipe(sass())
        //.pipe(sourcemaps.write()) // Add the map to modified source.
        //.pipe(sass())
        .pipe(gulp.dest('public/stylesheets'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('public/javascripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/javascripts/*.js', ['lint', 'scripts']);
    gulp.watch('public/stylesheets/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
