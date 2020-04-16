var gulp = require("gulp");

var autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function() {
  gulp
    .src("EF/style2.css") //('css/**/*.css') > selects ALL
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
});
