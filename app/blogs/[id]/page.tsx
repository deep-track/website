'use client';
import React from 'react';
import {Navbar} from '@/components/landing-page/navbar';
import Footer from '@/components/landing-page/footer';
import ExtraSection from '@/components/landing-page/extra-section';
import WebinarSection from '@/components/landing-page/webinar-section';
import TheStateOfAI from '@/components/blogsBody/theStateOfAI';

const DisplayBlog = () => {
  return<>
  {/* <WebinarSection/> will be added later on */}
  <Navbar/>
  <TheStateOfAI/>
  <ExtraSection/>
  <Footer/>
  </>
};

export default DisplayBlog;
