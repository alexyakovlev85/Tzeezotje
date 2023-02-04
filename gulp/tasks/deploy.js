// Основной модуль
import gulp from 'gulp';

// Конфигурация
import { path } from '../config/path.js';

// Плагины
import ghPages from 'gulp-gh-pages';

// Обработка Github
const deploy = () => {
  return gulp.src(path.deploy.src).pipe(ghPages());
};

export { deploy };
