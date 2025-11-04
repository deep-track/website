import React from 'react'
import Image from 'next/image'
import { WaitlistButton } from '../landing-page/waiting-list'

interface InsuranceUseCaseFeatureSectionProps {
    useCase: string
    title: string
    description: string
    imageSrc: string
}

const InsuranceUseCaseFeatureSection = ({
    useCase,
    title,
    description,
    imageSrc
}: InsuranceUseCaseFeatureSectionProps) => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div data-aos="fade-right" className="space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-customTeal/20 border border-customTeal text-customTeal text-sm font-medium">
                            {useCase} Use Case
                        </div>
                        
                        <h1 data-aos="fade-right" data-aos-delay="100" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {title}
                        </h1>
                        
                        <p data-aos="fade-right" data-aos-delay="200" className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            {description}
                        </p>

                        <div data-aos="fade-right" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 pt-4">
                            <WaitlistButton id='btn-insurance-hero'/>
                        </div>

                        {/* Stats Section */}
                        <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-2 gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-customTeal">$80B+</div>
                                <div className="text-sm text-gray-400 mt-2">Annual Fraud Prevented</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-customTeal">99%</div>
                                <div className="text-sm text-gray-400 mt-2">Detection Accuracy</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div data-aos="fade-left" className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-customTeal to-blue-500 rounded-2xl blur-lg opacity-30"></div>
                            <Image
                                src={imageSrc}
                                alt="Insurance Fraud Detection AI"
                                width={600}
                                height={500}
                                className="relative rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 w-4 h-4 bg-customTeal rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-cyan-300 rounded-full opacity-50 animate-ping"></div>
        </section>
    )
}

export default InsuranceUseCaseFeatureSection