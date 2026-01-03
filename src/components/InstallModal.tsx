import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstallModal({ isOpen, onClose }: InstallModalProps) {
  const [countdown, setCountdown] = useState(3);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCountdown(3);
      setIsDownloading(true);
      
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Start download after countdown
            setTimeout(() => {
              // Replace with your actual APK download URL
              const apkUrl = import.meta.env.VITE_APP_URL;
              window.location.href = apkUrl;
              // Close modal after download starts
              onClose();
            }, 500);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(timer);
        setIsDownloading(false);
      };
    } else {
      // Reset state when modal closes
      setIsDownloading(false);
      setCountdown(3);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center space-y-4">
          {/* App Logo */}
          <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/logo.png" 
              alt="Live Sexy Chat Logo" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900">
            Installing Live Sexy Chat
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600">
            Your download will start automatically in
          </p>

          {/* Countdown */}
          {countdown > 0 ? (
            <div className="text-5xl font-bold text-[#01875f] animate-pulse">
              {countdown}
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-[#01875f]">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="text-sm font-medium">Starting download...</span>
              </div>
            </div>
          )}

          {/* Installation Steps */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-left space-y-2">
            <p className="text-xs font-semibold text-blue-900 mb-2">
              📱 Installation Steps:
            </p>
            <ol className="text-xs text-blue-800 space-y-1.5 list-decimal list-inside">
              <li>Download will start automatically</li>
              <li>Open the downloaded APK file</li>
              <li>Allow installation from unknown sources if prompted</li>
              <li>Follow on-screen instructions to complete installation</li>
            </ol>
          </div>

          {/* Manual Download Button */}
          <button
            onClick={() => {
              const apkUrl = import.meta.env.VITE_APP_URL;
              window.location.href = apkUrl;
              onClose();
            }}
            className="w-full mt-4 bg-[#01875f] hover:bg-[#016d4c] text-white font-medium text-sm py-2 px-4 rounded-lg transition-colors"
          >
            Download Manually
          </button>

          {/* Note */}
          <p className="text-xs text-gray-500 mt-3">
            If download doesn't start automatically, click "Download Manually"
          </p>
        </div>
      </div>
    </div>
  );
}