var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap-css/dist/js/bootstrap.js', 'assets/js/*.js'])
	.pipe(concat('script.js'))
	.pipe(gulp.dest('dist/js/'))
});

gulp.task('style', function(){
	gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'assets/sass/main.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('dist/css/'))
});

gulp.task('webserver', function(){
	gulp.src('../tiempo/')
		.pipe(webserver({
			fallback: 'index.html',
			livereload: true,
			directoryListing: false,
			open: true
	}));
});

gulp.task('watch', function() {gulp.watch('assets/sass/*.scss', ['style']);
});

gulp.task('default',['script', 'style', 'webserver', 'watch']);