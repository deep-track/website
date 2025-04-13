'use client';

import { useState } from 'react';
import {
  ShieldCheck,
  LockKeyhole,
  DatabaseZap,
  MessageSquareCode,
} from 'lucide-react';

const talkDataPoints = [
  { icon: ShieldCheck, label: 'SOC2 Compliance' },
  { icon: LockKeyhole, label: 'GDPR' },
  { icon: DatabaseZap, label: 'Kenya Data Protection' },
  { icon: MessageSquareCode, label: 'Compute on Device' },
  { icon: ShieldCheck, label: 'Privacy Secure' },
];

export default function TalkDataSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative text-base text-gray-400 hover:text-white transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Trigger */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <MessageSquareCode className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
        <span>TalkData</span>
      </div>

      {/* Dropdown BELOW the trigger */}
      {hovered && (
        <div className="absolute left-0 top-full mt-2 bg-black border border-gray-800 rounded-md shadow-lg w-64 z-50">
          <div className="flex flex-col py-2">
            {talkDataPoints.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                <Icon className="w-4 h-4 text-[#13dfde]" />
                <span className="text-sm text-gray-400 hover:text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
