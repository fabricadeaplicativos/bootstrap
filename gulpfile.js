// native
var path  = require('path'),
	spawn = require('child_process').spawn;

// third-party

var gulp        = require('gulp'),
	less        = require('gulp-less'),
	browserSync = require('browser-sync');


var ROOT = '_gh_pages';

// watch files for changes and reload
gulp.task('serve', function () {
	browserSync({
		server: {
			baseDir: ROOT,
		}
	});

	gulp.watch(['less/**/*.less'], function () {

		console.log(less);

		gulp.src('./less/bootstrap.less')
			.pipe(less({
				paths: [path.join(__dirname, 'less')]
			}))
			.pipe(gulp.dest(path.join(__dirname, ROOT, 'dist', 'css')))
			.on('end', browserSync.reload);
	});
});

gulp.task('default', ['serve']);