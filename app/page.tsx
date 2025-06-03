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

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: 'https:deeptrack.io/api/og?title=Deeptrack',
        width: 1200,
        height: 630,
        alt: 'deeptrack'
      }
    ]
  }
}

export default function Home() {
  return (
    <div className="space-y-6">
      <WebinarSection />
      <Navbar />
      <Hero />
      <StepsSection />
      <ImpactSection />
      <BuiltForSection />
      <TestimonialSection />
      <ExtraSection />
      <Footer />
    </div>
  );
}
