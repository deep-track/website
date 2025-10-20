'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Search,
  Newspaper,
  EyeOff,
  UserCheck,
  ArrowRight,
} from 'lucide-react';

const leadership = [
  {
    name: 'Bryan Koyundi',
    title: 'Founder',
    img: '/bryan.jpg',
    link: "https://www.linkedin.com/in/bryane-fundraising-to-build-deeptrack-6a215a282"
  },
  {
    name: 'Isaak Hayes',
    title: 'Product Strategy & User Experience',
    img: '/hayes.jpg',
    link: "https://www.linkedin.com/in/isaakhayes/",
  },
  {
    name: 'Russel Okoth',
    title: 'Principal Cybersecurity advisor and Privacy',
    img: '/russell.jpg',
    link: "https://www.linkedin.com/in/russellokoth/",
  },
  {
    name: 'Sammy Deprez',
    title: 'Pricipal Advisor on AI and Automation',
    img: '/sammy.jpg',
    link: "https://www.linkedin.com/in/sammydeprez/",
  },
  {
    name: 'Njoki Kamau',
    title: 'Principal Attorney, deeptrack',
    img: '/kamau.jpg',
    link: "https://www.linkedin.com/in/njoki-kamau-mbugua-98441775/",
  },
  {
    name: 'MauriceOyundi',
    title: 'Advisor, Enterprise Technology & Public Sector Solutions',
    img: '/maurice.jpg',
    link: "https://www.linkedin.com/in/maurice-oyundi-50bb7119/"
  },
  {
    name: 'Ian Lumbasio',
    title: 'Advisor, Legal, Transactions & Venture Capital',
    img: '/ian.jpeg',
    link: "https://ke.linkedin.com/in/ian-lumbasio"
  },
   {
    name: 'Brenda Gentry',
    title: 'Advisor',
    img: '/brenda.jpg',
    link: "https://www.linkedin.com/in/brenda-gentry-4b56b087/"
  },
];

const productStack = [
  {
    name: 'deeptrack Foundry',
    icon: ShieldCheck,
    color: 'text-[#03697a]',
    desc: 'Detects insurance fraud, laundering, and policy collusion',
    img: '/images/company/foundry.png',
  },
  {
    name: 'deeptrack Gotham',
    icon: EyeOff,
    color: 'text-[#03697a]',
    desc: 'Enterprise-grade deepfake detection for media, legal, and public sector',
    img: '/images/company/gotham.png',
  },
  {
    name: 'deeptrack Atlas',
    icon: Newspaper,
    color: 'text-[#03697a]',
    desc: 'Verifies media in real time, built for journalists and fact-checkers',
    img: '/images/company/atlas.png',
  },
  {
    name: 'deeptrack Sentinel',
    icon: UserCheck,
    color: 'text-[#03697a]',
    desc: 'AI-powered KYC/KYB compliance for financial services',
    img: '/images/company/sentinel.png',
  },
  {
    name: 'deeptrack Mirror',
    icon: Search,
    color: 'text-[#03697a]',
    desc: 'Shields public figures from deepfake identity attacks',
    img: '/images/company/mirror.png',
  },
];

export default function CompanyCultureAndLeadership() {
  return (
    <main className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 py-12 max-w-7xl mx-auto space-y-16">
      {/* Decorative elements */}
      <Image
        src="/Vector.svg"
        alt="Decorative lines"
        width={400}
        height={300}
        className="absolute right-0 -z-10 opacity-30 rotate-90"
      />
      <Image
        src="/Vector.svg"
        alt="Decorative lines"
        width={400}
        height={300}
        className="absolute left-0 -z-10 opacity-30 -rotate-90"
      />

      {/* Company & Culture */}
      <section className="flex flex-col lg:flex-row items-center gap-12 pt-6">
        <div className="lg:hidden w-full">
          <Image
            src="/culture.jpg"
            alt="Team Culture"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl mb-6"
            priority
          />
        </div>
        
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-[#03697a] bg-clip-text text-transparent">
            Company <span className="text-[#03697a]">&</span> Culture
          </h1>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              We're engineers, researchers, and realists securing reality in an AI-shaped world.
              At <span className="text-white font-medium">deeptrack</span>, we build active defenses against AI threats.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded in 2024 in Kenya, we're Africa's first verification-focused AI company with a global mission to establish truth infrastructure across critical sectors.
            </p>
          </div>
        </div>
        
        <div className="hidden lg:block flex-1">
          <Image
            src="/culture.jpg"
            alt="Team Culture"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-xl shadow-[#03697a]/20"
            priority
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 px-4 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl border border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="space-y-6 border border-[#03697a] rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#03697a]/20">
                <ShieldCheck className="w-8 h-8 text-[#03697a]" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-[#03697a] bg-clip-text text-transparent">Our Mission</h2>
            </div>
            <p className="text-xl italic text-[#03697a]">
              Machine-Verified Truth as Standard
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="font-medium text-white">deeptrack</span> protects high-trust sectors from AI-generated fraud and misinformation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We build forensic-grade platforms to detect deepfakes, trace laundering behavior, and verify content before it causes harm.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-6 border border-[#03697a] rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#03697a]/20">
                <EyeOff className="w-8 h-8 text-[#03697a]" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-[#03697a] bg-clip-text text-transparent">Our Vision</h2>
            </div>
            <p className="text-xl italic text-[#03697a]">
              Deception Has Nowhere to Hide
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe trust should be machine-readable, and every system that handles sensitive data should have built-in defense.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="font-medium text-white">deeptrack</span> is building privacy-first platforms to secure digital ecosystems through verifiability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Stack */}
      <section className="py-12 px-4 bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-white to-[#03697a] bg-clip-text text-transparent">
              When Detection Fell Short
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            <span className="text-[#03697a] font-medium">deeptrack</span> was born out of necessity when AI threats stopped being theoretical. We built infrastructure from the ground up to protect truth and trust.
          </p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {productStack.map(({ name, icon: Icon, desc, }) => (
              <div
                key={name}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-6 transition-all hover:border-[#03697a] hover:shadow-lg hover:shadow-[#03697a]/20 group"
              >
                <div className="flex flex-col items-center text-center">
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-6 h-6 text-[#03697a] group-hover:text-white transition-colors" />
                    <h3 className="text-xl font-bold text-white">{name}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-base text-gray-400 mt-12 max-w-2xl mx-auto text-center border-t border-gray-800 pt-6 leading-relaxed">
            Each product is purpose-built, regulator-aware, and battle-tested in African and global environments where truth is under pressure.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#03697a] bg-clip-text text-transparent">
              Company Leadership
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Meet the people leading <span className="text-white font-medium">deeptrack</span>'s mission to protect truth in the AI age.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {leadership.map(({ name, title, img, link }) => (
            <div
              key={name}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center transition-all hover:border-[#03697a] hover:shadow-lg hover:shadow-[#03697a]/20"
            >
              <div className="w-32 h-32 relative mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="rounded-full object-cover border-2 border-gray-600 group-hover:border-[#03697a] transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{title}</p>
              <a 
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#03697a] to-teal-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-[#03697a]/30"
              >
                View Profile
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}