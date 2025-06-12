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
        link: '/blogs/0',
        category: 'KYC SECURITY',
        body: '@/components/blogsBody/theStateOfAI' // Alias to the component
    },
    {
        id: '1',
        title: 'The Age of Coordinated Attacks',
        description:
            'As AI technology continues to advance, the threat of AI-driven fraud grows. This article delves into the rising concerns of AI fraud and its implications for enterprises.',
        image: '/blogs/cordinated-attacks_ai.webp',
        link: '/blogs/1',
        category: 'KYC SECURITY',
        body: '@/components/blogsBody/theAgeOfCordinatedAttack' // Alias to the component
    }
];
