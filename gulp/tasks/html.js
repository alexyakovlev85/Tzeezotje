// Основной модуль
import gulp from 'gulp';

// Конфигурация
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import htmlmin from 'gulp-htmlmin';
import webpHtml from 'gulp-webp-html-nosvg';
import replace from 'gulp-replace';

// Обработка HTML
const html = () => {
  return gulp
    .src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'HTML',
          message: error.message,
        })),
      })
    )
    .pipe(webpHtml())
    .pipe(replace(/@img\//g, 'img/'))
    .pipe(htmlmin(app.htmlmin))
    .pipe(gulp.dest(path.html.dest));
};

export { html };
