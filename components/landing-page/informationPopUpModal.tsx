'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const PopupCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasRegistered = localStorage.getItem('webinarPopupRegistered');

    if (!hasRegistered) {
      setIsOpen(true);
    }
  }, []);

  const handleRegisterClick = () => {
    localStorage.setItem('webinarPopupRegistered', 'true');
    setIsOpen(false);
    // Optionally: redirect
    window.open('/webinar-registration', '_blank');
  };

  if (!isOpen) return null;

  const pulseStyle = `
    @keyframes pulseScale {
      0%,100% { transform: scale(1); }
      50%     { transform: scale(1.08); }
    }
  `;

  const buttonClass =
    'inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold ' +
    'px-6 py-3 rounded-full transition duration-300 ' +
    'animate-[pulseScale_1.6s_ease-in-out_infinite]';

  return (
    <>
      <style jsx>{pulseStyle}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white bg-black/60 rounded-full w-9 h-9 flex items-center justify-center text-xl hover:bg-black/80 z-10"
          >
            &times;
          </button>

          {/* Banner Image */}
          <div className="w-full overflow-hidden rounded-t-2xl">
            <Image
              src="/BANNER-DEEPTRACK.jpg"
              alt="Webinar Banner"
              width={1200}
              height={500}
              className="w-full h-auto object-contain rounded-t-2xl"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
              You're Invited to Our Free Webinar
            </h2>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Discover how deeptrack authenticates media in realtime in an AI-driven world.
              
            </p>

            <button
              onClick={handleRegisterClick}
              className={buttonClass}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupCard;
