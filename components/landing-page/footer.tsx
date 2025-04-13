import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import TalkDataSection from './talkDataSection';


export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Solutions Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <nav className="flex flex-col space-y-4">
              {/* added the dropdown of the talk data section */}
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <TalkDataSection/>
              </Link>
              <Link href="/image-authentication" className="text-gray-400 hover:text-white transition-colors">
                Image Authentication
              </Link>
              <Link href="/audio-authentication" className="text-gray-400 hover:text-white transition-colors">
                Audio Authentication
              </Link>
              <Link href="/text-detection" className="text-gray-400 hover:text-white transition-colors">
                Text Detection
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Disinformation
              </Link>
              
            </nav>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                Blogs
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Developers
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </Link>
            </nav>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                FAQs
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 All Rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <Link target='_blank' href="https://x.com/deeptrck" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link target='_blank' href="https://www.linkedin.com/company/deeptrck/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}