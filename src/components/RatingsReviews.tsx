import { Star } from 'lucide-react';

export default function RatingsReviews() {
  const reviews = [
    {
      id: 1,
      author: 'John D.',
      rating: 5,
      date: 'December 2024',
      comment: 'Great app! Easy to use and lots of features.',
    },
    {
      id: 2,
      author: 'Sarah M.',
      rating: 4,
      date: 'November 2024',
      comment: 'Good experience overall. Could use some improvements.',
    },
  ];

  return (
    <div className="p-4 border-b">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Ratings and reviews</h3>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="text-5xl font-bold text-gray-900">4.2</div>
        <div>
          <div className="flex gap-1 mb-1">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} className="w-4 h-4 fill-current text-gray-900" />
            ))}
            <Star className="w-4 h-4 text-gray-300" />
          </div>
          <div className="text-sm text-gray-600">1.2K reviews</div>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-t pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">{review.author}</span>
              <span className="text-xs text-gray-600">{review.date}</span>
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current text-gray-900" />
              ))}
            </div>
            <p className="text-sm text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}