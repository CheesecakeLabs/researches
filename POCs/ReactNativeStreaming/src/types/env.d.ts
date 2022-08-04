declare module 'react-native-dotenv' {
  export const API_URL: string;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-vlc-media-player';
declare module '*.png';
declare module '*.gif';
