import webpack, { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

export function buildPlugins({
  mode,
  paths,
  analyzer,
}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(paths.public, 'assets'), to: path.resolve(paths.output, 'assets') },
      ],
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(
      // Плагин необходимый для того, чтобы функция hot module replacement работала в react. Для этого также в loader было добавлено ReactRefreshTypeScript
      new ReactRefreshWebpackPlugin()
    );
    plugins.push(
      // Выносит проверку типов в отдельный процесс
      new ForkTsCheckerWebpackPlugin()
    );
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    );

    if (analyzer) {
      plugins.push(new BundleAnalyzerPlugin());
    }
  }

  return plugins;
}

//HtmlWebpackPlugin - это плагин, упрощающий работу с html файлами. Основная проблема при работе с хеш файлами это то, что при изменении файлов бандла у нас меняется название сборки из за чего нужно постоянно изменять в html файле путь до файла, но этот плагин убирает данную проблему. Для его использования скачивается плагин, создается объект HtmlWebpackPlugin на основе класса, в его параметры указывается template, то есть путь до html файла

// MiniCssExtractPlugin - плагин, позволяющий положить код из css в отдельный css файл, а не в js

//ProgressPlugin - При сборке этот плагин будет отображать прогресс в консоли. Не рекомендуется в продакшене, т.к может замедлять сборку
