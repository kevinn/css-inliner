var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
var rename = require('gulp-rename');


gulp.task('default', function() {
    return gulp.src('./*.master.html')
        .pipe(inlineCss({
          applyStyleTags: true,
          applyLinkTags: true,
          removeStyleTags: false,
          removeLinkTags: false
        }))
        .pipe(rename(function(path) {
          path.basename = path.basename.replace(/\.master$/, "");
        }))
        .pipe(gulp.dest('build/'));
});
