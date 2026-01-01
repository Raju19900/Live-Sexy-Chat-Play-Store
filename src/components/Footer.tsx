export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-6">
      <div className="mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h3 className="text-xs font-medium text-[#202124] mb-2">Store</h3>
            <ul className="space-y-1.5 text-[10px] text-[#5f6368]">
              <li>Gift cards</li>
              <li>Redeem</li>
              <li>Family sharing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-[#202124] mb-2">Legal</h3>
            <ul className="space-y-1.5 text-[10px] text-[#5f6368]">
              <li>Terms of use</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-[10px] text-[#5f6368] text-center leading-relaxed">
            Available for Android devices only. Not compatible with iOS/Apple devices.
          </p>
          <p className="text-[10px] text-[#5f6368] text-center mt-1.5">All prices include VAT.</p>
        </div>
      </div>
    </footer>
  );
}