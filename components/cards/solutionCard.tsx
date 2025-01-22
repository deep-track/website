import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link';


interface Solution {
  title: string
  description: string
  learnMoreUrl: string
}
export const SolutionCard = ({ title, description, learnMoreUrl }: Solution) => {
  return (
    <Card data-aos="fade-up" className="space-y-4 bg-card-gradient flex flex-col justify-between border border-customTeal max-w-[30rem] text-white">
      <CardHeader>
        <CardTitle><h1 className="text-2xl w-max border border-customTeal bg-[#1E1E1E] py-2 px-5 rounded-md ">{title}</h1></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant={'ghost'} className="flex ">
          {learnMoreUrl && learnMoreUrl !== '#' ? (
            <Link href={learnMoreUrl}>
              <span className="text-gray-400 hover:underline hover:text-blue-600 cursor-pointer">
                Learn More
              </span>
            </Link>
          ) : (
            <span className="text-gray-400 cursor-not-allowed">Learn More</span>
          )}
          <ArrowUpRight className="text-customTeal" />
        </Button>
      </CardFooter>
    </Card>
  );
};