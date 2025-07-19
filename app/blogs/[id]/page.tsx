// 'use client';
// import React from 'react';
// import {Navbar} from '@/components/landing-page/navbar';
// import Footer from '@/components/landing-page/footer';
// import ExtraSection from '@/components/landing-page/extra-section';
// import WebinarSection from '@/components/landing-page/webinar-section';
// import TheStateOfAI from '@/components/blogsBody/theStateOfAI';

// const DisplayBlog = () => {
//   return<>
//   <WebinarSection/> 
//   <Navbar/>
//   <TheStateOfAI/>
//   <ExtraSection/>
//   <Footer/>
//   </>
// };

// export default DisplayBlog;

'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/landing-page/navbar';
import Footer from '@/components/landing-page/footer';
import ExtraSection from '@/components/landing-page/extra-section';
import WebinarSection from '@/components/landing-page/webinar-section';
import { blogComponents } from '@/components/blogsBody/blogComponents';

const DisplayBlog = () => {
  const params = useParams();
  const blogId = params?.id as string;

  const BlogComponent = blogComponents[blogId];

  return (
    <>
      {/* <WebinarSection /> */}
      <Navbar />
      {BlogComponent ? (
        <BlogComponent />
      ) : (
        <div className="text-center text-lg p-8">Blog not found</div>
      )}
      <ExtraSection />
      <Footer />
    </>
  );
};

export default DisplayBlog;
