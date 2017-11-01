var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


//script paths
var jsFiles = 'assets/js/*.js',
jsDest = '../liri-node-app/assets/js/Final/';

gulp.task('js', function() {
return gulp.src(jsFiles)
    .pipe(concat('lris.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('lris.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});


gulp.task('watch', function() {
    gulp.watch('../liri-node-app/assets/js/**.js', ['js']);

  });
