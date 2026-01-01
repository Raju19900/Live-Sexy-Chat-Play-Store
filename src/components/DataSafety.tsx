import { Share2, Database, Lock, Trash2 } from 'lucide-react';

export default function DataSafety() {
  return (
    <div className="px-4 py-6 border-t border-gray-200">
      <h2 className="text-base sm:text-lg font-normal text-[#202124] mb-3">Data safety</h2>
      
      <p className="text-xs text-[#5f6368] mb-4 leading-relaxed">
        Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age.
      </p>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <Share2 className="w-4 h-4 text-[#5f6368] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[#5f6368] leading-relaxed">This app may share data with third parties</p>
        </div>

        <div className="flex items-start gap-2">
          <Database className="w-4 h-4 text-[#5f6368] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[#5f6368] leading-relaxed">This app may collect data types</p>
        </div>

        <div className="flex items-start gap-2">
          <Lock className="w-4 h-4 text-[#5f6368] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[#5f6368] leading-relaxed">Data is encrypted in transit</p>
        </div>

        <div className="flex items-start gap-2">
          <Trash2 className="w-4 h-4 text-[#5f6368] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[#5f6368] leading-relaxed">You can request data deletion</p>
        </div>
      </div>
    </div>
  );
}