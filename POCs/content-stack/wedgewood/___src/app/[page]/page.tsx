'use client';

import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import { getPageRes } from '../../../lib/helper';

// import { myAction } from '~/lib/actions/my-action';
// import type { Page } from '~/lib/types/pages';

export default function Page({ params }) {
  const fetchData = async () => {
    const entryRes = await fetch('/api/hello');
    console.log('entry res', entryRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box bg="gray.700">
      <Text>teste</Text>
    </Box>
  );
}
