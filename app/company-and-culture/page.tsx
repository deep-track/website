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
import CompanyCultureAndLeadership from '@/components/layout/companyCulture';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Company Culture & Leadership | DeepTrack AI Deepfake Detection',
  description: 'Meet the leadership team and learn about DeepTrack company culture. Our mission to combat deepfakes through innovation, integrity, and cutting-edge AI technology.',
  openGraph: {
    title: 'Company Culture & Leadership | DeepTrack AI',
    description: 'Learn about DeepTrack mission, leadership team, and company culture in the fight against deepfakes and synthetic media threats.',
    images: [
      {
        url: 'https://www.deeptrack.io/api/og?title=DeepTrack%20Company%20Culture',
        width: 1200,
        height: 630,
        alt: 'DeepTrack Company Culture and Leadership Team'
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Company Culture, Leadership & Team | DeepTrack AI Deepfake Detection</title>
        <meta 
          name="description" 
          content="Discover DeepTrack company culture, leadership team, and our mission to combat deepfakes worldwide. Learn about our values, innovation approach, and commitment to AI security." 
        />
        <meta 
          name="keywords" 
          content="DeepTrack company culture, AI company leadership, deepfake detection team, cybersecurity company culture, AI security leadership, technology company values, DeepTrack leadership team, AI innovation culture, cybersecurity mission, deepfake prevention company, synthetic media experts, AI technology leadership, cybersecurity company values, technology innovation team, AI security company, deepfake detection mission, cybersecurity leadership, AI company values, technology company culture, security company team"
        />
        <meta property="og:title" content="DeepTrack Company Culture & Leadership Team | AI Deepfake Detection" />
        <meta property="og:description" content="Meet our leadership team and learn about DeepTrack culture of innovation in combating deepfakes and synthetic media threats." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.deeptrack.io/company-and-culture" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DeepTrack",
              "url": "https://www.deeptrack.io",
              "logo": "https://www.deeptrack.io/logos/deeptrack-high-resolution-logo-white",
              "description": "Advanced AI deepfake detection and content verification solutions",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": ["US", "KE"]
              },
              "employee": {
                "@type": "Person",
                "name": "DeepTrack Leadership Team",
                "jobTitle": "AI Security Experts"
              },
              "knowsAbout": [
                "Deepfake Detection",
                "AI Content Verification", 
                "Synthetic Media Analysis",
                "Machine Learning",
                "Computer Vision",
                "Cybersecurity"
              ],
              "ethicsPolicy": "https://www.deeptrack.io/ethics",
              "foundingPrinciples": "Combating synthetic media threats through ethical AI innovation"
            })
          }}
        />
      </Head>
    
      <div className="space-y-6">
        {/* <WebinarSection /> */}
        <Navbar />
        <CompanyCultureAndLeadership />
        <TestimonialSection />
        <ExtraSection />
        <Footer />
      </div>
    </>
  );
}