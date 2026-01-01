export default function DataSafety() {
  return (
    <div className="p-4 border-b">
      <h3 className="text-lg font-bold text-gray-900 mb-3">Data safety</h3>
      <p className="text-sm text-gray-700 mb-3">
        Safety starts with understanding how developers collect and share your data.
      </p>
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-start gap-2">
          <span className="text-[#01875f]">✓</span>
          <span>Data is encrypted in transit</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[#01875f]">✓</span>
          <span>You can request that data be deleted</span>
        </div>
      </div>
    </div>
  );
}