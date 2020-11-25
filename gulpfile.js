'use strict';

import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import fileinclude from 'gulp-file-include';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import zip from 'gulp-zip';
import through2 from 'through2';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';

import clean from 'gulp-clean';
import cleanCSS from 'gulp-clean-css';
import w3cjs from 'gulp-w3cjs';
import imageminZopfli from 'imagemin-zopfli';
import imageminGiflossy from 'imagemin-giflossy';

import cssmin from 'gulp-cssmin';
// import watch from 'gulp-watch';
// import webserver from 'gulp-webserver';

const paths = {
  root: './',
  favicon: 'favicon.ico',
  html: {
    files: '*.html',
    src: {
      includes: 'src/html/_includes/**/*.html',
      files: 'src/html/*.html'
    }
  },
  scss: {
    dir: 'src/scss',
    app: 'src/scss/app.scss',
    files: 'src/scss/**/*.scss'
  },
  js: {
    dir: 'resources/js',
    files: 'resources/js/**/*',
    src: {
      dir: 'src/js',
      files: 'src/js/**/*.js',
      concat: [
        'src/js/functions.js',
        'src/js/vendors/**/*.js'
      ]
    }
  },
  img: {
    dir: 'resources/img',
    files: 'resources/img/**/*'
  },
  css: {
    dir: 'resources/css',
    files: 'resources/css/**/*'
  },
  fonts: {
    files: 'resources/fonts/**/*'
  },
  vendors: {
    files: 'resources/vendors/**/*'
  },
  demo: {
    files: 'demo/**/*'
  },
  cleanup: [
    '**/.idea',
    '**/.DS_Store',
    '**/Thumbs.db',
    '**/__MACOSX',
    'dist',
    'disting'
  ],
  dist: {
    making: 'disting',
    files: 'disting/**/*',
    dir: 'dist',
    zip: 'dist.zip'
  }
};

// Удаляет файлы
export const cleanFiles = () => {
  return gulp.src(paths.cleanup, {
      read: false,
      allowEmpty: true
    })
    .pipe(clean({
      force: true
    }))
}

export const cleanDist = () => {
  return gulp.src(paths.dist.making, {
      read: false,
      allowEmpty: true
    })
    .pipe(clean({
      force: true
    }))
}

// Компилирует SCSS в CSS
// Минифицирует CSS
// Переименовывает CSS
export const handleCSS = () => {
  return gulp.src(paths.scss.app)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.css.dir))
    .pipe(cleanCSS({
      level: {
        1: {
          specialComments: 0
        }
      }
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.css.dir));
}

// Инклудит HTML части
export const html = () => {
  return gulp.src(paths.html.src.files)
    .pipe(fileinclude({
      indent: true
    }))
    .pipe(gulp.dest(paths.root));
}

// Минифицирует и объединяет JS 
export const handleJS = () => {
  return gulp.src(paths.js.src.concat)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.js.dir))
}

// Копирует файлы в dist 
export const copyToDist = () => {
  return gulp.src([
      paths.html.files,
      paths.js.files,
      paths.css.files,
      paths.img.files,
      paths.fonts.files,
      paths.vendors.files,
      paths.demo.files,
      paths.favicon,
    ], {
      base: './'
    })
    .pipe(gulp.dest(paths.dist.making))
}

// Архивирует dist
export const zipDist = () => {
  return gulp.src(paths.dist.files)
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest(paths.dist.dir))
}

// Web server (if needed webserver can be started at port 8000)
// const serve = () => {
//   gulp.src(paths.dist.dir)
//   .pipe(webserver({
//     livereload: false,
//     directoryListing: true,
//     open: true
//   }));
// }

// gulp.task('webserver', function () {
//   gulp.src(paths.dist.dir)
//     .pipe(webserver({
//       livereload: false,
//       directoryListing: true,
//       open: true
//     }));
// });


// Watch
export const watch = () => {
  // HTML
  gulp.watch([paths.html.src.includes, paths.html.src.files], gulp.series(html));
  // SCSS
  gulp.watch(paths.scss.files, gulp.series(handleCSS));
  // JS
  gulp.watch(paths.js.src.files, gulp.series(handleJS));
}


// Валидация HTML файлов
export const validate = () => {
  return gulp.src(paths.html.files)
    .pipe(w3cjs())
    .pipe(through2.obj(function (file, enc, cb) {
      cb(null, file);
      if (!file.w3cjs.success) {
        throw new Error('Ошибки валидации HTML');
      }
    }));
}

// Сжатие изображений
export const imgmin = () => {
  return gulp.src(paths.img.files)
    .pipe(cache(imagemin([
      imageminPngquant({
        speed: 1,
        quality: [0.95, 1]
      }),
      imageminZopfli({
        more: true
      }),
      imageminGiflossy({
        optimizationLevel: 3,
        optimize: 3,
        lossy: 2
      }),
      imagemin.svgo({
        plugins: [{
          removeViewBox: false
        }]
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imageminMozjpeg({
        quality: 90
      })
    ])))
    .pipe(gulp.dest(paths.img.dir));
};


// Билд
export const build = () => {
  gulp.series(cleanFiles, html, handleCSS, handleJS, copyToDist, zipDist, cleanDist)
}


// Задача по умолчанию
export default gulp.parallel(build);