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
        [source + '/src/demo/scss/large-demo.scss', 'large-demo.min.css'],
        [source + '/src/of/scss/default-of.scss', 'default-of.min.css'],
        [source + '/src/of/scss/large-of.scss', 'large-of.min.css']
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

gulp.task('assets', ["clean"], function () {
    return gulp.src(source + '/images/**/*')
        .pipe(gulp.dest(source + "/assets/images"));
});

gulp.task('sass', ["clean-sass"], function () {
    gulp.src(source + '/src/fonts/**/*')
        .pipe(gulp.dest(source + "/assets/fonts"));
    return gulp.start('make-sass');
});

gulp.task("scripts", ["clean-js"], function() {
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

gulp.task("clean", function() {
    return del([
        source + '/assets/**/*'
    ]);
});

gulp.task("clean-sass", function() {
    return del([
        source + '/assets/**/*.css',
        source + '/assets/fonts'
    ]);
});

gulp.task("clean-js", function() {
    return del([
        source + '/assets/**/*.js'
    ]);
});

gulp.task('clean-prod', function () {
    return del(destination);
});

gulp.task('copie-prod', ['clean-prod'], function () {
    return gulp.src([source + '/**/*',
          '!' + source + '/assets/css/!(*.min).css',
          '!' + source + '/src{,/**}'])
    .pipe(gulp.dest(destination + ''));
});


//////////////

gulp.task("watch", function() {
    gulp.start('sass');
    watch(source + '/src/scss/**/*.scss', function(){
        gulp.start('make-sass');
    });
    watch(source + '/src/js/**/*.js', function(){
        gulp.start('scripts');
    });
});

gulp.task("default", ["clean", "scripts", "sass", "assets"]);

gulp.task("prod", ["copie-prod"]);
