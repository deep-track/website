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
import Head from 'next/head';

const features = [
    {
        title: 'Increased Efficiency',
        description: 'In high-stakes environments, misinformation can spread rapidly. Our advanced deepfake detection AI delivers enterprise deepfake detection with high-efficiency verification by automatically analyzing claims, detecting fake news and manipulated media, and ensuring only accurate, trustworthy content is shared — keeping your audience confidently informed and engaged. This AI-powered deepfake detection serves as your comprehensive deepfake monitoring solution.'
    },
    {
        title: 'Single Source of Truth',
        description: 'Centralize all content verification efforts with DeepTrack\'s secure platform, featuring our advanced deepfake authentication system where every validated media piece is archived and accessible for transparency and accountability. This deepfake verification tool ensures complete media authenticity solutions for news organizations.'
    }
]

const MediaUseCase = () => {
  return (
    <>
      <Head>
        <title>Deepfake Detection Software & AI Content Verification for Media | DeepTrack</title>
        <meta 
          name="description" 
          content="Advanced deepfake detection AI and content verification tools for media professionals. Detect manipulated media, prevent misinformation, and ensure content credibility with our enterprise deepfake detection solution." 
        />
        <meta 
          name="keywords" 
          content="deepfake detection, deepfake detector, deepfake detection software, deepfake identification tool, deepfake detection AI, deepfake detection solution, best deepfake detection, AI deepfake detector, deepfake verification tool, detect deepfakes online, enterprise deepfake detection, video deepfake detector, deepfake image detection, deepfake prevention software, detect manipulated media, deepfake analysis tool, deepfake authentication, AI-powered deepfake detection, deepfake scam protection, deepfake monitoring solution, deepfake detection for media, deepfake protection for journalists, AI news verification tools, deepfake misinformation detection, tools for fighting fake news, deepfake verification for journalists, detecting fake videos in news, deepfake threat to journalism, media authenticity solutions, AI content verification, detect fake interviews AI, deepfake risk for news outlets, fact-checking with AI, news verification technology, AI journalism tools 2025, authenticity tools for media, deepfake detection for publishers, how to stop misinformation with AI, deepfake news prevention, fake video detection for newsrooms"
        />
        <meta property="og:title" content="Deepfake Detection & AI Content Verification for Media Professionals" />
        <meta property="og:description" content="Comprehensive deepfake detection software and AI-powered content verification tools to protect media credibility and combat misinformation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/use-cases/media" />
      </Head>
      
      <div className='space-y-6'>
          {/* <WebinarSection />  will be added later*/}
          <Navbar />
          <MediaUseCaseFeatureSection
              useCase='Media'
              title="Advanced Deepfake Detection for Content Credibility"
              description="AI-Powered Deepfake Detection Software & Content Verification"
              imageSrc='/deeptrack-media-use-case.svg'
          />
          <FeatureHighlight
              title="Enterprise Deepfake Detection for Media Security"
              subtitle='AI-Powered Deepfake Detection (Using C2PA)'
              description="DeepTrack's advanced deepfake detection AI technology detects manipulated images, deepfake videos, and AI-generated text with precision, ensuring only authentic content is published. Our comprehensive deepfake detection solution serves as the ultimate deepfake verification tool for newsrooms, providing robust deepfake scam protection and deepfake authentication capabilities. From user-generated submissions to breaking news footage, our deepfake analysis tool guarantees content credibility at every stage."
              imageSrc='/deeptrack-media-usecase-highlight.svg'
              imageAlt='AI Deepfake Detector - Detect Deepfakes Online'
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
              subtitle='Real-Time Fact Checking & Deepfake Detection'
              description="Instant Media Authentication & Deepfake Prevention - Monitor and validate media content in real time using DeepTrack's advanced deepfake detection AI. Our video deepfake detector and deepfake image detection capabilities ensure that false or misleading information never makes it to the audience. This deepfake monitoring solution provides essential deepfake protection for journalists and news verification technology for modern newsrooms."
              imageSrc='/deeptrack-usecase-info-section.svg'
              imageAlt='Deepfake Detection Software - AI Content Verification'
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
                      subtitle: 'Proactive Integrity Checks & Deepfake Prevention',
                      description: 'deeptrack automates the review process with advanced deepfake detection software, flagging discrepancies and providing clear audit trails for verified content. Our deepfake identification tool ensures long-term credibility and trust with audiences while providing comprehensive deepfake misinformation detection for publishers.',
                  },
                  {
                      subtitle: 'Advanced Deepfake Monitoring Solution',
                      description: 'Keep track of brand mentions, keywords, and trending topics with our deepfake monitoring solution, so you can spot potential risks early and act before a small issue turns into a major crisis. Our tools for fighting fake news include sophisticated deepfake threat detection for journalism and AI news verification tools that help stop misinformation with AI.'

                  },
              ]}
              imageSrc='/deeptrack-transparent-monitoring.svg'
              imageAlt='Enterprise Deepfake Detection & AI Compliance' 
              title='AI-Powered Social Media Monitoring & Deepfake Detection'       
          />
          <MediaUseCaseExtraSection
              title='Ready to Enhance Your Media Security with Advanced Deepfake Detection?'
          />
          <Footer />
      </div>
    </>
  )
}

export default MediaUseCase;