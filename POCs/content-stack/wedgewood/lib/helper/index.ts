/* eslint-disable @typescript-eslint/no-unused-expressions */
import { addEditableTags } from '@contentstack/utils';
import getConfig from 'next/config';

import { getEntry, getEntryByUrl } from '../../contentstack-sdk';
import type { HeaderProps, FooterProps } from '../types/layout';
import type { PageResponse } from '../types/pages';

const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.CONTENTSTACK_API_KEY
  ? process.env
  : publicRuntimeConfig;

const liveEdit = envConfig.CONTENTSTACK_LIVE_EDIT_TAGS === 'true';

export const getHeaderRes = async (): Promise<HeaderProps> => {
  const response = (await getEntry({
    contentTypeUid: 'header',
    referenceFieldPath: ['navigation_menu.page_reference'],
    jsonRtePath: ['notification_bar.announcement_text'],
  })) as HeaderProps[][];

  liveEdit && addEditableTags(response[0][0], 'header', true);
  return response[0][0];
};

export const getFooterRes = async (): Promise<FooterProps> => {
  const response = (await getEntry({
    contentTypeUid: 'footer',
    referenceFieldPath: undefined,
    jsonRtePath: ['copyright'],
  })) as FooterProps[][];
  liveEdit && addEditableTags(response[0][0], 'footer', true);
  return response[0][0];
};

export const getAllEntries = async (): Promise<PageResponse[]> => {
  const response = (await getEntry({
    contentTypeUid: 'page',
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as PageResponse[][];
  liveEdit &&
    response[0].forEach((entry) => addEditableTags(entry, 'page', true));
  return response[0];
};

export const getPageRes = async (entryUrl: string): Promise<PageResponse> => {
  const response = (await getEntryByUrl({
    contentTypeUid: 'page',
    entryUrl,
    referenceFieldPath: [],
    jsonRtePath: [],
  })) as PageResponse[];
  liveEdit && addEditableTags(response[0], 'page', true);
  return response[0];
};
