'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

const webinarData = [
    {
        title: 'Enhancing Fraud Prevention in the Age of AI',
        description:
            'With the surge in synthetic meia and deepfake-driven fraud, ensuring robust KYC processes has never been more critical. This webinar will explore innovative approaches, share industry insights, and demonstrate how Deeptrack\'s AI solution safeguard digital transactions.',
        image:'/webinar-q1.jpeg',
        link: '#'
    }
];

const WebinarInfoSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % webinarData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? webinarData.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentWebinar = webinarData[currentIndex];

    return (
        <section className="py-10 max-w-7xl md:mx-auto p-6">
            <h2 className="text-start font-semibold lg:text-5xl sm:text-2xl mb-20 p-4 border-b-[1px] border-customTeal ">
                Webinar
            </h2>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="relative w-full md:w-1/2 h-64 mb-6 md:mb-0 overflow-hidden">
                    <a href={currentWebinar.link} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={currentWebinar.image}
                                alt="Webinar Image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="bg-green-500 rounded-full p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5.25 6.75l7.5 4.5-7.5 4.5V6.75z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </a>
                </div>

                <div className="md:ml-10 md:w-1/2 text-left">
                    <h3 className="text-lg font-semibold mb-2 text-customTeal">
                        {currentWebinar.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                        {currentWebinar.description}
                    </p>
                    <div className="flex items-center justify-end mt-4">
                        <button
                            onClick={handlePrev}
                            className="text-customTeal hover:underline mr-4"
                        >
                            <MdArrowLeft size={30} className="ml-1 font-bold" />
                        </button>
                        <span className="text-sm text-customTeal mr-2 font-bold">
                            {currentIndex + 1}/{webinarData.length}
                        </span>
                        <button
                            onClick={handleNext}
                            className="text-customTeal hover:underline"
                        >
                            <MdArrowRight size={30} className="ml-1 font-bold" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebinarInfoSection;
