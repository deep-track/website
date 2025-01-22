'use client'

import React from 'react'
import Image from 'next/image';
import Footer from '@/components/landing-page/footer';
import { Navbar } from '@/components/landing-page/navbar'
import Banner from '@/components/layout/Banner';
import FeatureSection from '@/components/layout/featureSection';
import StatsSection from '@/components/layout/Statistic';
import InfoSection from '@/components/layout/infoSection';
import ExploreSection from '@/components/layout/Explore';
import { WaitlistButton } from '@/components/landing-page/waiting-list';
import WebinarSection from '@/components/landing-page/webinar-section';

const ImageAuthenticationPage = () => {
  return (
    <div className="space-y-6">
      <WebinarSection />
      <Navbar />
      <FeatureSection
        title="Image Authentication"
        description="Detects everything from subtle edits to full synthetic generation."
        imageSrc='/deeptrack-image-authentication.svg'
      />
      <StatsSection
        description="Sophisticated AI-generated image forgeries are becoming increasingly accessible and widespread, posing significant risks across industries. Deeptrack advanced multi-layer detection shields you from deepfake-driven fraud, identity theft, and disinformation."
        statistics={[
          { value: '85%', description: 'of organizations globally are vulnerable to deepfake-enabled fraud' },
          { value: '75%', description: 'of African businesses face rising threats from manipulated images and misinformation' },
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
          { icon: '/svg-icons/detection.svg', title: 'Advanced Detection', description: 'Deeptrack leverages cutting-edge AI to identify manipulations at the pixel level, uncover hidden inconsistencies, and provide unparalleled accuracy in detecting deepfake and synthetic media threats.' },
          { icon: '/svg-icons/protection.svg', title: 'Fraud Protection', description: 'By exposing manipulated images, Deeptrack safeguards enterprises from fraud, enhancing security across key sectors such as finance, media, and public administration.' },
          { icon: '/svg-icons/injection.svg', title: 'Stop Injection Impersonations', description: 'Deeptrack enables reliable KYC verification and protects organizations against impersonation threats, helping to secure reputations, maintain trust, and prevent operational risks.' },
          { icon: '/svg-icons/platform.svg', title: 'Platform Agnostic', description: 'Our solution can be integrated into any pre-existing workflow to help organizations comply with regulatory standards, safeguard against disinformation, ensure accurate reporting, and maintain visual content integrity.' },
        ]}
      />
      <InfoSection
        title="Deeptrack Image Authentication"
        description="deeptrack™ image authentication leverages advanced multi-layer AI detection to analyze images with precision. Our technology identifies manipulations at the pixel level, detecting techniques such as GAN-based image synthesis, face swapping, and other forms of synthetic media. Every image scan delivers actionable insights, including the likelihood of manipulation, helping organizations swiftly identify AI-generated alterations. The platform also employs explainable AI, offering clear visualizations and detailed feedback to empower users in combating fraud and disinformation effectively. Designed to scale, deeptrack™ supports everything from processing a few images to managing bulk, ensuring flexibility for businesses of any size with easy access through an intuitive web interface or seamless integration into your workflows via API."
        imageSrc='/deeptrack-image-authentications.svg'
      />
      
      <div>
        <ExploreSection
          types={[
            'Face Swap',
            'AI-Avatar',
            'Synthetic Faces',
            'Lip Sync',
            'AI-Generated Voice',
            'Face Re-enactment',
          ]}
        />
         <section className="bg-card-gradient text-white min-h-[400px] flex items-center w-full py-16 border-y-[1px] border-customTeal">
              <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left column */}
                  <div className="space-y-4">
                    <h2 data-aos="fade-up" className="text-5xl md:text-5xl font-bold leading-tight">
                      A Holistic
                      <br />
                      Authenticity
                      <br />
                      Ecosystem
                    </h2>
                  </div>
        
                  {/* Right column */}
                  <div className="flex flex-col space-y-8">
                    <p className="text-2xl text-gray-300 leading-relaxed">
                      The DeepTrack AI application is not just a tool
                      —it is a fraud prevention and media
                      authenticity command center
                    </p>
        
                    <div className="w-full max-w-md">
                      <WaitlistButton id='btn-image-authentication-footer'/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      </div>
      <Footer />
    </div>
  )
}

export default ImageAuthenticationPage;
