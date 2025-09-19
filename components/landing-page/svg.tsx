import Image from 'next/image'
import React from 'react'

export default function HeroSvg() {
  return (
    <div className="relative mt-6">
      {/* Corner borders */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>

      {/* Base shield image */}
      <Image
        data-aos="fade-in"
        src={'/deeptrack-security.svg'}
        className="w-full m-auto grayscale"
        height={100}
        width={100}
        alt="security image tag"
      />

      {/* Overlay event poster (semi-transparent + clickable) */}
      <a
        href="https://your-link-here.com" // 🔗 replace with your target link
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex justify-center items-center"
      >
        <Image
          src="/events/event2.jpg" // <-- move your uploaded poster to /public/events/ and rename
          alt="Deeptrack Event Poster"
          width={800}
          height={600}
          className="opacity-70 hover:opacity-90 transition rounded-lg cursor-pointer"
        />
      </a>
    </div>
  )
}
