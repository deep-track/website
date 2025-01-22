'use client'

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { MdArrowRight } from 'react-icons/md';

const features = [
    {
        title: 'CYBERSECURITY',
        description:
            'Sophisticated AI-generated text forgeries are becoming increasingly prevalent, creating significant risks for businesses and individuals alike. Deeptrack\'s cutting-edge AI text detection.',
        image: '/deeptrack-blog-1.png',
        link: '#',
        category: 'CYBERSECURITY'
    },
    {
        title: 'KYC SECURITY',
        description:
            'Sophisticated AI-generated text forgeries are becoming increasingly prevalent, creating significant risks for businesses and individuals alike. Deeptrack\'s cutting-edge AI text detection.',
        image: '/deeptrack-blog-2.png',
        link: '#',
        category: 'KYC SECURITY'
    },
    {
        title: 'MEDIA VERIFICATION',
        description:
            'Sophisticated AI-generated text forgeries are becoming increasingly prevalent, creating significant risks for businesses and individuals alike. Deeptrack\'s cutting-edge AI text detection.',
        image: '/deeptrack-blog-3.png',
        link: '#',
        category: 'MEDIA VERIFICATION'
    },
    {
        title: 'THREAT INTELLIGENCE',
        description:
            'Sophisticated AI-generated text forgeries are becoming increasingly prevalent, creating significant risks for businesses and individuals alike. Deeptrack\'s cutting-edge AI text detection.',
        image: '/deeptrack-blog-4.png',
        link: '#',
        category: 'THREAT INTELLIGENCE'
    },
];

const categories = [
    'ALL',
    'CYBERSECURITY',
    'KYC SECURITY',
    'LAW ENFORCEMENT',
    'MEDIA VERIFICATION',
    'THREAT INTELLIGENCE',
]

const BlogBanner: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    const filteredFeatures = selectedCategory === 'ALL'
        ? features
        : features.filter((feature) => feature.category === selectedCategory);

    return (
        <div className="text-white py-10">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center space-x-4 mb-10 text-sm">
                    {categories.map((category, index) => (
                        <React.Fragment key={category}>
                            <button
                                onClick={() => setSelectedCategory(category)}
                                className={`hover:underline ${
                                    selectedCategory === category ? 'text-customTeal' : ''
                                }`}
                            >
                                {category}
                            </button>
                            {index < categories.length - 1 && <span className="mx-2">|</span>}
                        </React.Fragment>
                    ))}
                </nav>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredFeatures.map((feature, index) => (
                        <div
                            data-aos="fade-in"
                            key={index}
                            className="p-6 rounded-lg shadow-lg"
                        >
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <h3 className="text-lg text-customTeal font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                {feature.description}
                            </p>
                            <a
                                href={feature.link}
                                className="text-customTeal hover:underline text-sm font-medium flex items-center"
                            >
                                Read <MdArrowRight size={20} className="ml-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogBanner
