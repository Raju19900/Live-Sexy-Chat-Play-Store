export default function ImageGallery() {
  const screenshots = [
    { id: 1, alt: 'Screenshot 1' },
    { id: 2, alt: 'Screenshot 2' },
    { id: 3, alt: 'Screenshot 3' },
    { id: 4, alt: 'Screenshot 4' },
  ];

  return (
    <div className="p-4 border-b">
      <div className="flex gap-2 overflow-x-auto">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.id}
            className="flex-shrink-0 w-40 h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-400 text-sm">{screenshot.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}