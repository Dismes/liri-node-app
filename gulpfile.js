var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


//script paths
var jsFiles = 'assets/js/*.js',
jsDest = '../liri-node-app/assets/js/Final/';

gulp.task('scripts', function() {
return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});