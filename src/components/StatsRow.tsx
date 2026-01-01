import { Award } from 'lucide-react';

export default function StatsRow() {
  return (
    <div className="px-4 py-3">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="text-center">
          <div className="flex items-center justify-center gap-0.5 mb-0.5">
            <span className="text-sm font-medium text-[#202124]">4.9</span>
            <span className="text-[#202124] text-xs">★</span>
          </div>
          <p className="text-[9px] text-[#5f6368]">Rating</p>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-[#202124] mb-0.5">1M+</p>
          <p className="text-[9px] text-[#5f6368]">Downloads</p>
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center h-[20px]">
            <Award className="w-4 h-4 text-[#5f6368]" />
          </div>
          <p className="text-[9px] text-[#5f6368]">Editor's choice</p>
        </div>
      </div>
    </div>
  );
}