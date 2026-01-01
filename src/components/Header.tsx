export default function Header() {
  return (
    <div className="flex items-center gap-4 p-4 border-b">
      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#01875f] to-[#016d4c] flex items-center justify-center">
        <span className="text-white text-2xl font-bold">LSC</span>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Live Sexy Chat</h1>
        <p className="text-sm text-gray-600">Batery</p>
      </div>
    </div>
  );
}