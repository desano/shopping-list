var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// copy html
gulp.task('copy-html', function() {
   gulp.src('src/*.html')
   .pipe(gulp.dest('public/'));
});

// copy js
gulp.task('copy-js', function() {
   gulp.src('src/js/*.js')
   .pipe(gulp.dest('public/js'));
});

// copy templates
gulp.task('copy-templates', function() {
   gulp.src('src/templates/*.html')
   .pipe(gulp.dest('public/templates'));
});

// watch task
gulp.task('watch',function() {
    browserSync.init({
      server: "./public/"
    });
    gulp.watch('src/*.html',['copy-html']);
    gulp.watch('src/js/*.js',['copy-js']);
    gulp.watch('src/templates/*.html',['copy-templates']);
    gulp.watch('public/*.html').on('change', browserSync.reload);
    gulp.watch('public/js/*.js').on('change', browserSync.reload);
    gulp.watch('public/templates/*.html').on('change', browserSync.reload);
});

// copy bootstrap
gulp.task('bootstrap', function() {
   gulp.src('node_modules/bootstrap/dist/**/*')
   .pipe(gulp.dest('public/'));
});

// copy jquery
gulp.task('jquery', function() {
   gulp.src('node_modules/jquery/dist/jquery.min.js')
   .pipe(gulp.dest('public/js'));
});

// copy angular
gulp.task('angular', function() {
   gulp.src('node_modules/angular/angular.min.js')
   .pipe(gulp.dest('public/js/'));
   gulp.src('node_modules/angular-route/angular-route.min.js')
   .pipe(gulp.dest('public/js/'));
});

// copy all
gulp.task('prepare-public', ['copy-html', 'copy-js', 'copy-templates', 'bootstrap', 'jquery', 'angular']);

// default task
gulp.task('default', ['watch']);
