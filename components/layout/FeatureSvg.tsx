import Image from 'next/image';

interface FeatureSvgProps {
    imageSrc?: string;
    altText: string;
  }
  
const FeatureSvg = ({ imageSrc = '', altText }: FeatureSvgProps) => {
    return (
      <div className='relative mt-6'>
          <Image data-aos='fade-in' src={imageSrc} className='w-full m-auto' height={100} width={100} alt={altText} />
      </div>
    )
  }

  export default FeatureSvg;