/** @type {import('next').NextConfig} */
// Получаем абсолютный путь к файлу конфигурации

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// Получаем директорию текущего файла
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const __dirname = dirname(__filename);

const nextConfig = {
  includePaths: [join(__dirname, 'styles')], // Указываем путь к директории со стилями
  reactStrictMode: true,
};

export default nextConfig;
