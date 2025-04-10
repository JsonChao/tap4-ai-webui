import createMiddleware from 'next-intl/middleware';

import { localePrefix } from '@/app/navigation';

import { locales } from '../i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix,
  pathnames: {
    '/': '/',
    '/explore': '/explore',
    '/submit': '/submit',
    '/startup': '/startup',
    '/ai/[websiteName]': '/ai/[websiteName]',
    '/category/[code]': '/category/[code]',
  },
});

export default intlMiddleware;
