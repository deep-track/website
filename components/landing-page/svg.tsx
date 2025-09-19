import Image from 'next/image'
import React from 'react'

export default function HeroSvg() {
  return (
    <div className='relative mt-6'>
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>
        <Image data-aos='fade-in' src={'/deeptrack-security.svg'} className='w-full m-auto grayscale ' height={100} width={100} alt='security image tag' />
    </div>
  )
}
