const gulp = require("gulp")
const browserSync = require("browser-sync").create()
const reload = browserSync.reload

gulp.task("serve", () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })

    gulp.watch("*.*").on("change", reload)
})
