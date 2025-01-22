import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'sonner'
import { AOSInit } from '@/components/aos';
import GoogleAnalytics from '@/components/google-analytics';
import CookieBanner from '@/components/cookie-banner';
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  icons: {
    icon: '/deeptrack-favicon.ico',
  },
  metadataBase: new URL('https://deeptrack.io/deeptrackOG.png'),
  title: 'DeepTrack',
  description: 'deeptrack™ is an advanced deepfake detection solution designed for media outlets, financial institutions, and government agencies.',
  openGraph: {
    images: '/deeptrackOG.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-thin overflow-x-hidden">
      <AOSInit />
      <head>
        <link rel="icon" type="image/png" href="/logos/deeptrack-high-resolution-logo-white" sizes="32x32" />
        <meta name="msvalidate.01" content="2160E1BD21CCA207AD7A15AC3E75834F" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden relative`}
      >
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GA_MEASUREMENT_ID!}`}
          height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID!}
        />
        <GoogleTagManager gtmId={process.env.GA_MEASUREMENT_ID!} />
        <main className="flex flex-col  space-y-4" >{children} </main>
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}
