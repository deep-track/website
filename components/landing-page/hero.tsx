'use client';

import React from 'react'
import HeroSvg from './svg'
import { FlipWords } from '../ui/flip-words'
import { WaitlistButton } from './waiting-list';
import { Button } from '../ui/button';
import { toast } from 'sonner';

export default function Hero() {
    const words = ['Deepfakes','Generated Text', 'Voice Spoofing', 'Disinformation', 'Fraud'];

    const handleDownload = () => {
      const localFileUrl = '/files/white-paper.pdf';

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
    <section className='grid lg:grid-cols-2 sm:grid-col-1 max-w-7xl m-auto mt-4 z-0   min-h-[75vh]'>
      <div className='flex flex-col m-auto p-4'>
        <div className='p-4 space-y-4'>
          <div className="flex items-left flex-col gap-3">
            <h1 className="text-6xl font-semibold">Detect</h1>
            <FlipWords words={words} />
          </div>
          <p className="mt-4 text-lg leading-relaxed max-w-2xl">
          Empower your business, safeguard your government, and defend your media with Africa’s leading deepfake detection platform.
          </p>
            <div className="flex gap-4">
            <WaitlistButton id='demo-btn-home'/>
            <Button
              onClick={handleDownload}
              className="bg-blue-500 text-white px-4 py-4 mt-2 rounded-lg hover:bg-blue-600 transition"
            >
              Download WhitePaper
            </Button>
            </div>
        </div>
      </div>
      <div className='p-6 lg:mt-12'>
        <HeroSvg />
      </div>
    </section>
  )
}
