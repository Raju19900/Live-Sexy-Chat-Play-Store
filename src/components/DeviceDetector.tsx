import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useEffect, useState } from 'react';

export default function DeviceDetector() {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || '';
    
    // Detect iOS devices
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    
    // Detect Mac devices
    const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);
    
    setIsAppleDevice(isIOS || isMac);
  }, []);

  if (!isAppleDevice) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 animate-fade-in">
      <Alert className="border-red-200 bg-red-50">
        <AlertCircle className="h-5 w-5 text-red-600" />
        <AlertTitle className="text-red-900 font-semibold">
          Not Available for Apple Devices
        </AlertTitle>
        <AlertDescription className="text-red-800">
          This app is only available for Android users. It is not compatible with iOS, iPhone, iPad, or Mac devices. Please use an Android device to install this app.
        </AlertDescription>
      </Alert>
    </div>
  );
}