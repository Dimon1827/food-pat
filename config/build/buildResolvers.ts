import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildResolvers(
  options: BuildOptions
): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
}

// resolve extensions указываются расширения файлов, которые необходимо обработать. Помогает Webpack разрешать расширения файлов. Если в операциях импорта не указано расширение, то Webpack будет искать соответствующие файлы с указанными расширениями


// Alias - позволяет описывать более простые и небольшие пути до определенных файлов. Например вместо '../../pages/about/About' можно получить такой путь '@/pages/about/About'. Для этого в alias указывается название, в данном случае значок @, сам путь в данном случае он таков __dirname, src. Также для того, чтобы эта функция работала в typescript, в файле tsconfig указал "baseUrl": "." и "paths": {"@/*": ["./src/*"]}. Это необходимо для синхронизации настроек webpack с настройками в tsconfig