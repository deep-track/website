import React from 'react'

interface FeatureSectionProps {
    title: string
    description: string
}

const BlogFeatureSection = ({ title, description}: FeatureSectionProps) => {
    return (
        <>
            <section className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto mt-4 min-h-[50vh] p-4">
                {/* Left Section */}
                <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left m-auto space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-semibold">{title}</h1>
                    <p className="text-lg leading-relaxed max-w-lg">
                        {description}
                    </p>
                </div>
            </section>
        </>
    )
}

export default BlogFeatureSection
