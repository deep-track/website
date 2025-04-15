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
        description: 'In high-stakes environments, misinformation can spread rapidly. Our advanced Fact-Checking AI delivers'+
        'high-efficiency verification by automatically analyzing claims, detecting fake news,'+
         'and ensuring only accurate, trustworthy content is shared — keeping your audience confidently informed and engaged.'
    },
    {
        title: 'Single Source of Truth',
        description: 'Centralize all content verification efforts with DeepTrack’s secure platform, where every validated media piece is archived and accessible for transparency and accountability.'
    }
]

const MediaUseCase = () => {
  return (
      <div className='space-y-6'>
          {/* <WebinarSection />  will be added later*/}
          <Navbar />
          <MediaUseCaseFeatureSection
              useCase='Media'
              title="Ensuring Content Credibility"
              description="AI-Driven Content Verification"
              imageSrc='/deeptrack-media-use-case.svg'
          />
          <FeatureHighlight
              title="Impact of AI Detection on Financial Security"
              subtitle='Deepfake Detection(Using C2PA)'
              description="deeptrack’s AI technology detects manipulated images, deepfake videos, and AI-generated text with precision, ensuring only authentic content is published. From user-generated submissions to breaking news footage, our tools guarantee credibility at every stage."
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
              subtitle='Real-Time Fact Checking'
              description="Instant Media AuthenticationMonitor and validate media content in real time using deeptrack’s advanced AI. From live broadcasts to pre-recorded segments, our system ensures that false or misleading information never makes it to the audience."
              imageSrc='/deeptrack-usecase-info-section.svg'
              imageAlt='Deeptrack Verification'
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
                      description: 'deeptrack automates the review process, flagging discrepancies and providing clear audit trails for verified content, ensuring long-term credibility and trust with audiences.',
                  },
                  {
                      subtitle: 'Stay Ahead of the Conversation',
                      description: 'Keep track of brand mentions, keywords, and trending topics, so you can spot potential'+
                      'risks early and act before a small issue turns into a major crisis.'

                  },
              ]}
              imageSrc='/deeptrack-transparent-monitoring.svg'
              imageAlt='deeptrack AI Compliance' title='Social Media Monitoring'       />
          <MediaUseCaseExtraSection
              title='Ready to Redefine KYC?'
          />
          <Footer />
    </div>
  )
}

export default MediaUseCase;
