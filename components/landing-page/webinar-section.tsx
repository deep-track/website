'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const webinarData = [
    {
        id: 1,
        title: 'Jan 29 Live Webinar: Enhancing Fraud Prevention in the Age of AI',
        learnmore: '/webinar-registration',
    },
]

const WebinarSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % webinarData.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-4 bg-card relative overflow-hidden z-0">
            <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
                <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="text-center text-sm text-[#23C3CB]"
                >
                    <Link href={webinarData[currentIndex].learnmore || '#'} className="flex gap-1 h-auto items-center justify-center">
                        {`${webinarData[currentIndex].title}!`}
                        <span className="text-black" >Register Now</span>
                        <ArrowRight size={16} color={'#000000'} />
                    </Link>
                </motion.h2>
            </AnimatePresence>
            </div>
        </section>
    )
}

export default WebinarSection

