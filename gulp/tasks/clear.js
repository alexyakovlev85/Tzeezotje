// Конфигурация
import { path } from '../config/path.js';

// Плагины
import { deleteAsync } from 'del';

// Удаление директории
const clear = () => {
  return deleteAsync(path.root);
};

export { clear };
