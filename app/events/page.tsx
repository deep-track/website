'use-client';
import React from 'react'
import Image from 'next/image';
import ExtraSection from '@/components/landing-page/extra-section'
import Footer from '@/components/landing-page/footer'
import { Navbar } from '@/components/landing-page/navbar'
import BlogFeatureSection from '@/components/layout/BlogFeatureSection'
import ExploreSection from '@/components/layout/Explore'
import BlogBanner from '@/components/layout/BlogBanner';

const Events = () => {
  return (
    <div className="space-y-6">
      {/* <WebinarSection />  */}
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

      {/* 🚀 New Section for Upcoming Events */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <Image
              src="/events/event1.jpg"   // <-- Rename WhatsApp image to this in /public/events/
              alt="Deeptrack Event Poster 1"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="w-full">
            <Image
              src="/events/event2.jpg"   // <-- Rename second WhatsApp image to this in /public/events/
              alt="Deeptrack Event Poster 2"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>

     
      </section>

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
