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
import Head from 'next/head';

const features = [
    {
        title: 'Increased Efficiency in Fraud Detection',
        description: 'Eliminate manual bottlenecks in KYC workflows with advanced deepfake fraud detection. DeepTrack automates document analysis and synthetic media fraud detection, significantly reducing onboarding times and allowing teams to focus on high-value security tasks while preventing deepfake wire fraud.'
    },
    {
        title: 'Single Source of Truth for Financial Security',
        description: 'Consolidate KYC verifications and deepfake scam prevention into one secure platform. DeepTrack provides a centralized repository for identity checks and business authenticity verification, ensuring compliance and minimizing redundancies in customer onboarding while protecting against deepfake corporate security threats.'
    }
]

const FinanceUseCase = () => {
  return (
    <>
      <Head>
        <title>Deepfake Fraud Detection & AI KYC Verification for Finance | DeepTrack</title>
        <meta 
          name="description" 
          content="Enterprise deepfake fraud detection and AI-powered KYC verification for financial institutions. Prevent deepfake scams, detect synthetic media fraud, and secure financial transactions with advanced AI technology." 
        />
        <meta 
          name="keywords" 
          content="deepfake fraud detection, deepfake scams in finance, business deepfake protection, deepfake risk for enterprises, deepfake corporate security, deepfake attacks on CEOs, voice deepfake fraud detection, deepfake email scam prevention, protect brand from deepfakes, business authenticity verification, enterprise media security, AI fraud detection tools, preventing deepfake wire fraud, corporate deepfake defense, deepfake detection in fintech, AI-powered enterprise security, synthetic media fraud detection, business deepfake risks 2025, detect deepfake scams, corporate communication protection, deepfake detection Kenya, enterprise deepfake detection Kenya, deepfake fraud detection Kenya, business deepfake protection Nairobi, AI tools for fake video detection Africa"
        />
        <meta property="og:title" content="AI Deepfake Fraud Detection & KYC Verification for Financial Security" />
        <meta property="og:description" content="Protect your financial institution from deepfake scams with advanced AI detection and automated KYC verification solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.deeptrack.io/finance-use-case" />
      </Head>
      
      <div className='space-y-6'>
          {/* <WebinarSection /> will be added later*/}
          <Navbar />
          <FinanceUseCaseFeatureSection
              useCase='Finance'
              title="AI-Powered Deepfake Fraud Detection for Financial Security"
              description="Advanced KYC Verification with Deepfake Scam Protection"
              imageSrc='/deeptrack-revenue-feature-use-case.svg'
          />
          <FeatureHighlight
              title="Enterprise Deepfake Fraud Detection for Financial Security"
              subtitle='AI-Powered Synthetic Media Detection'
              description="DeepTrack's advanced deepfake detection AI technology verifies identities with unparalleled precision by detecting forged documents, manipulated images, synthetic audio, and voice deepfake fraud in real time. From passports to bank statements, every KYC submission is analyzed at a granular level to ensure authenticity and prevent deepfake wire fraud. Our enterprise-grade deepfake detection in fintech provides comprehensive protection against evolving synthetic media threats."
              imageSrc='/deeptrackrevenue-feature-highlight.svg'
              imageAlt='AI Deepfake Fraud Detection for Financial Security'
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
              subtitle='AI-Powered KYC Verification with Deepfake Protection'
              description="Customizable Verification Models with Business Deepfake Protection - Start with AI templates tailored for KYC processes and adjust them to your compliance needs, including regional regulations and industry-specific standards. Our deepfake corporate security solutions integrate seamlessly with your existing fraud detection systems to provide comprehensive enterprise media security."
              imageSrc='/deeptrack-revenue-usecase-info.svg'
              imageAlt='AI Fraud Detection Tools for KYC Verification'
          />
          <UseCaseDetailedInformation
              title='Real-Time Identity Verification with Deepfake Detection'
              subtitle='Instant Document and Audio Analysis for Fraud Prevention'
              description="DeepTrack applies advanced AI models to validate customer-submitted documents and voice-based verifications instantly while detecting deepfake scams. Detecting fraudulent documents, mismatched audio, synthetic identities, and voice deepfake fraud in real time ensures a smooth and secure onboarding experience. Our corporate deepfake defense system provides continuous monitoring against emerging threats in the financial sector."
          />
          
          <Image
              src="/Vector.svg"
              alt="Blue Lines"
              width={400}
              height={300}
              className="absolute teal-200 -z-10 -left-[150px] rotate-[180deg]"
          />
          <UseCaseFooterBanner
              title="AI-Powered Compliance & Deepfake Scam Protection"
              imageSrc='/deeptrack-finance-compliance.svg'
              imageAlt='Enterprise Deepfake Detection for Financial Compliance'
              content={[
                  {
                      subtitle: 'AI eliminates tedious manual KYC checks while preventing deepfake email scams, ensuring',
                      description: 'faster and more accurate compliance with regulatory requirements. DeepTrack monitors anomalies, detects synthetic media fraud, and provides clear audit trails for every customer submission, offering comprehensive business authenticity verification.',
                  },
                  {
                      subtitle: 'Seamless Integration with KYC and Fraud Detection Systems',
                      description: 'DeepTrack integrates effortlessly with existing CRM, KYC, and fraud detection tools, ensuring scalable identity verification and deepfake protection for financial institutions of all sizes. Our AI-powered enterprise security solutions are specifically designed for deepfake risk management in the finance sector.',
                  },
              ]}          
          />
          <FinanceUseCaseExtraSection
              title='Ready to Enhance Your Financial Security with AI Deepfake Detection?'
          />
          <Footer />
      </div>
    </>
  )
}

export default FinanceUseCase;