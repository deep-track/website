import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const InsuranceSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black border-y border-customTeal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-customTeal/20 border border-customTeal text-customTeal text-sm font-medium">
              New Use Case
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              AI-Powered Insurance Fraud Prevention
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Combat $80B+ in annual insurance fraud with our advanced deepfake detection and claims verification AI. 
              Detect synthetic claims, manipulated documents, and prevent fraudulent payouts in real-time.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-customTeal rounded-full"></div>
                <span className="text-gray-300">Deepfake damage photo detection</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-customTeal rounded-full"></div>
                <span className="text-gray-300">Object reuse & rebroadcast attack prevention</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-customTeal rounded-full"></div>
                <span className="text-gray-300">Geo-location & metadata verification</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-customTeal rounded-full"></div>
                <span className="text-gray-300">Automated virtual inspections</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/insurance-use-case" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-customTeal hover:bg-cyan-500 transition-colors duration-200"
              >
                Explore Insurance Solutions
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-customTeal text-base font-medium rounded-md text-customTeal hover:bg-customTeal/10 transition-colors duration-200"
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-customTeal to-blue-500 rounded-2xl blur-lg opacity-30"></div>
              <Image
                src="/deeptrack-insurance-preview.svg"
                alt="AI Insurance Fraud Detection"
                width={500}
                height={400}
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-customTeal">$80B+</div>
            <div className="text-sm text-gray-400 mt-2">Annual Fraud Prevented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-customTeal">99%</div>
            <div className="text-sm text-gray-400 mt-2">Detection Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-customTeal">70%</div>
            <div className="text-sm text-gray-400 mt-2">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-customTeal">Real-time</div>
            <div className="text-sm text-gray-400 mt-2">Claims Processing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;