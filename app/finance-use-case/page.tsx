import React from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/landing-page/navbar'
import FeatureHighlight from '@/components/layout/feature-highlight'
import FeatureInformation from '@/components/layout/useCaseFeatureInformation';
import Footer from '@/components/landing-page/footer'
import InformationSection from '@/components/layout/informationSection'
import UseCaseDetailedInformation from '@/components/layout/useCaseDetailedInformation'
import UseCaseFooterBanner from '@/components/layout/useCaseFooterBanner'
import FinanceUseCaseFeatureSection from '@/components/layout/FinanceUseCaseFeatureSection'
import FinanceUseCaseExtraSection from '@/components/layout/FinanceUseCaseExtraSection';
import WebinarSection from '@/components/landing-page/webinar-section';

const features = [
    {
        title: 'Increased Efficiency',
        description: 'Eliminate manual bottlenecks in KYC workflows. DeepTrack automates document analysis, significantly reducing onboarding times and allowing teams to focus on high-value tasks.'
    },
    {
        title: 'Single Source of Truth',
        description: 'Consolidate KYC verifications into one secure platform. DeepTrack provides a centralized repository for identity checks, ensuring compliance and minimizing redundancies in customer onboarding.'
    }
]

const FinanceUseCase = () => {
  return (
      <div className='space-y-6'>
          <WebinarSection />
          <Navbar />
          <FinanceUseCaseFeatureSection
              useCase='Finance'
              title="Revolutionizing KYC with AI"
              description="Streamline KYC with AI-Driven Precision"
              imageSrc='/deeptrack-revenue-feature-use-case.svg'
          />
          <FeatureHighlight
              title="Impact of AI Detection on Financial Security"
              subtitle='Enhanced Accuracy'
              description="DeepTrack’s AI technology verifies identities with unparalleled precision by detecting forged documents, manipulated images, and synthetic audio in real time. From passports to bank statements, every KYC submission is analyzed at a granular level to ensure authenticity."
              imageSrc='/deeptrackrevenue-feature-highlight.svg'
              imageAlt='Detect Deepfakes'
          />
            <Image
                src="/Vector.svg"
                alt="Blue Lines"
                width={400}
                height={300}
                className="absolute -right-72 md:-right-20 -z-10 customTeal"
            />
          <FeatureInformation
              features={features} title={''} description={''}
          />
          <InformationSection
              subtitle='AI-Powered KYC Verification'
              description="Customizable Verification ModelsStart with AI templates tailored for KYC processes and adjust them to your compliance needs, including regional regulations and industry-specific standards."
              imageSrc='/deeptrack-revenue-usecase-info.svg'
              imageAlt='Deeptrack Verification'
          />
          <UseCaseDetailedInformation
              title='Real-Time Identity Verification'
              subtitle='Instant Document and Audio Analysis'
              description="DeepTrack applies advanced AI models to validate customer-submitted documents and voice-based verifications instantly. Detecting fraudulent documents, mismatched audio, and synthetic identities in real time ensures a smooth and secure onboarding experience."
          />
          <Image
                        src="/Vector.svg"
                        alt="Blue Lines"
                        width={400}
                        height={300}
                        className="absolute teal-200 -z-10 -left-[150px] rotate-[180deg]"
                    />
          <UseCaseFooterBanner
              title="Ensure Compliance with AI"
              imageSrc='/deeptrack-finance-compliance.svg'
              imageAlt='Deeptrack AI Compliance' content={[
                  {
                      subtitle: 'AI eliminates tedious manual KYC checks, ensuring',
                      description: 'faster and more accurate compliance with regulatory requirements. DeepTrack monitors anomalies and provides clear audit trails for every customer submission.',
                  },
                  {
                      subtitle: 'Seamless Integration with KYC Systems',
                      description: 'DeepTrack integrates effortlessly with existing CRM, KYC, and fraud detection tools, ensuring scalable identity verification for financial institutions of all sizes.',
                  },
              ]}          />
          <FinanceUseCaseExtraSection
              title='Ready to Redefine KYC?'
          />
          <Footer />
      </div>
  )
}

export default FinanceUseCase;
