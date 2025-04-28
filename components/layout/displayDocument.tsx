'use client';

import DocumentCard from '@/components/cards/documentCard';

interface DisplayDocumentsProps {
  handleDownload: (documentPath: string, fileName: string) => void;
  validToken: boolean;
}

const documents = [
  {
    title: 'Pitch Deck',
    description: 'Download the pitchDeck.',
    documentPath: '/files/deeptrackPitchDeck.pdf',
    fileName: 'deeptrackPitchDeck.pdf',
  },
  {
    title: 'Cap Table',
    description: 'Download the Cap Table.',
    documentPath: '/files/deeptrackCapTableUpdated.pdf',
    fileName: 'deeptrackCapTableUpdated.pdf',
  },
  {
    title: 'Competitor',
    description: 'Download the Competitor analysis',
    documentPath: '/files/deeptrackCompetitor.xlsx',
    fileName: 'deeptrackCompetitor.xlsx',
  },
];

export default function DisplayDocuments({ handleDownload, validToken }: DisplayDocumentsProps) {
  if (!validToken) {
    return null; // don't render anything if token is invalid
  }

  return (
    <div className="flex flex-col items-center space-y-12 px-4">
      {/* Wider container for cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {documents.map((doc, index) => (
          <DocumentCard
            key={index}
            title={doc.title}
            description={doc.description}
            documentPath={doc.documentPath}
            fileName={doc.fileName}
            handleDownload={handleDownload}
          />
        ))}
      </div>
    </div>
  );
}
