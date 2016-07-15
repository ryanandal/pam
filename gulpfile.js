// Require
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var bower       = require('bower');
var concat      = require('gulp-concat');
var stylSass    = require('gulp-css-preprocessor');
var concatCss   = require('gulp-concat-css');
var minifyCss   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var consolidate = require('gulp-consolidate');
var coffee      = require('gulp-coffee');
var concat      = require('gulp-concat');
var sh          = require('shelljs');

// sass/styl to css
gulp.task('css', function() {
  gulp.src(['./src/index.sass', './src/components/**/*.styl'])
    .pipe(stylSass())
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(concatCss('ionic.app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./www/css'));
});

// copy img folder
gulp.task('img', function() {
  gulp.src('./src/assets/img/**/*')
    .pipe(gulp.dest('./www/img'));
});

// coffee to js
gulp.task('js-app', function() {
  gulp.src(['./src/index.coffee', './src/index.route.coffee'])
    .pipe(coffee({bare: true}))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('js-services', function() {
  gulp.src('./src/components/**/*.service.coffee')
    .pipe(coffee({bare: true}))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(concat('services.js'))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('js-controllers', function() {
  gulp.src('./src/components/**/*.controller.coffee')
    .pipe(coffee({bare: true}))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(concat('controllers.js'))
    .pipe(gulp.dest('./www/js'));
});

// vendor libraries
gulp.task('lib', function() {
  gulp.src('./bower_components/**/*')
    .pipe(gulp.dest('./www/lib'));
});

// jade to html
gulp.task('templates-components', function() {
  gulp.src('./src/components/**/*.jade')
    .pipe(consolidate('jade', {pretty: '  '}))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(rename(function (path) {
      path.dirname = "/templates";
      path.extname = '.html';
    }))
    .pipe(gulp.dest('./www'));
});
gulp.task('templates-index', function() {
  gulp.src('./src/index.jade')
    .pipe(consolidate('jade', {pretty: '  '}))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./www'));
});

// default task
gulp.task('default', ['css', 'templates-index', 'templates-components', 'img', 'js-app', 'js-controllers', 'js-services', 'lib']);

// watchers
gulp.task('watch', function() {
  gulp.watch(['./src/**/*.sass', './src/**/*.styl'], ['css']);
  gulp.watch('./src/assets/img/**/*', ['img']);
  gulp.watch('./src/**/*.coffee', ['js-app', 'js-controllers', 'js-services']);
  gulp.watch('./src/**/*.jade', ['templates-index', 'templates-components']);
});
