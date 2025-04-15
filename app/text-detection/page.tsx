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

const TextDetection = () => {
  return (
      <div className="space-y-6">
          {/* <WebinarSection /> */}
          <Navbar />
          <TextAuthenticationFeatureSection
              title="Text Detection"
              description="Detects everything from subtle voice alterations to fully synthetic audio generation"
              imageSrc="/deeptrack-text-authentication.svg"
          />
          <StatsSection
              description="Sophisticated AI-generated text forgeries are becoming increasingly prevalent, creating significant risks for businesses and individuals alike. Deeptrack’s cutting-edge AI text detection technology identifies synthetic text patterns, safeguarding against phishing, fraud, and disinformation-driven manipulation."
              statistics={[
                  { value: '75%', description: 'of organizations report rising threats from AI-generated phishing and disinformation texts' },
                  { value: '60%', description: 'of CEOs Are Targeted by AI-Generated Business Emails' },
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
                  { icon: '/svg-icons/detection.svg', title: 'Advanced Detection', description: 'Identify AI-generated text with precision, uncovering subtle inconsistencies in style, tone, and syntax.' },
                  { icon: '/svg-icons/protection.svg', title: 'Fraud Protection', description: 'Safeguard your business from text-based fraud and phishing attempts by exposing synthetic communication' },
                  { icon: '/svg-icons/injection.svg', title: 'Stop Injection Impersonations', description: 'Detect AI-generated fake news and misinformation before it spreads, ensuring the credibility of shared content.' },
                  { icon: '/svg-icons/platform.svg', title: 'Platform Agnostic', description: 'Easily integrate AI text detection into your workflows, enhancing security and trust across platforms' },
              ]}
          />
          <InfoSection
              title="Deeptrack Text Authentication"
              description="Deeptrack text authentication leverages advanced multi-layer AI detection to analyze texts with precision. Our technology identifies manipulations at the pixel level, detecting techniques such as GAN-based text synthesis, face swapping, and other forms of synthetic media.
          Every text scan delivers actionable insights, including the likelihood of manipulation, helping organizations swiftly identify AI-generated alterations. Deeptrack platform also employs explainable AI, offering clear visualizations and detailed feedback to empower users in combating fraud and disinformation effectively.
          Designed to scale, Deeptrack supports everything from processing a few texts to managing billions, ensuring flexibility for businesses of any size. Access our solution through an intuitive web interface or seamlessly integrate it into your workflows via API."
              imageSrc="/deeptrack-text-authentications.svg"
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
                            <WaitlistButton id='btn-text-authentication-footer'/>
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

export default TextDetection;
