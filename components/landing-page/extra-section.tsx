import React from 'react';
import { WaitlistButton } from './waiting-list';

export default function ExtraSection() {
  return (
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
              The deeptrack AI application is not just a tool
              —it is a fraud prevention and media
              authenticity command center
            </p>

            <div className="w-full max-w-md">
              <WaitlistButton id='demo-btn-footer'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}