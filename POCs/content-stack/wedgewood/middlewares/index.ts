import { NextResponse } from 'next/server';

import { CustomStack } from '~/contentstack-sdk';

export default function middleware(req) {
  console.log(req);
  CustomStack.livePreviewQuery(req.query);
  return NextResponse.next();
}
