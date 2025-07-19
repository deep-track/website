import React from 'react'
import Image from 'next/image';
import Footer from '@/components/landing-page/footer';
import { Navbar } from '@/components/landing-page/navbar';
import FeatureHighlight from '@/components/layout/feature-highlight';
import UseCaseExtraSection from '@/components/layout/GovernmentuseCaseExtraSection';
import FeatureInformation from '@/components/layout/useCaseFeatureInformation';
import UseCaseFeatureSection from '@/components/layout/GovernmentuseCaseFeatureSection';
import UseCaseInfoSection from '@/components/layout/useCaseInfoSection';
import WebinarSection from '@/components/landing-page/webinar-section';

const features = [
  {
    title: 'Increased Efficiency',
    description: 'Streamline the verification of voter data, election materials, and digital records. DeepTrack reduces response times and helps electoral bodies focus resources on maintaining fair and transparent elections.'
  },
  {
    title: 'Single Source of Truth',
    description: 'DeepTrack centralizes election data and fraud insights into a single platform, enabling secure monitoring and cohesive decision-making across election committees and regulatory bodies.'
  },
  {
    title: 'Real-Time Election Monitoring',
    subtitle: 'Dynamic Election Oversight:',
    description: 'Deploy AI models to monitor voter data and election processes in real time. DeepTrack detects inconsistencies like duplicate votes, suspicious ballot submissions, or tampered election media, enabling immediate action to prevent fraud.'
  }
]

const GovernmentUseCase = () => {
  return (
    <div className='space-y-6'>
      {/* <WebinarSection /> */}
        <Navbar/>
          <UseCaseFeatureSection
              useCase='Government'
              title="Safeguarding Elections with AI"
              description="Enhance Decision-Making with AI"
              imageSrc='/deeptrack-government.svg'
          />
          <FeatureHighlight
              title="Combating Electoral Fraud with Precision"
              subtitle='Enhanced Accuracy'
              description="AI-powered detection ensures accuracy in identifying forged voter registrations, tampered ballot images, and manipulated voting results. By analyzing data patterns and media submissions, DeepTrack eliminates human error in fraud detection."
              imageSrc='/deeptrack-use-case.svg'
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
                <Image
                  src="/Vector.svg"
                  alt="Blue Lines"
                  width={400}
                  height={300}
                  className="absolute teal-200 -z-10 -left-[150px] rotate-[180deg]"
                />
      <UseCaseInfoSection
        content={[
          {
            subtitle: 'Proactive Risk Management',
            description: 'Eliminate manual audits with automated review systems that identify fraud risks in voter data, voting records, and media submissions. AI-generated reports help regulatory bodies address irregularities swiftly.',
          },
          {
            subtitle: 'Seamless Integration with Election Systems',
            description: 'DeepTrack integrates effortlessly with voter databases, digital ballot systems, and other electoral platforms to ensure scalable fraud detection and secure workflows during elections.',
          },
        ]}
        imageSrc='/deeptrack-reporting.svg'
        imageAlt='Deeptrack Reporting' title={''}    />
      <UseCaseExtraSection
        title='Ready to Defend Democracy?'
      />
      <Footer />
    </div>
  )
}

export default GovernmentUseCase;
