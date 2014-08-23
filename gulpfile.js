var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserify = require('gulp-browserify');
var watchify = require('gulp-watchify');

var bundlePaths = {
    src: [
        'public/source/js/**/*.jsx'
    ],
    dest:'build/js/'
}
var watching = false;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('default',['scripts'], function() {
	if (process.env.NODE_ENV === 'development') {
		nodemon({script: 'app.js', ext: 'js'}).on('restart', function () {
			console.log('restarting due to changes');
		});
	}
});

gulp.task('scripts', function () {
	gulp.src('./public/app.js')
	.pipe(browserify({
		insertGlobals: true
	}))
	.pipe(gulp.dest('./public/build/js'));
});

gulp.task('browserify', watchify(function(watchify) {
    return gulp.src(bundlePaths.src)
        .pipe(watchify({
            watch: watching
        }))
        .pipe(gulp.dest(bundlePaths.dest))
}))