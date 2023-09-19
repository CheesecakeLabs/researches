import { ChakraProvider, cookieStorageManager } from '@chakra-ui/react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import localfont from 'next/font/local';
import type { ReactElement, ReactNode } from 'react';
import '@contentstack/live-preview-utils/dist/main.css';

import Layout from '~/lib/layout';
import customTheme from '~/lib/styles/theme';
import type { FooterProps, HeaderProps } from '~/lib/types/layout';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  header: HeaderProps;
  footer: FooterProps;
};

const fonts = localfont({
  src: [
    {
      path: '../fonts/Fontspring-DEMO-gelica-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Fontspring-DEMO-gelica-bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../fonts/Europa.woff2.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ChakraProvider colorModeManager={cookieStorageManager} theme={customTheme}>
      <Layout className={fonts.className}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
