var gulp            = require("gulp"),
    del             = require("del"),
    include         = require("gulp-include"),
    rename          = require("gulp-rename"),
    uglify          = require("gulp-uglify"),
    sass            = require("gulp-sass"),
    watch           = require("gulp-watch"),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    cssnano         = require('gulp-cssnano'),
    log             = require('fancy-log'),
    es              = require('event-stream'),
    through2        = require('through2'),
    runner          = require('child_process')
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

        [poc + '/src/scss/neutre/default-poc-neutre.scss', 'default-poc-neutre.min.css'],
        [poc + '/src/scss/neutre/large-poc-neutre.scss', 'large-poc-neutre.min.css'],

        [poc + '/src/scss/of/default-poc-of.scss', 'default-poc-of.min.css'],
        [poc + '/src/scss/of/large-poc-of.scss', 'large-poc-of.min.css'],
    ]
;

gulp.task('make-sass', ['clean'], function () {
    return es.merge(scsslist.map(function(a) {
        return gulp.src(a[0])
            .pipe(plumber(function(e){log.error('Erreur lors de la compilation SASS !', e);}))
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(build + '/css/dev'))
            .pipe(cssnano({zindex: false}))
            .pipe(rename(a[1]))
            .pipe(gulp.dest(build + '/css/min'));
    }));
});

gulp.task("make-css-dev", ["make-sass"], function() {
    return gulp.src([build + '/css/dev/**/*'])
        .pipe(gulp.dest(destination + '/css'));
});
gulp.task("make-css-prod", ["make-sass"], function() {
    return gulp.src([build + '/css/min/**/*'])
        .pipe(gulp.dest(destination + '/css'));
});
gulp.task("make-oueststrap", ["make-sass"], function() {
    return gulp.src([doc + '/oueststrap/**/*'])
        .pipe(gulp.dest(destination + ''));
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
gulp.task("clean-html", function() {
    return del([
        destination + '/**/*.html'
    ]);
});
gulp.task("clean-assets", function() {
    return del([
        destination + '/fonts/**/*'
    ]);
});
gulp.task("clean", ["clean-html", "clean-js", "clean-css", "clean-assets"], function(){
    return del([
        build + '/**/*'
    ]);
});

function myPhp2Html(file, enc, cb) {
    runner.exec('php ' + file.path, function(err, phpResponse, stderr) {
        if(err) console.log(err); /* log error */

        file.contents = new Buffer(phpResponse
            .replace(/\/dist\//g, '\/')
            .replace(/\/doc\//g, '\/')
            .replace(/\.php/g, '.html')
            .replace(/(['"])([^"']+)\.js/g, '$1$2.min.js')
            .replace(/(['"])([^"']+)\.css/g, '$1$2.min.css')
        );

        return cb(null, file);
    });
}
function php2html(glob, dest){
    return gulp.src(glob)
        .pipe(through2.obj(myPhp2Html))
        .pipe(rename(function (path) {
            path.extname = ".html"
        }))
        .pipe(gulp.dest(dest));
}

gulp.task("generate-doc", ["make-prod-assets"], function() {
    // Generate doc
    return php2html(["./doc/*.php"], build + "/");
});
gulp.task("generate-poc", ["make-prod-assets"], function() {
    // Generate poc
    return php2html(["./doc/poc/*.php"], build + "/poc");
});


gulp.task("generate-html", ["generate-poc","generate-doc", "clean-html", "make-prod-assets"], function() {
    // replace html
    return gulp.src([build + '/**/*.html'])
        .pipe(gulp.dest(destination + '/'));
});


//
// Commandes utiles ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
gulp.task("watch", function() {
    gulp.start('make-dev-assets');
    watch( [
            source + '/scss/**/*.scss',
            doc + '/scss/**/*.scss',
            poc + '/scss/**/*.scss',
        ], function(){
        gulp.start('make-dev-assets');
    });
});

gulp.task("make-dev-assets", ["clean", "make-sass", "make-css-dev"]);
gulp.task("make-prod-assets", ["clean", "make-sass", "make-css-prod", "make-oueststrap"]);
gulp.task("default", ["clean", "make-dev-assets"]);
gulp.task("html", ["clean", "generate-doc", "generate-poc", "generate-html"]);
