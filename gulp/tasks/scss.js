// Основной модуль
import gulp from 'gulp';

// Конфигурация
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import rename from 'gulp-rename';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import shorthand from 'gulp-shorthand';
import webpCss from 'gulp-webp-css';
import replace from 'gulp-replace';

const sass = gulpSass(dartSass);

// Обработка SCSS
const scss = () => {
  return gulp
    .src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'SCSS',
          message: error.message,
        })),
      })
    )
    .pipe(sass())
    .pipe(webpCss())
    .pipe(postcss([autoprefixer()]))
    .pipe(groupCssMediaQueries())
    .pipe(replace(/@img\//g, '../img/'))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(
      postcss([
        cssnano({
          preset: 'default',
        }),
      ])
    )
    .pipe(shorthand())
    .pipe(
      postcss([
        cssnano({
          preset: 'default',
        }),
      ])
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }));
};

export { scss };
