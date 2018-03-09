var gulp            = require("gulp"),
    del             = require("del"),
    include         = require("gulp-include"),
    rename          = require("gulp-rename"),
    uglify          = require("gulp-uglify"),
    sass            = require("gulp-sass"),
    zip             = require('gulp-zip'),
    php2html        = require('gulp-php2html'),
    replace         = require('gulp-replace'),
    watch           = require("gulp-watch"),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    cssnano         = require('gulp-cssnano'),
    log             = require('fancy-log')
    ;

// Variables de chemins
var source = './dev'; // dossier de travail
var destination = './web'; // dossier à livrer



gulp.task('make-sass', function () {
    [
        [source + '/src/demo/scss/default-demo.scss', 'default-demo.min.css'],
        [source + '/src/demo/scss/large-demo.scss', 'large-demo.min.css']
    ].forEach(function(a) {
        gulp.src(a[0])
            .pipe(plumber(function(e){log.error('oh no!', e);}))
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./Dev/assets/css'))
            .pipe(cssnano({zindex: false}))
            .pipe(rename(a[1]))
            .pipe(gulp.dest("./Dev/assets/css"));
    });
});

gulp.task('sass-demo', ["clean-sass-demo"], function () {
    gulp.src(source + '/src/fonts/**/*')
        .pipe(gulp.dest(source + "/assets/fonts"));
    return gulp.start('make-sass');
});

gulp.task("scripts-demo", ["clean-js-demo"], function() {
    [
        'sipaui.head',
        'sipaui.foot'
    ].forEach(function(a) {
        gulp.src("./Dev/src/js/"+a+".js")
            .pipe(include({
                    extensions: "js",
                    hardFail: true,
                    includePaths: [
                      __dirname + source + "/src/js"
                    ]
                }))
                .on('error', console.log)
            .pipe(gulp.dest(source + "/assets/js"))
            .pipe(uglify()
                .on('error', console.log))
            .pipe(rename(a+'.min.js'))
            .pipe(gulp.dest(source + "/assets/js"));
    });
});

gulp.task("clean-demo", function() {
    return del([
        source + '/assets/**/*'
    ]);
});

gulp.task("clean-sass-demo", function() {
    return del([
        source + '/assets/**/*.css',
        source + '/assets/fonts'
    ]);
});

gulp.task("clean-js-demo", function() {
    return del([
        source + '/assets/**/*.js'
    ]);
});

////// POC ////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('clean-poc', function () {
    return del(source + '/poc/assets/**/*');
});

gulp.task("clean-sass-poc", function() {
    return del([
        source + '/poc/assets/**/*.css',
        source + '/poc/assets/fonts'
    ]);
});

gulp.task("clean-js-poc", function() {
    return del([
        source + '/poc/assets/**/*.js'
    ]);
});

gulp.task('make-sass-poc', function () {
    [
        [source + '/poc//src/of/scss/default-of.scss', 'default-of.min.css'],
        [source + '/poc/src/of/scss/large-of.scss', 'large-of.min.css']
    ].forEach(function(a) {
        gulp.src(a[0])
            .pipe(plumber(function(e){log.error('oh no!', e);}))
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./Dev/poc/assets/css'))
            .pipe(cssnano({zindex: false}))
            .pipe(rename(a[1]))
            .pipe(gulp.dest("./Dev/poc/assets/css"));
    });
});

gulp.task("scripts-poc", ["clean-js-poc"], function() {
    [
        'sipaui.head',
        'sipaui.foot'
    ].forEach(function(a) {
        gulp.src("./Dev/src/js/"+a+".js")
            .pipe(include({
                    extensions: "js",
                    hardFail: true,
                    includePaths: [
                      __dirname + source + "/src/js"
                    ]
                }))
                .on('error', console.log)
            .pipe(gulp.dest(source + "/assets/js"))
            .pipe(uglify()
                .on('error', console.log))
            .pipe(rename(a+'.min.js'))
            .pipe(gulp.dest(source + "/assets/js"));
    });
});

gulp.task('sass-poc', ["clean-poc"], function () {
    gulp.src(source + '/poc/src/fonts/**/*')
        .pipe(gulp.dest(source + "/poc/assets/fonts"));
    return gulp.start('make-sass-poc');
});

gulp.task('copie-assets-poc', ["clean-poc"], function () {
    return gulp.src(source + '/assets/**/*')
    .pipe(gulp.dest(source + '/poc/assets/'));
});

////// Prod ////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('clean-prod', function () {
    return del(destination);
});

gulp.task('copie-prod', ['clean-prod'], function () {
    return gulp.src([source + '/**/*',
          '!' + source + '/assets/css/!(*.min).css',
          '!' + source + '/poc/assets/css/!(*.min).css',
          '!' + source + '/src{,/**}'])
    .pipe(gulp.dest(destination + ''));
});


//
// Commandes utiles ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

gulp.task("watch", function() {
    gulp.start('sass');
    watch(source + '/src/scss/**/*.scss', function(){
        gulp.start('make-sass');
    });
    watch(source + '/src/js/**/*.js', function(){
        gulp.start('scripts-demo');
    });
});

gulp.task("demo", ["clean-demo", "scripts-demo", "sass-demo"]);

gulp.task("poc", ["clean-poc", "scripts-poc", "sass-poc", "copie-assets-poc"]);

gulp.task("prod", ["copie-prod"]);

gulp.task("default", ["demo", "poc"]);