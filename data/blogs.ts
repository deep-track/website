export interface Feature {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
    body?: string; // Store the path to the TSX component
}

export const features: Feature[] = [
    {
        id: '0',
        title: 'The State of AI Fraud Should Alarm Every Enterprise Leader',
        description:
            'Over the past few years, we have seen a drastic rise in the field of AI. Different companies all rallying to see who will emerge to be a superior in this race.',
        image: '/blogs/article-1.png',
        link: '/blogs/1',
        category: 'KYC SECURITY',
        body: '@/components/blogsBody/theStateOfAI' // Alias to the component
    }
];
