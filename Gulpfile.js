
var gulp = require('gulp');
var twig = require('gulp-twig');

// Compile Twig templates to HTML
gulp.task('templates', function() {
    return gulp.src(['src/*.twig', '!src/canvas.html.twig'])
        .pipe(twig({
            // TODO: Feed it a file. (JSON? ini? YAML? Something else?)
            data: {
                artist: {
                    location: 'The Hague, Netherlands',
                    name: 'Alexander Christiaan Jacob',
                    twitter: 'ACJ',
                    url: 'https://alexanderchristiaanjacob.com/'
                },
                artwork: {
                    dir: 'ltr',
                    lang: 'en',
                    description: 'Blank canvas.',
                    title: 'Canvas',
                    themeColor: 'white',
                    image: 'https://deidee.com/logo.png?str=hetcanvas',
                    url: './'
                },
                body: '<h1>Hallo, wereld!</h1>',
                gtm: 'UA-6227584-61'
            },
            extname: false
        }))
        .pipe(gulp.dest('dist')); // output the rendered files to the "dist" directory
});
