import { ChakraProvider, cookieStorageManager } from '@chakra-ui/react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import '@contentstack/live-preview-utils/dist/main.css';

import Layout from '~/lib/layout';
import customTheme from '~/lib/styles/theme';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ChakraProvider colorModeManager={cookieStorageManager} theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
