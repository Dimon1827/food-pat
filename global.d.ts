declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __PLATFORM__: 'mobile' | 'desktop';




// Здесь были объявлены модули для того, чтобы обрабатывать изображения, необходимо для typeScript

// Объявили глобальную переменную __PLATFORM__, ее также указали в plugin как 
// new DefinePlugin({__PLATFORM__: JSON.stringify(platform)})