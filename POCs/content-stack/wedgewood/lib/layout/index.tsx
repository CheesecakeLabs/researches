import { Box, Skeleton } from '@chakra-ui/react';
import { useEffect, type ReactNode, useState } from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import { getFooterRes, getHeaderRes } from '../helper';
import type { FooterProps, HeaderProps } from '../types/layout';

import { onEntryChange } from '~/contentstack-sdk';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  const [headerRes, setHeaderRes] = useState<HeaderProps | undefined>(
    undefined
  );
  const [footerRes, setFooterRes] = useState<FooterProps | undefined>(
    undefined
  );

  async function fetchData() {
    try {
      const headerResponse = await getHeaderRes();
      const footerResponse = await getFooterRes();

      setFooterRes(footerResponse);
      setHeaderRes(headerResponse);
    } catch (error) {
      console.error('Error Fetching header and footer data', error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, []);

  return (
    <Box margin="0 auto" transition="0.5s ease-out" className={className}>
      <Box>
        {headerRes ? <Header data={headerRes} /> : <Skeleton />}

        <Box as="main">{children}</Box>
        {footerRes ? <Footer data={footerRes} /> : <Skeleton />}
      </Box>
    </Box>
  );
};

export default Layout;
