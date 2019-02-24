const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function imgSquash() {
    return gulp .src("public/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("src/minified/images"));
}

gulp.task("imgSquash", imgSquash);

gulp.task("watch", () => {
    gulp.watch("public/img/*", imgSquash);
});

gulp.task("default", gulp.series("imgSquash", "watch"));