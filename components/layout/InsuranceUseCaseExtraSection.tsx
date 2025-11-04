import React from 'react'
import { WaitlistButton } from '../landing-page/waiting-list'

interface InsuranceUseCaseExtraSectionProps {
    title: string
}

const InsuranceUseCaseExtraSection = ({title}: InsuranceUseCaseExtraSectionProps) => {
  return (
      <section className="text-white min-h-[400px] max-w-7xl mx-auto mt-4 flex items-center w-full py-16 border-y-[1px] border-customTeal">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left column */}
                  <div data-aos="fade-in" className="space-y-4 h-full pt-10 pb-10 items-center justify-center flex flex-col"
                style={{backgroundImage: 'url(/deeptrack-insurance-ecosystem.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
              >
                <h2 data-aos="fade-up" className="text-5xl md:text-5xl font-bold leading-tight text-center">
                  Complete Fraud
                  <br />
                  Prevention
                  <br />
                  Ecosystem
                </h2>
              </div>
    
              {/* Right column */}
              <div className="flex flex-col space-y-8">
                <h1 data-aos="fade-up" className="text-4xl text-gray-100 font-bold leading-relaxed">
                    {title}
                </h1>
                
                <div data-aos="fade-up" className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-customTeal rounded-full"></div>
                        <p className="text-gray-300">Detect deepfake damage photos & synthetic claims</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-customTeal rounded-full"></div>
                        <p className="text-gray-300">Prevent object reuse & rebroadcast attacks</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-customTeal rounded-full"></div>
                        <p className="text-gray-300">Verify geo-location & metadata authenticity</p>
                    </div>
                </div>
    
                    <div data-aos="fade-up" className="w-full max-w-md">
                  <WaitlistButton id='btn-insurance-footer'/>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default InsuranceUseCaseExtraSection