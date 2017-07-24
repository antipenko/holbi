'use strict';
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create();

gulp.task('hello', function(){
	console.log("hello holbi");
})

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
			.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('dist/css'))
			.pipe(browserSync.reload({
		      stream: true
		    }))
});

gulp.task('markup', function(){
	return gulp.src('app/*.html')
			.pipe(gulp.dest('dist'))
			.pipe(browserSync.reload({
		      stream: true
		    }))
})
gulp.task('scripts', function(){
	return gulp.src('app/js/*.js')
			.pipe(gulp.dest('dist/js'))
			.pipe(browserSync.reload({
		      stream: true
		    }))
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'markup'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', ['markup']);
	gulp.watch('app/js/*.js', ['scripts']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
})
