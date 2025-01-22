import React from 'react'
import HeroSvg from './svg'
import { FlipWords } from '../ui/flip-words'
import { WaitlistButton } from './waiting-list';

export default function Hero() {
    const words = ['Deepfakes','Generated Text', 'Voice Spoofing', 'Disinformation', 'Fraud'];
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
          <WaitlistButton id='demo-btn-home'/>
        </div>
      </div>
      <div className='p-6 lg:mt-12'>
        <HeroSvg />
      </div>
    </section>
  )
}
