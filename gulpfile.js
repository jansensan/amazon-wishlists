var gulp = require('gulp'),
  requireDir = require('require-dir'),
  taskListing = require('gulp-task-listing');


// require tasks directory
requireDir('./tasks', { recurse: true });


// tasks
gulp.task('help', taskListing);
gulp.task('default', ['help']);
