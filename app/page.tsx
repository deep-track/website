import * as React from "react";
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
import GothamSection from '@/components/landing-page/GothamSection/GothamSection';
import * as Sentry from "@sentry/nextjs";

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    Sentry.captureException(error);
    console.error("React render error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500">Something went wrong. Please try again.</div>;
    }
    return this.props.children;
  }
}



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
      {/* <WebinarSection /> */}
      <Navbar />
      {/* <PopupModal /> */}
      <Hero />
      <ErrorBoundary>
        <GothamSection />
      </ErrorBoundary>
      <ImpactSection />
      <BuiltForSection />
      <TestimonialSection />
      <ExtraSection />
      <Footer />
    </div>
  );
}
