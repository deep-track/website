import { ReactNode } from 'react';
import TheStateOfAI from '@/components/blogsBody/theStateOfAI'; // Ensure this import is correct

export interface Feature {
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
    
}

export const features: Feature[] = [
    {
        title: 'The State of AI Fraud Should Alarm Every Enterprise Leader',
        description:
            'Over the past few years, we have seen a drastic rise in the field of AI. Different companies all rallying to see who will emerge to be a superior in this race.',
        image: '/blogs/article-1.png',
        link: '/events/displayBlog',
        category: 'KYC SECURITY',
        
    }
];