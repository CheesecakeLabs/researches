// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server';
import { getPageRes } from '../../../../lib/helper';

export const GET = async () => {
  const entryRes = await getPageRes('/home');

  console.log('entry', entryRes);

  NextResponse.json({ ...entryRes });
};
