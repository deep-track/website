import React from 'react'
import FeatureSvg from './FeatureSvg'

interface ContentItem {
    subtitle: string;
    description: string;
}

interface UseCaseInfoSectionProps {
    content: ContentItem[];
    title: string
    imageSrc: string
    imageAlt: string
}

const UseCaseInfoSection = ({
    title,
    content,
    imageSrc = '',
    imageAlt
}: UseCaseInfoSectionProps) => {
    return (
        <>
            <section className="max-w-7xl mx-auto mt-4 min-h-[50vh] p-4">
                <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">{title}</h2>
                <div className="grid lg:grid-cols-2 gap-6justify-center">
                    {/* Left Section */}
                    <div
                        data-aos="fade-up"
                        className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left m-auto space-y-6"
                    >
                        {content.map((item, index) => (
                            <div key={index}>
                                <h2 className="text-xl sm:text-xl font-bold m-0">{item.subtitle}:</h2>
                                <p className="leading-relaxed max-w-lg">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div
                        data-aos="fade-up"
                        className="flex justify-center lg:justify-end p-6 mt-2"
                    >
                        <FeatureSvg imageSrc={imageSrc} altText={imageAlt} />
                    </div>
                </div>
            </section>
            <div className='bg-customTeal max-w-7xl mx-auto mt-4' style={{ height: '1px' }} />
            <div className='max-w-7xl mx-auto text-5xl leading-relaxed p-4 justify-center mt-6 pb-6 font-bold text-center'>
                <h1>DeepTrack.io is not just a tool—it’s an authenticity command center</h1>
            </div>
        </>
    )
}

export default UseCaseInfoSection;
