// Основной модуль
import gulp from 'gulp';

// Конфигурация
import { path } from './gulp/config/path.js';
import { app } from './gulp/config/app.js';

// Плагины
import browserSync from 'browser-sync';

// Задачи
import { clear } from './gulp/tasks/clear.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { img } from './gulp/tasks/img.js';
import { fonts } from './gulp/tasks/fonts.js';
import { deploy } from './gulp/tasks/deploy.js';

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
    notify: false,
  });
};

// Наблюдение
const watcher = () => {
  gulp.watch(path.html.watch, html).on('all', browserSync.reload);
  gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
  gulp.watch(path.js.watch, js).on('all', browserSync.reload);
  gulp.watch(path.img.watch, img).on('all', browserSync.reload);
  gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload);
};

// Задачи
export { clear };
export { html };
export { scss };
export { js };
export { img };
export { fonts };
export { deploy };

// Сборка
const build = gulp.series(clear, gulp.parallel(html, scss, js, img, fonts));

const dev = gulp.series(build, gulp.parallel(watcher, server));

export default app.isProd ? build : dev;
