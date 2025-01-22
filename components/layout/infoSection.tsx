import React from 'react';
import FeatureSvg from './FeatureSvg';

interface InfoSectionProps {
    title: string;
    description: string;
    imageSrc?: string;
}

const InfoSection = ({ title, description, imageSrc }: InfoSectionProps) => {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto mt-4 min-h-[50vh] p-4">
                {/* Title */}
                <div className="col-span-1 lg:col-span-2 mb-4 items-start">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-left leading-snug px-2 lg:px-0">
                        {title}
                    </h1>
                </div>

                {/* Left Section */}
                <div className="flex flex-col justify-center items-center lg:items-start p-6 text-center lg:text-left">
                    <FeatureSvg imageSrc={imageSrc} altText="Information section image" />
                </div>

                {/* Right Section */}
                <div className="flex flex-col justify-center items-center text-justify lg:items-start lg:text-left space-y-6">
                    <p data-aos="fade-up" className="text-base sm:text-lg leading-relaxed max-w-lg">
                        {description}
                    </p>
                </div>
            </section>
        </>
    );
};

export default InfoSection;
