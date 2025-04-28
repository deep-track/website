'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DisplayDocuments from '@/components/layout/displayDocument';
import { Navigation } from '@/components/landing-page/navigation';
import BuiltForSection from '@/components/landing-page/builtForSection';
import TestimonialSection from '@/components/landing-page/testimonialSection';
import ExtraSection from '@/components/landing-page/extra-section';
import Footer from '@/components/landing-page/footer';
import { Navbar } from '@/components/landing-page/navbar';

export default function DocumentPage() {
  const [validToken, setValidToken] = useState<boolean | null>(null); // Initially null
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  // Only access searchParams after component is mounted in the browser
  const searchParams = mounted ? useSearchParams() : null;
  const token = mounted ? searchParams?.get('token') : null;

  // Set mounted state to true once the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Skip token validation if not mounted yet
    if (!mounted) return;
    
    async function validateToken() {
      if (!token) {
        setValidToken(false);
        return;
      }

      try {
        const res = await fetch(`/api/validateToken?token=${token}`);

        if (res.ok) {
          setValidToken(true);
        } else {
          setValidToken(false);
        }
      } catch (error) {
        setValidToken(false);
      }
    }

    validateToken();
  }, [token, mounted]);

  const handleDownload = async (documentPath: string, fileName: string) => {
    try {
      const response = await fetch(documentPath, { method: 'GET' });

      if (!response.ok) {
        throw new Error('Failed to download document');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading document:', error);
    }
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* If token is invalid */}
      {validToken === false ? (
        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Your token has expired</h1>
          <p className="text-gray-300 mb-6">Please make a new request to access the document.</p>
          <button
            onClick={handleGoHome}
            className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-300 transition"
          >
            OK
          </button>
        </div>
      ) : validToken === true ? (
        <>
          {/* Normal page if token is valid */}
          <Navbar />

          <div className="flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-5xl mx-auto my-8">
              <div className="text-center mb-8">
              {/* <h1 className="text-4xl font-bold text-white mb-10">deeptrack Documents</h1> */}
              </div>

              <DisplayDocuments handleDownload={handleDownload} validToken={validToken} />
            </div>
          </div>

          <ExtraSection />
          <Footer />
        </>
      ) : (
        // Loading state
        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
          <h1 className="text-2xl font-semibold">Validating your token...</h1>
        </div>
      )}
    </div>
  );
}
