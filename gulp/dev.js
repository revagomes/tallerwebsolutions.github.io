
var gulp = require('gulp')
  , watchers = {
      'sass': './src/sass/**/*',
      'index': './src/index.html',
      'i18n': './src/i18n/**/*'
    }
  , tasks = Object.keys(watchers)
  , taskRunners = tasks.map(function (task) {
      return function () {
        gulp.watch(watchers[task], [task]);
      };
    });



/**
 * Create watching tasks.
 */
tasks.forEach(function (task, index) {
  gulp.task('watch:' + task, [task], taskRunners[index]);
});

/**
 * Helper task to initiate all watchers.
 */
gulp.task('watch', tasks, function () {
  taskRunners.forEach(function (taskRunner) {
    taskRunner();
  });
});