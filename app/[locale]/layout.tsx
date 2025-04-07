import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Toaster } from '@/components/ui/sonner';
import Navigation from '@/components/home/Navigation';

import './globals.css';

import { Suspense } from 'react';

import GoogleAdScript from '@/components/ad/GoogleAdScript';
import SeoScript from '@/components/seo/SeoScript';

import Loading from './loading';

export const metadata: Metadata = {
  title: 'Shipfaster AI',
  description: 'Discover the best AI tools with Shipfaster AI',
  icons: [
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'shortcut icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', url: '/favicon.svg', type: 'image/svg+xml' },
  ],
  openGraph: {
    title: 'Shipfaster AI',
    description: 'Discover the best AI tools with Shipfaster AI',
    images: ['/favicon.svg'],
    url: 'https://shipfaster.online',
    siteName: 'Shipfaster AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shipfaster AI',
    description: 'Discover the best AI tools with Shipfaster AI',
    images: ['/favicon.svg'],
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning className='dark'>
      <head>
        {/* Google Analytics */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-VE82D5Q35M' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VE82D5Q35M');
            `,
          }}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className='relative mx-auto flex min-h-screen flex-col bg-shipfaster-black text-white'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Toaster
            position='top-center'
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'text-green-400',
                warning: 'text-yellow-400',
                info: 'bg-blue-400',
              },
            }}
          />
          <Navigation />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextIntlClientProvider>
        <SeoScript />
        <GoogleAdScript />
      </body>
    </html>
  );
}
