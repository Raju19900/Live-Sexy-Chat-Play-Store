import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullDescription = `Step aboard Live Sexy Chat, the ultimate live video call entertainment app made for the new generation of Indian users.

Dive into a world of smooth animations, vibrant visuals, and real-time video connections designed for quick sessions, late-night conversations or weekend timepass.

Explore a rich collection of features and experiences with:
• Fast connections and simple controls
• Daily check-ins, missions and streak rewards
• Limited-time events and special offers
• Premium features for active users

Live Sexy Chat is built for the modern era of users: mobile-first, fast, visual and social. Track your activity, unlock new features, customize your profile and enjoy a premium feel without any complicated menus. Whether you're on a short break or chilling at home, Live Sexy Chat keeps the energy high and the experience smooth.

Stay connected, choose your preferences, manage your time and enjoy responsible entertainment with a modern twist.

Disclaimer: This app is intended for adult users (18+) for entertainment purposes only. Please use responsibly and take regular breaks.`;

  const appDetails = [
    { label: 'Version', value: '1.0.0' },
    { label: 'Updated on', value: '22 November 2025' },
    { label: 'Requires Android', value: '5.0+' },
    { label: 'Downloads', value: '1M+' },
    { label: 'Content rating', value: '18+' },
    { label: 'Interactive elements', value: 'Live video calls, In-app purchases' },
    { label: 'Released on', value: '15 January 2025' },
    { label: 'Offered by', value: 'FRND' },
  ];

  return (
    <div className="px-4 py-6 border-t border-gray-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-3"
      >
        <h2 className="text-base sm:text-lg font-normal text-[#202124]">About this app</h2>
        <ChevronRight
          className={`w-5 h-5 text-[#5f6368] transition-transform ${
            isExpanded ? 'rotate-90' : ''
          }`}
        />
      </button>

      {!isExpanded && (
        <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4">
          {appDetails.map((detail, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-[10px] text-[#5f6368]">{detail.label}</p>
              <p className="text-xs text-[#202124] break-words">{detail.value}</p>
            </div>
          ))}
        </div>
      )}

      {isExpanded && (
        <>
          <p className="text-xs text-[#5f6368] leading-relaxed whitespace-pre-line mb-6">
            {fullDescription}
          </p>

          <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4 pt-4 border-t border-gray-200">
            {appDetails.map((detail, index) => (
              <div key={index} className="flex flex-col gap-1">
                <p className="text-[10px] text-[#5f6368]">{detail.label}</p>
                <p className="text-xs text-[#202124] break-words">{detail.value}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}