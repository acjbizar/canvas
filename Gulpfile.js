
"use strict";

const gulp = require('gulp');
const twig = require('gulp-twig');
const data = require('gulp-data');
const fs = require('fs');

// Compile Twig templates to HTML
gulp.task('templates', function() {
    return gulp.src(['./src/**/*.twig', '!src/_*.twig', '!src/canvas.html.twig'], { dot: true })
        .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync('data.json'));
        }))
        .pipe(twig({
            errorLogToConsole: true,
            extname: false
        }))
        .pipe(gulp.dest('./dist/')); // output the rendered files to the "dist" directory
});
