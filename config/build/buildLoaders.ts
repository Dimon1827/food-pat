import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  // options.icon = true позволяет работать с svg именно как с иконками и удобно менять им размеры


  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  };

  const esbuildLoader = {
    // Match `.js`, `.jsx`, `.ts` or `.tsx` files
    test: /\.[jt]sx?$/,
    loader: 'esbuild-loader',
    exclude: /node_modules/,
    options: {
      // JavaScript version to compile to
      target: 'es2015',
    },
  };


  return [
    // Порядок важен
    assetLoader,
    scssLoader,
    esbuildLoader,
    svgrLoader,
  ];
}


// localIdentName - позволяет указать свое название класса, в данном случае прописан путь до файла

// svgrLoader - loader для работы с svg файлами. Создает на основе svg react компонент.

// assetLoader - loader для работы с изображениями
