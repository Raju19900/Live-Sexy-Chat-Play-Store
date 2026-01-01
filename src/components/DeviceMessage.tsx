import { Smartphone } from 'lucide-react';

export default function DeviceMessage() {
  return (
    <div className="px-4 py-3 flex items-center gap-1.5 text-xs text-[#5f6368]">
      <Smartphone className="w-3.5 h-3.5 flex-shrink-0" />
      <span className="whitespace-nowrap leading-tight">This app is available for all of your devices</span>
    </div>
  );
}