'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DocumentCardProps {
  icon?: string;
  title: string;
  description: string;
  documentPath: string;
  fileName: string;
  handleDownload: (documentPath: string, fileName: string) => void;
}

export default function DocumentCard({
  icon = '📄',
  title,
  description,
  documentPath,
  fileName,
  handleDownload,
}: DocumentCardProps) {
  return (
    <Card
      data-aos="fade-up"
      className="flex flex-col justify-between space-y-4 bg-card-gradient border border-customTeal max-w-[30rem] text-white p-6 rounded-2xl"
    >
      <CardHeader className="text-center space-y-4">
        <CardTitle>
          <h1 className="text-2xl w-max mx-auto border border-customTeal bg-[#1E1E1E] py-2 px-5 rounded-md">
            {title}
          </h1>
        </CardTitle>

        <div className="text-5xl">{icon}</div>
      </CardHeader>

      <CardContent className="flex-1 text-center text-gray-300">
        {description}
      </CardContent>

      <CardFooter className="flex justify-center">
        <Button
          onClick={() => handleDownload(documentPath, fileName)}
          className="w-full bg-customTeal text-black font-semibold transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Download
        </Button>
      </CardFooter>
    </Card>
  );
}
