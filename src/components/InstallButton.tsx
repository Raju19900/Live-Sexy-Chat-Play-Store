import { useState } from 'react';
import InstallModal from './InstallModal';

export default function InstallButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-4 border-b">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-[#01875f] hover:bg-[#016d4c] text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Install
        </button>
      </div>
      <InstallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}