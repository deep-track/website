import React from 'react'
import Image from 'next/image';
import { Navbar } from '@/components/landing-page/navbar';
import Footer from '@/components/landing-page/footer';
import Banner from '@/components/layout/Banner';
import ExploreSection from '@/components/layout/Explore';
import InfoSection from '@/components/layout/infoSection';
import StatsSection from '@/components/layout/Statistic';
import { WaitlistButton } from '@/components/landing-page/waiting-list';
import TextAuthenticationFeatureSection from '@/components/layout/TextFeatureSection';
import WebinarSection from '@/components/landing-page/webinar-section';
import Head from 'next/head';

const TextDetection = () => {
  return (
    <>
      <Head>
        <title>AI Text Detection & Synthetic Content Analysis Software | DeepTrack</title>
        <meta 
          name="description" 
          content="Advanced AI text detection and synthetic content analysis for global enterprises. Detect AI-generated text, identify manipulated content, and prevent misinformation with enterprise-grade accuracy." 
        />
        <meta 
          name="keywords" 
          content="text detection, AI text detection, synthetic text detection, AI-generated content detection, text authentication, content verification, fake news detection, misinformation detection, AI writing detection, text analysis AI, content authenticity, text forensics, AI content identification, synthetic media detection, text manipulation detection, AI plagiarism detection, content fraud prevention, text verification software, AI text analysis, deepfake text detection, text detection USA, text detection UK, text detection Canada, text detection Europe, enterprise text verification, business content authentication, corporate text security, AI content monitoring, text fraud detection, phishing detection AI"
        />
        <meta property="og:title" content="AI Text Detection & Synthetic Content Analysis for Global Businesses" />
        <meta property="og:description" content="Detect AI-generated text and synthetic content with advanced analysis. Protect your organization from text-based fraud worldwide." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.deeptrack.io/text-detection" />
      </Head>
    
      <div className="space-y-6">
        {/* <WebinarSection /> */}
        <Navbar />
        <TextAuthenticationFeatureSection
          title="Advanced AI Text Detection & Synthetic Content Analysis"
          description="Global solution detecting AI-generated text, manipulated content, and synthetic writing across all languages and formats"
          imageSrc="/deeptrack-text-authentication.svg"
        />
        <StatsSection
          description="Sophisticated AI-generated text forgeries are becoming increasingly prevalent worldwide, creating significant risks for global businesses and individuals alike. Deeptrack's cutting-edge AI text detection technology identifies synthetic text patterns across multiple languages and writing styles, safeguarding against phishing, fraud, and disinformation-driven manipulation in markets from North America to Europe and Asia."
          statistics={[
            { value: '75%', description: 'of organizations globally report rising threats from AI-generated phishing and disinformation texts across international markets' },
            { value: '60%', description: 'of CEOs worldwide are targeted by AI-generated business emails and synthetic communication attempts' },
          ]}
        />
        <Image
          src="/Vector.svg"
          alt="Blue Lines"
          width={400}
          height={300}
          className="absolute -right-72 md:-right-20 -z-10 customTeal"
        />
        <Banner
          banner={[
            { 
              icon: '/svg-icons/detection.svg', 
              title: 'Advanced Global Text Detection', 
              description: 'Identify AI-generated text with precision across multiple languages, uncovering subtle inconsistencies in style, tone, and syntax for businesses worldwide.' 
            },
            { 
              icon: '/svg-icons/protection.svg', 
              title: 'International Content Fraud Protection', 
              description: 'Safeguard your global business from text-based fraud and phishing attempts by exposing synthetic communication across international markets including USA, UK, Canada, and Europe.' 
            },
            { 
              icon: '/svg-icons/injection.svg', 
              title: 'Stop Global Misinformation', 
              description: 'Detect AI-generated fake news and misinformation before it spreads worldwide, ensuring the credibility of shared content across different regions and languages.' 
            },
            { 
              icon: '/svg-icons/platform.svg', 
              title: 'Global Platform Agnostic', 
              description: 'Easily integrate AI text detection into your international workflows, enhancing security and trust across platforms and regions with multi-language support.' 
            },
          ]}
        />
        <InfoSection
          title="Global DeepTrack Text Authentication Solution"
          description="Deeptrack text authentication leverages advanced multi-layer AI detection to analyze text content with precision for global enterprises. Our technology identifies AI-generated patterns and manipulations, detecting techniques such as GPT-based text synthesis, content spinning, and other forms of synthetic media across diverse languages and writing styles. Every text analysis delivers actionable insights, including the likelihood of AI generation, helping organizations worldwide swiftly identify synthetic alterations. Deeptrack platform also employs explainable AI, offering clear visualizations and detailed feedback to empower users globally in combating text-based fraud and disinformation effectively. Designed to scale internationally, Deeptrack supports everything from processing individual documents to managing billions of text verifications, ensuring flexibility for global businesses of any size. Access our solution through an intuitive web interface or seamlessly integrate it into your international workflows via API."
          imageSrc="/deeptrack-text-authentications.svg"
        />
        <div>
          <ExploreSection
            types={[
              'AI-Generated Content',
              'Synthetic Writing',
              'Text Manipulation',
              'Content Authentication',
              'Plagiarism Detection',
              'Misinformation Analysis',
            ]}
          />
          <section className="bg-card-gradient text-white min-h-[400px] flex items-center w-full py-16 border-y-[1px] border-customTeal">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left column */}
                <div className="space-y-4">
                  <h2 data-aos="fade-up" className="text-5xl md:text-5xl font-bold leading-tight">
                    A Global Holistic
                    <br />
                    Content Authenticity
                    <br />
                    Ecosystem
                  </h2>
                </div>
      
                {/* Right column */}
                <div className="flex flex-col space-y-8">
                  <p className="text-2xl text-gray-300 leading-relaxed">
                    The DeepTrack AI application is not just a tool—it is a global fraud prevention and content authenticity command center serving businesses worldwide
                  </p>
      
                  <div className="w-full max-w-md">
                    <WaitlistButton id='btn-text-authentication-footer'/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default TextDetection;