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
    replace         = require('gulp-replace'),
    log             = require('fancy-log'),
    through2        = require('through2'),
    runner          = require('child_process'),
    fs              = require('fs'),
    babel           = require('gulp-babel'),
    concat           = require('gulp-concat')
    ;

// Variables de chemins
var source = './src'; // dossier de travail
var doc = './doc/assets'; // dossier de travail
var destination = './dist'; // dossier à livrer
var build = './build'; // dossier de ocmpilation

gulp.task("clean-dest", function(done) {
    del.sync([
        destination + '/**/*'
    ]);
    done();
});
gulp.task("clean-build", function(done) {
    del.sync([
        build + '/**/*'
    ]);
    done();
});
gulp.task("clean", gulp.series("clean-dest", "clean-build"));

gulp.task('make-sass', function () {
    var scssList = [];

    fs.readdirSync(doc+ '/scss/', { withFileTypes: true })
        .filter(dirent => !dirent.name.startsWith('_'))
        .filter(dirent => dirent.name.endsWith('.scss'))
        .map(dirent => scssList.push(doc+ '/scss/' +dirent.name));

    fs.readdirSync(source+ '/core/scss/', { withFileTypes: true })
        .filter(dirent => !dirent.name.startsWith('_'))
        .filter(dirent => dirent.name.endsWith('.scss'))
        .map(dirent => scssList.push(source+ '/core/scss/' +dirent.name));

    return gulp.src(scssList)
        .pipe(plumber(function(e){log.error('Erreur lors de la compilation SASS !', e);}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(build + '/css/dev'))
        .pipe(cssnano({zindex: false}))
        .pipe(gulp.dest(build + '/css/min'))
    ;
});

gulp.task("scripts", function() {
    return gulp.src([
            source + "/core/js/closest-polyfill.js",
            source + "/core/js/sipaui.js"
        ])
        .pipe(concat('sipaui.min.js', {newLine: ';'}))
        .pipe(include({
            extensions: "js",
            hardFail: true,
            includePaths: [
            __dirname + "/src/core/js"
            ]
        }))
        .pipe(babel({
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "targets": {
                            "firefox": "51",
                            "chrome": "56",
                            "ie": "10"
                        }
                    }
                ]
            ]
        }))
        .on('error', console.log)
        .pipe(gulp.dest(build + '/js/dev'))
    ;
});

gulp.task("images", function() {
    return gulp.src([
            source + "/core/images/**/*",
            source + "/components/**/images/**/*",
        ])
        .pipe(gulp.dest(destination + '/images'))
    ;
});

gulp.task("make-scripts-dev", gulp.series("scripts", function() {
    return gulp.src([build + '/js/dev/**/*'])
        .pipe(gulp.dest(destination + '/js'))
    ;
}));

gulp.task("make-scripts-prod", gulp.series("scripts", function() {
    return gulp.src([build + '/js/dev/**/*'])
        .pipe(uglify()
            .on('error', console.log))
            .pipe(rename('sipaui.min.js'))
        .pipe(gulp.dest(destination + '/js'))
    ;
}));

gulp.task("make-css-dev", gulp.series("make-sass", function() {
    return gulp.src([build + '/css/dev/**/*'])
        .pipe(gulp.dest(destination + '/css'));
}));

gulp.task("make-css-prod", gulp.series("make-sass", function() {
    return gulp.src([build + '/css/min/**/*'])
        .pipe(gulp.dest(destination + '/css'));
}));

gulp.task("make-assets", function() {
    return gulp.src([source + '/core/fonts/**/*'])
        .pipe(gulp.dest(destination + '/fonts'));
});

gulp.task("copy-storybook", function() {
    return gulp.src(['./doc/storybook/**/*'])
        .pipe(gulp.dest(build + '/storybook'));
});

gulp.task("copy-stories", gulp.series("copy-storybook", function() {
    return gulp.src(['src/components/**/*'])
        .pipe(gulp.dest('dist/components'));
}));

