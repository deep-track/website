'use-client';
import React from 'react'
import Image from 'next/image';
import ExtraSection from '@/components/landing-page/extra-section'
import Footer from '@/components/landing-page/footer'
import { Navbar } from '@/components/landing-page/navbar'
import BlogFeatureSection from '@/components/layout/BlogFeatureSection'
import ExploreSection from '@/components/layout/Explore'
import BlogBanner from '@/components/layout/BlogBanner';
import Head from 'next/head';

const Events = () => {
  return (
    <>
      <Head>
        <title>Deepfake Detection Blog, Events & Industry Insights | DeepTrack</title>
        <meta 
          name="description" 
          content="Stay updated with the latest deepfake detection insights, AI security trends, industry events, and thought leadership from DeepTrack experts worldwide." 
        />
        <meta 
          name="keywords" 
          content="deepfake blog, AI security blog, deepfake detection news, synthetic media insights, AI fraud prevention blog, deepfake events, cybersecurity conferences, AI detection webinars, deepfake industry trends, media authenticity blog, content verification insights, AI security events, deepfake prevention tips, synthetic media news, AI detection technology updates, deepfake research, cybersecurity blog, digital forensics events, AI authentication trends, deepfake detection conferences, media security webinars, AI content verification blog, deepfake case studies, cybersecurity thought leadership, AI security insights"
        />
        <meta property="og:title" content="Deepfake Detection Blog, Events & Industry Insights | DeepTrack" />
        <meta property="og:description" content="Latest deepfake detection insights, AI security trends, and industry events from DeepTrack experts." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.deeptrack.io/events" />
      </Head>
    
      <div className="space-y-6">
        {/* <WebinarSection />  */}
        <Navbar />
        <BlogFeatureSection
          title='Deepfake Detection Blog & Industry Events'
          description='Expert insights, AI security trends, deepfake news, cybersecurity updates, and industry events. Stay informed about synthetic media threats and detection technologies.'
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
          <h2 className="text-3xl font-semibold text-center mb-8">Upcoming Deepfake Detection Events & Conferences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <Image
                src="/events/event1.jpg"
                alt="DeepTrack AI Security Conference - Deepfake Detection & Prevention"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full object-cover"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Global AI Security Summit 2024</h3>
                <p className="text-gray-300 mb-2">Exploring advanced deepfake detection techniques and synthetic media defense strategies</p>
                <p className="text-customTeal">December 15, 2024 | Virtual & On-site</p>
              </div>
            </div>

            <div className="w-full">
              <Image
                src="/events/event2.jpg"
                alt="DeepTrack Workshop - AI Content Verification & Media Authentication"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full object-cover"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Enterprise Deepfake Defense Workshop</h3>
                <p className="text-gray-300 mb-2">Hands-on training for implementing AI detection solutions in business environments</p>
                <p className="text-customTeal">January 20, 2025 | Global Locations</p>
              </div>
            </div>
          </div>

          {/* Additional Event Information */}
          <div className="mt-12 bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Why Attend DeepTrack Events?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-customTeal">Expert Insights</h4>
                <p className="text-gray-300">Learn from industry leaders in AI security and deepfake detection</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-customTeal">Hands-on Training</h4>
                <p className="text-gray-300">Practical sessions on implementing detection technologies</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-customTeal">Networking</h4>
                <p className="text-gray-300">Connect with cybersecurity professionals worldwide</p>
              </div>
            </div>
          </div>
        </section>

        <div>
          <ExploreSection
            types={[
              'AI-Generated Content',
              'Deepfake Detection',
              'Media Authentication',
              'Content Verification',
              'Fraud Prevention',
              'Security Trends',
            ]}
          />
          <ExtraSection />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Events