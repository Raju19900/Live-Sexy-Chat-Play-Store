import { useState } from 'react';
import { Play } from 'lucide-react';

export default function ImageGallery() {
  const [showVideo, setShowVideo] = useState(false);
  
  const media = [
    { type: 'video', src: '/assets/video1.mp4', thumbnail: '/assets/video-thumbnail.jpg' },
    { type: 'image', src: '/assets/photo1.jpeg' },
    { type: 'image', src: '/assets/photo2.jpg' },
    { type: 'image', src: '/assets/photo3.jpeg' },
    { type: 'image', src: '/assets/photo4.jpeg' },
  ];

  return (
    <div className="px-4 py-4">
      <div className="flex gap-2 sm:gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {media.map((item, index) => (
          <div key={index} className="flex-shrink-0 snap-start">
            {item.type === 'video' ? (
              <div className="relative w-[140px] h-[248px] sm:w-[160px] sm:h-[284px]">
                {!showVideo ? (
                  <div 
                    className="relative cursor-pointer group w-full h-full"
                    onClick={() => setShowVideo(true)}
                  >
                    <img 
                      src={item.thumbnail}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover rounded-xl shadow-md"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl group-hover:bg-black/40 transition-colors">
                      <div className="bg-white/90 rounded-full p-2 sm:p-3 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#01875f]" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <video 
                    src={item.src}
                    controls
                    autoPlay
                    className="w-full h-full object-cover rounded-xl shadow-md"
                    playsInline
                  />
                )}
              </div>
            ) : (
              <img 
                src={item.src} 
                alt={`Screenshot ${index + 1}`} 
                className="w-[140px] h-[248px] sm:w-[160px] sm:h-[284px] object-cover rounded-xl shadow-md"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}