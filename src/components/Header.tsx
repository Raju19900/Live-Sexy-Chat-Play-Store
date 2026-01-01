export default function Header() {
  return (
    <div className="px-4 pt-6 pb-4">
      <div className="flex items-center gap-3">
        <img
          src="/assets/logo.png"
          alt="Live Sexy Chat"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-md object-cover flex-shrink-0"
        />

        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h1 className="text-lg sm:text-xl font-bold text-[#202124] leading-tight truncate">
              Live Sexy Chat
            </h1>
            <img 
              src="https://mgx-backend-cdn.metadl.com/generate/images/662241/2026-01-01/04ec9c9d-e578-47fe-a3df-6280e199fe7f.png"
              alt="Verified"
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
            />
          </div>

          <p className="text-xs sm:text-sm text-[#01875f] font-medium leading-tight">FRND</p>

          <p className="text-[10px] sm:text-xs text-[#5f6368] leading-tight">
            Contains ads · In-app purchases
          </p>
        </div>
      </div>
    </div>
  );
}