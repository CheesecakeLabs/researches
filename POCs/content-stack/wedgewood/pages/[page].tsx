import { Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { onEntryChange } from '~/contentstack-sdk';
import RenderComponents from '~/lib/components/render-components';
import { getPageRes } from '~/lib/helper';
import type { Context, PageResponse } from '~/lib/types/pages';

export default function CustomPage({
  entryUrl,
  page,
}: {
  entryUrl: string;
  page: PageResponse;
}) {
  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      const entryRes = await getPageRes(entryUrl);
      if (!entryRes) throw new Error('Status code 404');
      setEntry(entryRes);
    } catch (error) {
      console.error('Error Fetching page data', error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, []);

  return getEntry.page_components ? (
    <RenderComponents pageComponents={getEntry.page_components} />
  ) : (
    <Skeleton />
  );
}

export async function getServerSideProps(context: Context) {
  try {
    const { page } = context.params;
    const entryUrl = page.includes('/') ? page : `/${page}`;

    const entryRes = await getPageRes(entryUrl);

    if (!entryRes) throw new Error('404');

    return {
      props: {
        entryUrl,
        page: entryRes,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
