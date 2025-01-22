'use client';

import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';
    
    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`fixed bottom-3 left-0 right-0 bg-white mb-2 text-black rounded-lg shadow-md p-2 md:p-4 z-50
      ${
        cookieConsent != null ? 'hidden' : 'flex'
      } justify-center flex-col items-center w-[95%] mx-auto md:w-[28rem] max-w-xl`}>
      <div className='text-center '>
        <Link href='/'>
          <p className='text-black'>
          We use cookies at DeepTrack to enhance your browsing experience on our page. By continuing to explore our site, you agree to our use of cookies.
          </p>
        </Link>
      </div>
      <div className='mt-2 mb-2'>
        <button
          className='px-4 py-2 mx-2 text-gray-300 rounded-md border border-gray-900 hover:bg-gray-900 hover:text-white'
          onClick={() => setCookieConsent(false)}>
          Decline
        </button>
        <button
          className='bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-opacity-90'
          onClick={() => setCookieConsent(true)}>
          Accept
        </button>
      </div>
    </div>
  );
}