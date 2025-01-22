import React from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/landing-page/navbar'
import FeatureHighlight from '@/components/layout/feature-highlight'
import FeatureInformation from '@/components/layout/useCaseFeatureInformation';
import Footer from '@/components/landing-page/footer'
import InformationSection from '@/components/layout/informationSection'
import UseCaseDetailedInformation from '@/components/layout/useCaseDetailedInformation'
import UseCaseFooterBanner from '@/components/layout/useCaseFooterBanner'
import MediaUseCaseExtraSection from '@/components/layout/MediauseCaseExtraSection'
import MediaUseCaseFeatureSection from '@/components/layout/MediaUseCaseFeatureSection';
import WebinarSection from '@/components/landing-page/webinar-section';

const features = [
    {
        title: 'Increased Efficiency',
        description: 'Streamline content verification by automating the detection of fakes and forgeries. DeepTrack reduces the time spent on manual reviews, allowing journalists to focus on creating impactful stories.'
    },
    {
        title: 'Single Source of Truth',
        description: 'Centralize all content verification efforts with DeepTrack’s secure platform, where every validated media piece is archived and accessible for transparency and accountability.'
    }
]

const MediaUseCase = () => {
  return (
      <div className='space-y-6'>
          <WebinarSection />
          <Navbar />
          <MediaUseCaseFeatureSection
              useCase='Media'
              title="Ensuring Content Credibility"
              description="AI-Driven Content Verification"
              imageSrc='/deeptrack-media-use-case.svg'
          />
          <FeatureHighlight
              title="Impact of AI Detection on Financial Security"
              subtitle='Enhanced Accuracy'
              description="DeepTrack’s AI technology detects manipulated images, deepfake videos, and AI-generated text with precision, ensuring only authentic content is published. From user-generated submissions to breaking news footage, our tools guarantee credibility at every stage."
              imageSrc='/deeptrack-media-usecase-highlight.svg'
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
          {/* <div className="absolute md:right-[10%] md:top-[15%] h-[15%] w-[20%]">
              <div className="relative h-full w-full">
                  <div className="relative h-full w-full" />
                  <div className="relative h-full w-full">
                      <Image
                          src="/feature_vector.svg"
                          alt="Blue Lines"
                          width={400}
                          height={300}
                      />
                  </div>
              </div>
          </div> */}

          <InformationSection
              subtitle='Real-Time Content Validation'
              description="Instant Media AuthenticationMonitor and validate media content in real time using DeepTrack’s advanced AI. From live broadcasts to pre-recorded segments, our system ensures that false or misleading information never makes it to the audience."
              imageSrc='/deeptrack-usecase-info-section.svg'
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
              content={[
                  {
                      subtitle: 'Proactive Integrity Checks',
                      description: 'DeepTrack automates the review process, flagging discrepancies and providing clear audit trails for verified content, ensuring long-term credibility and trust with audiences.',
                  },
                  {
                      subtitle: 'Seamless Integration with Publishing Tools',
                      description: 'Integrate DeepTrack with your newsroom’s content management systems, ensuring a smooth workflow from verification to publication.',
                  },
              ]}
              imageSrc='/deeptrack-transparent-monitoring.svg'
              imageAlt='Deeptrack AI Compliance' title='Transparent Reporting and Monitoring'       />
          <MediaUseCaseExtraSection
              title='Ready to Redefine KYC?'
          />
          <Footer />
    </div>
  )
}

export default MediaUseCase;
