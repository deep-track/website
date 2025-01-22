import React from 'react'

interface UseCaseDetailedInformationProps {
    title?: string
    subtitle: string
    description: string
}

const UseCaseDetailedInformation = ({
    title,
    subtitle,
    description,
}: UseCaseDetailedInformationProps) => {
    return (
        <>
            <section className="max-w-7xl mx-auto mt-4 p-4 min-h-[30vh]">
                {/* <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">{title}</h2> */}
                <div className="grid lg:grid-cols-2 gap-6justify-center">
                    {/* Left Section */}
                    <div data-aos="fade-up" className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left m-auto space-y-6">
                        <div>
                            <h1 className="text-5xl font-bold mb-6">{title}</h1>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div data-aos="fade-up" className="flex justify-center lg:justify-end p-6 mt-2">
                        <div>
                            <h2 className="text-xl sm:text-xl font-bold m-0">{subtitle}:</h2>
                            <p className="leading-relaxed max-w-lg">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UseCaseDetailedInformation;
