var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require("browser-sync").create();
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var onError = function(err) {
    notify.onError({
      title:    "Gulp",
      subtitle: "Compilation error!",
      message:  "Error: <%= error.message %>",
      sound: false
  })(err);
    this.emit('end');
};

gulp.task('js', function(){
  return gulp.src('src/js/main.js')
    .pipe(plumber({errorHandler: onError}))
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/assets/js/'))
});

gulp.task('serve', ['build.index', 'js'], function() {
    browserSync.init({
        server: "./public"
    });
     gulp.watch(["src/js/**/*.js", "src/js/**/*.vue"], ['js:watch']);
     gulp.watch("src/index.html", ['index:watch']);
});

gulp.task('js:watch', ['js'], function(done) {
  browserSync.reload();
  done()
})

gulp.task('index:watch', ['build.index'], function(done) {
  browserSync.reload();
  done()
})

// Copy index.html file
gulp.task('build.index', function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['serve']);
