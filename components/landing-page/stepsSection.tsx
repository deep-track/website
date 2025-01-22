import { stepsData } from '@/data/data';
import StepCard from '../cards/stepCard';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
const StepsSection = () => {
    return (
        <section className="flex flex-col text-center space-y-4 h-80 my-20">
            <Image
        src="/Vector.svg"
        alt="Blue Lines"
        width={400}
        height={300}
        className="absolute -right-72 md:-right-20 -z-10 customTeal"
      />
            <h4 className="lg:mb-5 sm:mb-2 font-extrabold lg:text-4xl sm:text-2xl p-4">All in One Deepfake Detection</h4>
            <div className='relative max-w-7xl m-auto'>
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10"></div>
            <Marquee
            pauseOnHover
            pauseOnClick
            gradient={false}
            className='w-full m-auto'
            >
                {stepsData.map(step => <StepCard key={step.id} stepDetails={step} />)}
            </Marquee >
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10"></div>
            </div>
        </section>
    )
}

export default StepsSection;