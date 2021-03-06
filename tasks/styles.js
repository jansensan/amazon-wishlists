var config = require('../gulp-config')().styles,
  gulp = require('gulp'),
  sass = require('gulp-sass')

// tasks definitions
gulp.task('styles', compileStyles);

// methods definitions
function compileStyles() {
  return gulp
    .src(config.src)
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(gulp.dest(config.dest));
}
