import { IUserStep } from '@/types';
import Image from 'next/image';

const StepCard: React.FC<{ stepDetails: IUserStep }> = ({ stepDetails }) => {
  return (
    <div
      className="flex flex-col gap-4 m-2 w-[380px] h-[180px] items-center border-[1px] border-customTeal bg-card-gradient rounded-md p-4"
    >
      <Image src={stepDetails.image} alt="CapturAI" className="h-8 w-8" width={50} height={50} />
      <h3 className="font-bold text-lg text-white">{stepDetails.title}</h3>
      <p className="text-sm text-gray-200">{stepDetails.paragraph}</p>
    </div>
  );
};

export default StepCard;