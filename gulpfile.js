var gulp            = require("gulp"),
    del             = require("del"),
    include         = require("gulp-include"),
    rename          = require("gulp-rename"),
    uglify          = require("gulp-uglify"),
    sass            = require("gulp-sass"),
    php2html        = require('gulp-php2html'),
    watch           = require("gulp-watch"),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    cssnano         = require('gulp-cssnano'),
    log             = require('fancy-log')
    ;

// Variables de chemins
var source = './src'; // dossier de travail
var doc = './doc/assets'; // dossier de travail
var poc = './doc/poc'; // dossier de travail
var destination = './dist'; // dossier à livrer
var build = './build'; // dossier de compilation

scsslist =
    [
        [source + '/scss/default-sipaui.scss', 'default-sipaui.min.css'],
        [source + '/scss/large-sipaui.scss', 'large-sipaui.min.css'],
        [doc + '/scss/default-demo.scss', 'default-demo.min.css'],
        [doc + '/scss/large-demo.scss', 'large-demo.min.css'],
        [poc + '/scss/of/default-of.scss', 'default-of.min.css'],
        [poc + '/scss/of/large-of.scss', 'large-of.min.css'],
    ]
;

gulp.task('make-sass', function () {
    scsslist.forEach(function(a) {
        gulp.src(a[0])
            .pipe(plumber(function(e){log.error('oh no!', e);}))
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(destination+'/css'))
            .pipe(cssnano({zindex: false}))
            .pipe(rename(a[1]))
            .pipe(gulp.dest(destination+'/css'));
    });
});


gulp.task("clean-css", function() {
    return del([
        destination + '/**/*.css'
    ]);
});
gulp.task("clean-js", function() {
    return del([
        destination + '/**/*.js'
    ]);
});
gulp.task("clean-assets", function() {
    return del([
        destination + '/fonts/**/*'
    ]);
});
gulp.task("clean", ["clean-js", "clean-css", "clean-assets"]);


//
// Commandes utiles ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
gulp.task("watch", function() {
    gulp.start('sass');
    watch(source + '/src/scss/**/*.scss', function(){
        gulp.start('make-sass');
    });
});

gulp.task("default", ["clean", "make-sass"]);
