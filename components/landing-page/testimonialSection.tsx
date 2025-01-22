'use client'; // Ensure client-side rendering for Swiper

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules'
import TestimonialCard from '../cards/testimonial-card';

export const dummyTestimonials = [
  {
    text: 'DeepFake has been a game-changer for our institution. The multi-model verification platform has helped us authenticate digital identities and prevent fraud effectively.',
    imageUrl: '/testimonial-1.svg',
    name: 'Benaiah Wepundi',
    role: 'CEO, PaydHQ',
  },
  {
    text: 'I was impressed by the accuracy and reliability of DeepFake\'s synthetic media detection. It gives us confidence in the digital content we interact with.',
    imageUrl: '/testimonial-2.svg',
    name: 'Jane Smith',
    role: 'CIO, Acme Corporation',
  },
  {
    text: 'DeepFake has streamlined our identity verification process and reduced our fraud risk significantly. The platform is easy to integrate and provides valuable insights.',
    imageUrl: '/testimonial-3.svg',
    name: 'Michael Johnson',
    role: 'COO, Fintech Startup',
  },
];
const TestimonialSection = () => {
  return (
    <section className="py-20 mx-auto max-w-7xl overflow-hidden md:px-4">
      <h2 className="text-center text-2xl font-extrabold mb-4 lg:text-4xl ">
        Voices of Urgency
      </h2>
      {/* Decorative Image */}
      <Image
        src="/Vector.svg"
        alt="Blue Lines"
        width={400}
        height={300}
        className="absolute -right-56 md:right-0 -z-10 customTeal"
      />

      {/* Swiper Component */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="testimonial-swiper"
      >
        {dummyTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='flex justify-center items-center h-full'>
              <TestimonialCard testimonial={testimonial} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;

