'use-client';

import React from 'react'
import Image from 'next/image';
import ExtraSection from '@/components/landing-page/extra-section'
import Footer from '@/components/landing-page/footer'
import { Navbar } from '@/components/landing-page/navbar'
import ExploreSection from '@/components/layout/Explore'
import WebinarSection from '@/components/landing-page/webinar-section';
import ExecutiveShielding from '@/components/layout/executiveUseCase';
import Head from 'next/head';

const Events = () => {
  return (
    <>
      <Head>
        <title>Executive Identity Shielding & CEO Deepfake Protection | DeepTrack</title>
        <meta 
          name="description" 
          content="Protect executives from deepfake attacks with AI-powered identity shielding. Prevent CEO fraud, detect synthetic media threats, and secure corporate communications with enterprise-grade deepfake protection." 
        />
        <meta 
          name="keywords" 
          content="executive identity shielding, CEO deepfake protection, business deepfake protection, deepfake attacks on CEOs, voice deepfake fraud detection, deepfake email scam prevention, protect brand from deepfakes, corporate communication protection, enterprise deepfake detection, business authenticity verification, AI-powered enterprise security, synthetic media fraud detection, corporate deepfake defense, deepfake corporate security, business deepfake risks 2025, detect deepfake scams, enterprise media security, deepfake scam protection, deepfake monitoring solution, AI deepfake detector"
        />
        <meta property="og:title" content="Executive Identity Shielding & CEO Deepfake Protection Solutions" />
        <meta property="og:description" content="Advanced AI protection against deepfake attacks targeting executives and corporate leadership. Secure your organization with enterprise-grade identity shielding." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.deeptrack.io/executive-identity-shielding" />
      </Head>
    
      <div className="space-y-6">
        {/* <WebinarSection />  */}
        <Navbar />
    
        {/* <Image
          src="/Vector.svg"
          alt="Blue Lines"
          width={400}
          height={300}
          className="absolute -right-72  md:-right-10 -z-10 customTeal"
        /> */}
       
        <ExecutiveShielding />
       
        <div>                
          <ExtraSection />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Events