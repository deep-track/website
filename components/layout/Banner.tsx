import React from 'react'
import { BannerCard } from '../cards/bannerCard';

interface Banner {
    icon: string;
    title: string;
    description: string;
}

interface BannerProps {
    banner: Banner[];
}

const Banner = ({
    banner
}: BannerProps) => {
    return (
        <>
            <section className="py-10 max-w-7xl md:mx-auto p-6">
                <h2 className="text-center font-semibold lg:text-5xl sm:text-2xl mb-20">
                    See what’s real
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full h-auto">
                    {banner.map((item) => (
                        <BannerCard
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>
            <div className='bg-customTeal max-w-7xl mx-auto mt-4 lg:mt-6' style={{ height: '1px' }} />
        </>
    )
}

export default Banner
