import React from 'react'
import FeatureSvg from './FeatureSvg'

interface InformationSectionProps {
    title?: string
    subtitle: string
    description: string
    imageSrc?: string
    imageAlt: string
}

const InformationSection = ({
    title,
    subtitle,
    description,
    imageSrc = '',
    imageAlt
}: InformationSectionProps) => {
    return (
        <>
            <section className="max-w-7xl mx-auto mt-4 min-h-[50vh] p-4">
                <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">{title}</h2>
                <div className="grid lg:grid-cols-2 gap-6justify-center">
                    {/* Left Section */}
                    <div data-aos="fade-up" className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left m-auto space-y-6">
                        <div>
                            <h1 className="text-5xl font-bold mb-6">{subtitle}</h1>
                            <p className="leading-relaxed max-w-lg">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div data-aos="fade-up" className="flex justify-center lg:justify-end p-6 mt-2">
                        <FeatureSvg imageSrc={imageSrc} altText={imageAlt} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default InformationSection;
