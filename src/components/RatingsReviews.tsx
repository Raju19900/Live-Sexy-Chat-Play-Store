import { Star } from 'lucide-react';
import { useState } from 'react';
import InstallModal from './InstallModal';

export default function RatingsReviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reviews = [
    {
      name: 'Rahul Kumar',
      date: '1 December 2025',
      rating: 5,
      text: 'Amazing app! Video quality is crystal clear and connections are super fast. Best live chat app I have used.',
      helpful: 245,
    },
    {
      name: 'Priya Sharma',
      date: '28 November 2025',
      rating: 5,
      text: 'Love the interface and features. Daily rewards keep me coming back. Highly recommended!',
      helpful: 189,
    },
    {
      name: 'Amit Patel',
      date: '25 November 2025',
      rating: 4,
      text: 'Great app overall. Sometimes connection drops but support team is very responsive.',
      helpful: 156,
    },
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <>
      <div className="px-4 py-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-base sm:text-lg font-normal text-[#202124]">Ratings and reviews</h2>
          <button className="text-xs text-[#01875f] font-medium">
            Ratings are verified
          </button>
        </div>

        <div className="flex gap-4 sm:gap-6 mb-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="text-3xl sm:text-4xl font-normal text-[#202124] mb-1">4.9</div>
            <div className="flex gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 fill-[#01875f] text-[#01875f]" />
              ))}
            </div>
            <div className="text-[10px] text-[#5f6368]">10K reviews</div>
          </div>

          <div className="flex-1 space-y-1 min-w-0">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <span className="text-[10px] text-[#5f6368] w-2 flex-shrink-0">{item.stars}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#01875f]"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="border-t border-gray-200 pt-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#01875f] flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-xs text-[#202124] font-medium truncate">{review.name}</span>
                </div>
                <button className="text-[#5f6368] flex-shrink-0 ml-2">⋮</button>
              </div>

              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 ${
                        star <= review.rating
                          ? 'fill-[#01875f] text-[#01875f]'
                          : 'fill-gray-300 text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-[#5f6368]">{review.date}</span>
              </div>

              <p className="text-xs text-[#202124] mb-3 leading-relaxed">{review.text}</p>

              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="text-[10px] text-[#5f6368]">
                  {review.helpful} people found this helpful
                </span>
                <div className="flex gap-2">
                  <button className="text-[10px] text-[#5f6368] border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50">
                    Yes
                  </button>
                  <button className="text-[10px] text-[#5f6368] border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50">
                    No
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-[#01875f] text-white text-sm font-medium py-2.5 sm:py-3 px-4 rounded-lg mt-6 hover:bg-[#016d4c] transition-colors"
        >
          Install
        </button>
      </div>

      <InstallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}