import Image from 'next/image';
import { SolutionCard } from '../cards/solutionCard';

const solutionData = [
  {
    id: 1,
    title: 'Finance',
    description: 'Strengthen your organization\'s defenses against financial threats. Seamlessly review flagged transactions and automate KYC (Know Your Customer) processes to detect fraud faster. Generate detailed compliance reports that meet regulatory standards, ensuring trust and security in your operations.',
    learnMoreUrl: '/finance-use-case'
  },
  // {
  //   id: 2,
  //   title: 'Government',
  //   description: 'Lead the fight against misinformation with advanced tools to identify and thwart campaigns that threaten public discourse. Validate evidence with precision to support informed decision-making and uphold transparency.',
  //   learnMoreUrl: '/government-use-case'
  // },
  {
    id: 3,
    title: 'Media',
    description: 'Maintain trust and credibility by effectively verifying user-generated content. Detect inaccuracies, uphold editorial standards, and ensure your platform remains a reliable source of information for your audience.',
    learnMoreUrl: '/media-use-case'
  }
];

const BuiltForSection = () => {
  return (
    <section className="py-10  max-w-7xl md:mx-auto p-4">
      <h2 className="text-center font-extrabold lg:text-4xl sm:text-2xl mb-20">
        Engineered for What Matters Most.
      </h2>
      <div className="flex flex-wrap gap-10  w-full h-auto justify-center">
        {solutionData.map((solution) => (
          <SolutionCard
            key={solution.id}
            title={solution.title}
            description={solution.description}
            learnMoreUrl={solution.learnMoreUrl}
          />
        ))}

        <Image
          src="/Vector.svg"
          alt="Blue Lines"
          width={400}
          height={300}
          className="absolute teal-200 -z-10 -left-[150px] rotate-[180deg]"
        />
      </div>

      {/* <div className="flex flex-col mt-5 shrink-0 m-auto w-[675px]">
     
          <SolutionCard
            key={3}
            title='Media'
            description='Maintain trust and credibility by effectively verifying user-generated content. Detect inaccuracies, uphold editorial standards, and ensure your platform remains a reliable source of information for your audience.'
            learnMoreUrl=''
          />
   

        
      </div> */}

    </section>
  )
}

export default BuiltForSection;