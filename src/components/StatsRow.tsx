import { Star } from 'lucide-react';

export default function StatsRow() {
  return (
    <div className="flex items-center justify-around py-4 px-4 border-b">
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 text-sm font-medium text-gray-900">
          4.2 <Star className="w-4 h-4 fill-current text-gray-900" />
        </div>
        <div className="text-xs text-gray-600 mt-1">1.2K reviews</div>
      </div>
      <div className="text-center">
        <div className="text-sm font-medium text-gray-900">10K+</div>
        <div className="text-xs text-gray-600 mt-1">Downloads</div>
      </div>
      <div className="text-center">
        <div className="text-sm font-medium text-gray-900">Mature 17+</div>
        <div className="text-xs text-gray-600 mt-1">Rated for 17+</div>
      </div>
    </div>
  );
}