gulp.task("build-stories", gulp.series("copy-stories", function(done) {
    var components = fs.readdirSync('dist/components/', {withFileTypes: true})
        .filter(dirent => dirent.isDirectory())
        .forEach(dirent => {
            gulp.src('dist/components/' + dirent.name + '/**/*.md')
                .pipe(replace(/\]\((design\/[^.]+\..{3,4})\)/g, '](components/' + dirent.name + '/$1)'))
                .pipe(gulp.dest('dist/components/' + dirent.name));

        });
    ;
    done();
}));

gulp.task("loader-storybook", gulp.series("build-stories", function() {
    var components = [];
    function _liste(dirPath, name) {
        var liste = fs.readdirSync(dirPath, {withFileTypes: true})
            .filter(dirent => dirent.isDirectory())
            .forEach(dirent => {
                if(
                    fs.readdirSync(dirPath + dirent.name, {withFileTypes: true})
                        .filter(dirent => dirent.isFile())
                        .filter(dirent => dirent.name.indexOf('doc-') !== -1).length > 1
                    ) {
                    components.push({
                        path: dirPath + dirent.name,
                        fullname: name + dirent.name,
                        name: dirent.name
                    });
                } else {
                    _liste(dirPath + dirent.name + '/',  name + dirent.name + '/');
                }
            })
    }
    _liste('src/components/', '');
    // console.log(components);

    var imports = components.map(component =>
        ['design', 'html', 'vuejs']
            .map(type => {
                if(fs.existsSync('./dist/components/' + component.fullname + '/doc-' + type + '.md'))
                    return 'import doc_' + type + '_' + component.name.replace('-', '_') + ' from \'../../../dist/components/' + component.fullname + '/doc-' + type + '.md\';';
                else return '';
            })
            .join(`
`)
        )
        .join(`
`)
    ;

    var stories = components.map(component => {

        return `storiesOf(\'`+ component.fullname +`\', module)
    .addDecorator(withKnobs)
    ` + ['design', 'html', 'vuejs']
            .map(type => {
                if(fs.existsSync('./dist/components/' + component.fullname + '/doc-' + type + '.md'))
                    return '.add(\'' + type + '\', doc(doc_' + type + '_' + component.name.replace('-', '_') + '))';
                else return '';
            })
            .join(`
    `) + `
;
`
    })
    .join(`
`)
    ;

    return gulp.src(build + '/storybook/stories/load-stories.js')
        .pipe(replace('##imports##', imports))
        .pipe(replace('##stories##', stories))
        .pipe(gulp.dest(build + '/storybook/stories/'));
    ;
}));

function myPhp2Html(file, enc, cb) {
    runner.exec('php ' + file.path, function(err, phpResponse, stderr) {
        if(err) console.log(err); /* log error */

        file.contents = new Buffer(phpResponse
            .replace(/\/dist\//g, '\/')
            .replace(/\/doc\//g, '\/')
            .replace(/\.php/g, '.html')
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



//
// Commandes utiles ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
gulp.task("make-dev-assets", gulp.series('clean', "make-assets", "make-css-dev", "images", "make-scripts-dev", "loader-storybook"));
gulp.task("default", gulp.series("make-dev-assets"));

gulp.task("watch", function() {
    gulp.start('make-dev-assets');
    watch( [
            source+ '/core/scss/**/*.scss',
            source+ '/components/**/*.scss',
            source+ '/core/**/*.js',
            doc+ '/scss/**/*.scss',
        ], function(){
        gulp.start('make-dev-assets');
    });
});

gulp.task("make-prod-assets", gulp.series("clean", "make-assets", "make-css-prod", "images", "make-scripts-prod", "loader-storybook"));

gulp.task("generate-doc", gulp.series("make-prod-assets", function(done) {
    // Generate doc
    php2html(["./doc/*.php"], build + "/");
    done();
}));

gulp.task("generate-html", gulp.series("generate-doc", function() {
    // replace html
    return gulp.src([build + '/**/*.html'])
        .pipe(gulp.dest(destination + '/'));
}));
gulp.task("html", gulp.series("generate-html"));
