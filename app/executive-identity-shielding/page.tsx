'use-client';

import React from 'react'
import Image from 'next/image';
import ExtraSection from '@/components/landing-page/extra-section'
import Footer from '@/components/landing-page/footer'
import { Navbar } from '@/components/landing-page/navbar'

import ExploreSection from '@/components/layout/Explore'
import WebinarSection from '@/components/landing-page/webinar-section';
import ExecutiveShielding from '@/components/layout/executiveUseCase';


const Events = () => {
  return (
      <div className="space-y-6">
      <WebinarSection /> 
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
  )
}

export default Events
