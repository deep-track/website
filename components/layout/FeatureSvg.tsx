import Image from 'next/image';

interface FeatureSvgProps {
    imageSrc?: string;
    altText: string;
  }
  
const FeatureSvg = ({ imageSrc = '', altText }: FeatureSvgProps) => {
    return (
      <div className='relative mt-6'>
        {/* The initial image size */}
          {/* <Image data-aos='fade-in' src={imageSrc} className='w-full m-auto' height={100} width={100} alt={altText} /> */}
          <Image data-aos='fade-in' src={imageSrc} className='w-full m-auto' height={400} width={600} alt={altText} />
      </div>
    )
  }

  export default FeatureSvg;