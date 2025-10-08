import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'sonner'
import { AOSInit } from '@/components/aos';
import GoogleAnalytics from '@/components/google-analytics';
import CookieBanner from '@/components/cookie-banner';
import { GoogleTagManager } from '@next/third-parties/google'
import { PostHogProvider } from './providers';

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
    apple: '/apple-touch-icon.png',
    shortcut: '/shortcut-icon.png'
  },
  metadataBase: new URL('https://www.deeptrack.io'),
  title: {
    default: 'DeepTrack - AI Deepfake Detection & Content Verification Platform',
    template: '%s | DeepTrack AI Deepfake Detection'
  },
  description: 'Enterprise deepfake detection software and AI-powered content verification tools for global businesses. Detect manipulated media, prevent misinformation, and ensure content credibility worldwide.',
  keywords: [
    // Core Deepfake Detection (20)
    'deepfake detection', 'deepfake detector', 'deepfake detection software', 'deepfake identification tool',
    'deepfake detection AI', 'deepfake detection solution', 'best deepfake detection', 'AI deepfake detector',
    'deepfake verification tool', 'detect deepfakes online', 'enterprise deepfake detection', 'video deepfake detector',
    'deepfake image detection', 'deepfake prevention software', 'detect manipulated media', 'deepfake analysis tool',
    'deepfake authentication', 'AI-powered deepfake detection', 'deepfake scam protection', 'deepfake monitoring solution',

    // Media & Journalism (20)
    'deepfake detection for media', 'deepfake protection for journalists', 'AI news verification tools',
    'deepfake misinformation detection', 'tools for fighting fake news', 'deepfake verification for journalists',
    'detecting fake videos in news', 'deepfake threat to journalism', 'media authenticity solutions',
    'AI content verification', 'detect fake interviews AI', 'deepfake risk for news outlets',
    'fact-checking with AI', 'news verification technology', 'AI journalism tools 2025',
    'authenticity tools for media', 'deepfake detection for publishers', 'how to stop misinformation with AI',
    'deepfake news prevention', 'fake video detection for newsrooms',

    // Business & Finance (20)
    'deepfake fraud detection', 'deepfake scams in finance', 'business deepfake protection',
    'deepfake risk for enterprises', 'deepfake corporate security', 'deepfake attacks on CEOs',
    'voice deepfake fraud detection', 'deepfake email scam prevention', 'protect brand from deepfakes',
    'business authenticity verification', 'enterprise media security', 'AI fraud detection tools',
    'preventing deepfake wire fraud', 'corporate deepfake defense', 'deepfake detection in fintech',
    'AI-powered enterprise security', 'synthetic media fraud detection', 'business deepfake risks 2025',
    'detect deepfake scams', 'corporate communication protection',

    // Government & Policy (20)
    'deepfake detection for governments', 'election integrity deepfake detection', 'AI tools for national security',
    'deepfake detection for law enforcement', 'combatting deepfakes in politics', 'deepfake regulation tools',
    'AI election security solutions', 'deepfake threats to democracy', 'detecting political deepfakes',
    'government synthetic media defense', 'national security AI tools', 'deepfake counterintelligence',
    'deepfake propaganda detection', 'political misinformation tools', 'election deepfake verification',
    'AI for government security', 'law enforcement deepfake detection', 'AI defense against disinformation',
    'deepfake video authentication government', 'deepfake detection for public sector',

    // Global Locations
    'deepfake detection USA', 'deepfake detection UK', 'deepfake detection Canada', 'deepfake detection Europe',
    'deepfake detection Australia', 'deepfake detection Germany', 'deepfake detection France', 
    'deepfake detection Asia', 'deepfake detection Africa', 'deepfake detection Kenya', 'deepfake detection Nairobi',
    'deepfake detection solutions in Kenya', 'AI deepfake tools Africa', 'deepfake protection East Africa',

    // Technology & AI
    'AI image authentication', 'synthetic media detection', 'machine learning deepfake detection',
    'real-time deepfake detection', 'deepfake detection API', 'cloud deepfake detection',
    'AI-generated video detection', 'deepfake detection system'
  ].join(', '),
  authors: [{ name: 'DeepTrack' }],
  creator: 'DeepTrack',
  publisher: 'DeepTrack',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.deeptrack.io',
    languages: {
      'en-US': 'https://www.deeptrack.io',
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.deeptrack.io',
    siteName: 'DeepTrack',
    title: 'DeepTrack - AI Deepfake Detection & Content Verification Platform',
    description: 'Global enterprise deepfake detection software and AI-powered content verification tools for media, finance, and government sectors worldwide.',
    images: [
      {
        url: '/deeptrackOG.png',
        width: 1200,
        height: 630,
        alt: 'DeepTrack - AI Deepfake Detection & Content Verification Platform',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepTrack - AI Deepfake Detection & Content Verification Platform',
    description: 'Global enterprise deepfake detection software and AI-powered content verification tools',
    images: ['/deeptrackOG.png'],
    creator: '@deeptrack',
    site: '@deeptrack',
  },
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION || '2160E1BD21CCA207AD7A15AC3E75834F',
    other: {
      me: ['mailto:contact@deeptrack.io'],
    }
  },
  category: 'Technology',
  classification: 'Business Software',
  rating: 'safe for work',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className="scrollbar-thin overflow-x-hidden"
      suppressHydrationWarning
    >
      <AOSInit />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden relative`}
      >
        <PostHogProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.deeptrack.io/#organization",
                "name": "DeepTrack",
                "url": "https://www.deeptrack.io",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.deeptrack.io/logos/deeptrack-high-resolution-logo-white",
                  "width": 180,
                  "height": 60
                },
                "description": "Advanced AI deepfake detection and content verification solutions for global enterprises",
                "foundingDate": "2024",
                "sameAs": [],
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": ["US", "KE"]
                },
                "areaServed": ["WORLD"],
                "knowsAbout": [
                  "Deepfake Detection",
                  "AI Content Verification", 
                  "Synthetic Media Analysis",
                  "Digital Forensics",
                  "Machine Learning",
                  "Computer Vision"
                ],
                "makesOffer": [
                  "Enterprise Deepfake Detection",
                  "AI Media Verification",
                  "Content Authentication",
                  "Fraud Prevention Solutions"
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.deeptrack.io/#website",
                "url": "https://www.deeptrack.io",
                "name": "DeepTrack",
                "description": "Enterprise-grade AI deepfake detection and content verification platform",
                "publisher": {
                  "@id": "https://www.deeptrack.io/#organization"
                },
                "potentialAction": [{
                  "@type": "SearchAction",
                  "target": "https://www.deeptrack.io/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "DeepTrack AI Deepfake Detection",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Enterprise-grade AI deepfake detection and content verification platform",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "creator": {
                  "@id": "https://www.deeptrack.io/#organization"
                }
              })
            }}
          />
          <noscript>
            <iframe 
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.GA_MEASUREMENT_ID!}`}
              height="0" 
              width="0" 
              style={{display:'none', visibility:'hidden'}}
            ></iframe>
          </noscript>
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID!} />
          <GoogleTagManager gtmId={process.env.GA_MEASUREMENT_ID!} />
          <main className="flex flex-col space-y-4">{children}</main>
          <Toaster />
          <CookieBanner />
        </PostHogProvider>
      </body>
    </html>
  );
}