'use client';

import React from 'react'
import HeroSvg from './svg'
import { FlipWords } from '../ui/flip-words'
import { WaitlistButton } from './waiting-list';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { useAnalytics } from '@/lib/posthog';

export default function Hero() {
  const words = ['Deepfakes','Generated Text', 'Voice Spoofing', 'Disinformation', 'Fraud'];
  const { trackFileDownload, trackButtonClick } = useAnalytics();

  const handleDownload = () => {
    const localFileUrl = '/files/white-paper.pdf';

    // Track the download event
    trackFileDownload('white-paper.pdf', 'pdf');
    trackButtonClick('download_whitepaper', 'hero_section');

    // download whitepaper pdf implementation
    const localLink = document.createElement('a');
    localLink.href = localFileUrl;
    localLink.setAttribute('download', 'white-paper.pdf');
    document.body.appendChild(localLink);
    localLink.click();
    document.body.removeChild(localLink);
    toast.success('Whitepaper downloaded successfully');
  }

  return (
    <section className="grid lg:grid-cols-2 sm:grid-cols-1 max-w-7xl m-auto mt-4 z-0 min-h-[75vh] px-4">
      {/* Left Column */}
      <div className="flex flex-col justify-center p-4">
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-6xl font-semibold">Detect</h1>
            <FlipWords words={words} />
          </div>
          <p className="mt-4 text-lg leading-relaxed max-w-2xl text-gray-300">
            Powering trust worldwide, safeguarding businesses, governments, and media from deepfakes and digital deception.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <WaitlistButton id="demo-btn-home"/>
            <Button
              onClick={() => {
                trackButtonClick('demo_button', 'hero_section');
                handleDownload();
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Download WhitePaper
            </Button>
          </div>
        </div>
      </div>

      {/* Right Column (Shield + Overlay) */}
      <div className="relative p-6 lg:mt-12 flex justify-center items-center">
        <div className="w-full max-w-[600px]">
          <HeroSvg />
        </div>
      </div>
    </section>
  )
}
