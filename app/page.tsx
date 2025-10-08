import ExtraSection from '@/components/landing-page/extra-section';
import Footer from '@/components/landing-page/footer';
import Hero from '@/components/landing-page/hero';
import { Navbar } from '@/components/landing-page/navbar';
import StepsSection from '@/components/landing-page/stepsSection';
import ImpactSection from '@/components/landing-page/impact-section';
import BuiltForSection from '@/components/landing-page/builtForSection';
import TestimonialSection from '@/components/landing-page/testimonialSection';
import { Metadata } from 'next';
import WebinarSection from '@/components/landing-page/webinar-section';
import PopupModal from '@/components/landing-page/informationPopUpModal';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'deeptrack',
  description: 'Enterprise-grade AI deepfake detection software for media, finance, and government sectors worldwide. Detect synthetic media, prevent fraud, and ensure content authenticity with advanced AI technology.',
  openGraph: {
    title: 'deeptrack ',
    description: 'Enterprise-grade AI deepfake detection for global businesses. Protect against synthetic media threats with advanced content verification.',
    images: [
      {
        url: 'https://www.deeptrack.io/api/og?title=DeepTrack%20AI%20Deepfake%20Detection',
        width: 1200,
        height: 630,
        alt: 'DeepTrack - AI Deepfake Detection & Content Verification Platform'
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>DeepTrack - AI Deepfake Detection & Content Verification Platform</title>
        <meta 
          name="description" 
          content="Enterprise AI deepfake detection software for global businesses. Advanced content verification for media, finance, government sectors. Detect synthetic media, prevent fraud worldwide." 
        />
        <meta 
          name="keywords" 
          content="deepfake detection, AI content verification, synthetic media detection, deepfake detector, enterprise AI security, media authenticity, content verification, AI fraud detection, deepfake prevention, video authentication, audio deepfake detection, text detection AI, deepfake detection software, AI security platform, content authenticity, media verification, deepfake detection USA, deepfake detection UK, deepfake detection Canada, deepfake detection Europe, AI security solutions, business deepfake protection, government AI tools, financial fraud detection"
        />
        <meta property="og:title" content="DeepTrack - AI Deepfake Detection & Content Verification Platform" />
        <meta property="og:description" content="Enterprise-grade AI deepfake detection for global businesses. Protect against synthetic media threats with advanced content verification." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deeptrack.io" />
        <link rel="canonical" href="https://www.deeptrack.io" />
        
        {/* Structured Data for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "DeepTrack",
              "url": "https://www.deeptrack.io",
              "description": "AI Deepfake Detection & Content Verification Platform",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.deeptrack.io/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DeepTrack",
              "url": "https://www.deeptrack.io",
              "logo": "https://www.deeptrack.io/logos/deeptrack-high-resolution-logo-white",
              "description": "Advanced AI deepfake detection and content verification solutions for global enterprises",
              "sameAs": [],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": ["US", "KE"]
              }
            })
          }}
        />
      </Head>
    
      <div className="space-y-6">
        {/* <WebinarSection /> */}
        <Navbar />
        {/* <PopupModal /> */}
        <Hero />
        <StepsSection />
        <ImpactSection />
        <BuiltForSection />
        <TestimonialSection />
        <ExtraSection />
        <Footer />
      </div>
    </>
  );
}