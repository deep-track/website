'use client'

import Footer from '@/components/landing-page/footer'
import { Navbar } from '@/components/landing-page/navbar'
import Banner from '@/components/layout/Banner'
import ExploreSection from '@/components/layout/Explore'
import AudioFeatureSection from '@/components/layout/AudioFeatureSection'
import InfoSection from '@/components/layout/infoSection'
import StatsSection from '@/components/layout/Statistic'
import Image from 'next/image'
import { WaitlistButton } from '@/components/landing-page/waiting-list'
import WebinarSection from '@/components/landing-page/webinar-section'

const AudioAuthenticationPage = () => {
  return (
      <div className="space-y-6">
          <WebinarSection />
          <Navbar />
          <AudioFeatureSection
              title="Audio Authentication"
              description="Detects everything from subtle voice alterations to fully synthetic audio generation "
              imageSrc="/deeptrack-audio-authentication.svg"
          />
          <StatsSection
              description="Sophisticated AI-generated voice forgeries are rapidly advancing, creating new vulnerabilities for businesses and individuals alike. Deeptrack cutting-edge voice authentication technology detects synthetic voice patterns, protecting against identity theft, fraud, and impersonation-driven disinformation."
              statistics={[
                  { value: '90%', description: 'of CEOs Cannot Distinguish Cloned Voices' },
                  { value: '85%', description: 'of Fraudulent Call Attempts Use Cloned Voices' },
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
                  { icon: '/svg-icons/detection.svg', title: 'Advanced Detection', description: 'Leverage AI-powered analysis to detect synthetic voices, uncovering even the most subtle manipulations in pitch, tone, and frequency.”' },
                  { icon: '/svg-icons/protection.svg', title: 'Fraud Protection', description: 'Protect your organization from voice-enabled fraud, securing transactions, communications, and sensitive data.' },
                  { icon: '/svg-icons/injection.svg', title: 'Stop Injection Impersonations', description: 'Detect cloned voices and stop impersonation attempts before they compromise trust or operations' },
                  { icon: '/svg-icons/platform.svg', title: 'Platform Agnostic', description: 'Integrate voice authentication into your workflows effortlessly, ensuring secure and scalable operations across platforms.' },
              ]}
          />
          <InfoSection
              title="Deeptrack Audio Authentication"
              description="Deeptrack audio authentication leverages advanced multi-layer AI detection to analyze audios with precision. Our technology identifies manipulations at the pixel level, detecting techniques such as GAN-based audio synthesis, face swapping, and other forms of synthetic media.
          Every audio scan delivers actionable insights, including the likelihood of manipulation, helping organizations swiftly identify AI-generated alterations. Deeptrack platform also employs explainable AI, offering clear visualizations and detailed feedback to empower users in combating fraud and disinformation effectively.
          Designed to scale, Deeptrack supports everything from processing a few audios to managing billions, ensuring flexibility for businesses of any size. Access our solution through an intuitive web interface or seamlessly integrate it into your workflows via API."
              imageSrc="/deeptrack-audio-authentications.svg"
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
                            <WaitlistButton id='btn-audio-authentication-footer'/>
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

export default AudioAuthenticationPage
