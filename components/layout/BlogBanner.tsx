'use client';  // Ensure this is a client component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowRight } from 'react-icons/md';
import { features } from '@/data/blogs';

const categories = [
    'ALL',
    'CYBERSECURITY',
    'KYC SECURITY',
    'LAW ENFORCEMENT',
    'MEDIA VERIFICATION',
    'THREAT INTELLIGENCE',
];

const BlogBanner: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    const filteredFeatures = selectedCategory === 'ALL'
        ? features
        : features.filter((feature) => feature.category === selectedCategory);

    return (
        <div className="py-10 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Category Navigation */}
                <nav className="flex flex-wrap justify-center space-x-4 mb-10 text-sm">
                    {categories.map((category, index) => (
                        <React.Fragment key={category}>
                            <button
                                onClick={() => setSelectedCategory(category)}
                                className={`px-3 py-1 rounded-lg transition-colors ${selectedCategory === category
                                        ? 'bg-customTeal text-gray-700'
                                        : 'text-gray-600 hover:text-customTeal'
                                    }`}
                            >
                                {category}
                            </button>
                            {index < categories.length - 1 && <span className="hidden sm:inline text-gray-400">|</span>}
                        </React.Fragment>
                    ))}
                </nav>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredFeatures.map((feature, id) => (
                        <div
                            data-aos="fade-in"
                            key={id}
                            className="bg-primary rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col">
                                <span className="text-xs text-customTeal font-semibold mb-1">
                                    {feature.category}
                                </span>
                                <h3 className="text-lg font-semibold mb-2 text-gray-200 line-clamp-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                                    {feature.description}
                                </p>
                                
                                {/* Use Next.js <Link> to pass the blog ID */}
                                <Link
                                    href={`/blogs/${id}`}
                                    className="text-customTeal flex items-center mt-auto font-medium hover:underline"
                                >
                                    Read <MdArrowRight size={20} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;
