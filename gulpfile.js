var gulp = require('gulp'),
	 sass = require('gulp-sass'),
	 browserSync = require('browser-sync');

gulp.task('sass', function(){
	gulp.src('./src/**/*.scss')
	.pipe(sass().on('error', sass.logError)) 
	.pipe(gulp.dest('./src'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./src/**/*.scss', ['sass']); 
});

gulp.task('run-browser', function () {
  var files = [
    'src/**/*.html',
    './src/css/**/*.css',
    './src/img/**/*.png',
    './src/js/**/*.js'
  ];
  
  browserSync.init(files, {
    server: {
      baseDir: './src'
    }
  });
});



gulp.task('default', ['sass:watch', 'run-browser']);

