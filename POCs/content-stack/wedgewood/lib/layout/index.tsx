import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out" className={className}>
      <Box>
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
