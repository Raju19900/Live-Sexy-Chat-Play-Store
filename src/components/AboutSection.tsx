export default function AboutSection() {
  return (
    <div className="p-4 border-b">
      <h3 className="text-lg font-bold text-gray-900 mb-3">About this app</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Live Sexy Chat is an entertainment application designed for adults. Connect with people around the world through live video chat and messaging.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Features include:
      </p>
      <ul className="text-sm text-gray-700 space-y-2 ml-4">
        <li>• Live video chat with random people</li>
        <li>• Instant messaging</li>
        <li>• User profiles and preferences</li>
        <li>• Safe and secure platform</li>
      </ul>
    </div>
  );
}