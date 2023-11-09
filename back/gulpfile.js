// #################################

// RELOAD HTML al hacer cambios en css o html

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Tarea para servir y recargar automáticamente
gulp.task('serve', function () {
    browserSync.init({
        proxy: "http://localhost:3000" // URL de tu servidor Node.js
    });

    gulp.watch('src/views/*.ejs').on('change', function () {
        gulp.src('src/views/*.ejs')
            .pipe(browserSync.stream());
    }); // Recarga en cambios de archivos HTML
    gulp.watch('public/css/*.css').on('change', function () {
        gulp.src('public/css/*.css')
            .pipe(browserSync.stream());
    });
});

// Tarea predeterminada
gulp.task('default', gulp.series('serve'));



// #################################