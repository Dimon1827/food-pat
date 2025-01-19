import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    // 
    historyApiFallback: true,
    hot: true // Hot module replacement (hmr) - это функционал, котоырй позволяет обновлять код без перезагрузки страницы
  };
}

//webpack-dev-server - сервер, позволящий ребилдить модули, если происходят какие либо изменения в коде. Опции для сервера указываются в свойстве devServer
