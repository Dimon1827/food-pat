import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';
import webpack, { Configuration } from 'webpack';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

//mode - свойство, в котором указывается то какую сборку мы хотим собрать. development - это сборка для разработчиков. production - это сборка для пользователя

//entry: path.resolve(__dirname, 'src', 'index.js') Входная точкa, в котором нужно указать модуль по которому webpack должен выполнить сборку. Dirname - это переменна, которая содержит абсолютный путь к каталогу в котором выполняется исполняемый файл. Метод resolve преобразует последовательность путей в абсолютный путь

//output указывает где необходимо создавать выходные файлы, а также как их нужно называть. path - здесь указывается путь в котором у нас будут создаваться файлы, можно указать название папки. filename - название файла. clean - позволяет чистить папку после каждой сборки для того, чтобы не захломлять папку


// module - здесь указывается то как различные типы модулей будут обрабатываться. test - это свойство, которое указыветс, какой файл или файлы нужно обрабатывать. Указывается в виде регулярного выражения. exclude - указывается путь папок в которых не нужно обрабатывать файлы. use - указывается то какой loader используется

