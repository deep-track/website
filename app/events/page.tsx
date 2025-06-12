'use-client';

import React from 'react'
import Image from 'next/image';
import ExtraSection from '@/components/landing-page/extra-section'
import Footer from '@/components/landing-page/footer'
import { Navbar } from '@/components/landing-page/navbar'
import BlogFeatureSection from '@/components/layout/BlogFeatureSection'
import ExploreSection from '@/components/layout/Explore'
import WebinarSection from '@/components/landing-page/webinar-section';
import BlogBanner from '@/components/layout/BlogBanner';

const Events = () => {
  return (
      <div className="space-y-6">
      <WebinarSection /> 
        <Navbar />
        <BlogFeatureSection
              title='Blog & Events'
              description='Insights, thought, industry trends, Security Tips, Deepfake news, nerdy stuff, it’s all here.'
        />
         <Image
                src="/Vector.svg"
                alt="Blue Lines"
                width={400}
                height={300}
                className="absolute -right-72  md:-right-10 -z-10 customTeal"
              />
        <BlogBanner/>
        {/* <div className="flex items-center justify-center rounded-lg">
          <p className="text-gray-500">No Blogs Yet</p>
        </div> */}
        {/* <WebinarInfoSection /> */}
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
                <ExtraSection />
              </div>
              <Footer />
        </div>
  )
}

export default Events
