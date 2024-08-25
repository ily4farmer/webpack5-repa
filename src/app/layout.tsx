import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { GlobalStyle } from '~styles';

const myFont = localFont({
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/Inter-Medium.woff',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/Inter-Bold.woff',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/fonts/Inter-Regular.woff',
      style: 'normal',
      weight: '400',
    },
  ],
});

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GlobalStyle />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
