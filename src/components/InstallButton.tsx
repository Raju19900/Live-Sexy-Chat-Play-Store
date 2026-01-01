import { Button } from '@/components/ui/button';
import { useState } from 'react';
import InstallModal from './InstallModal';

export default function InstallButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="px-4 py-3">
        <Button
          size="sm"
          className="w-full font-medium text-sm h-9 sm:h-10 rounded-md shadow-sm bg-[#01875f] hover:bg-[#016d4c] text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Install
        </Button>
      </div>
      
      <InstallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}