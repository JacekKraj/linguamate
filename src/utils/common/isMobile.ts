import { UAParser } from 'ua-parser-js';
import { headers } from 'next/headers';

export const isMobileServer = async () => {
  const headersList = await headers();

  const userAgent = headersList.get('user-agent') || '';

  const type = UAParser(userAgent).device.type;

  return type === 'mobile';
};
