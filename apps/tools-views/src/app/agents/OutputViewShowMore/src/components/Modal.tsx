import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white rounded-2xl shadow-lg w-full max-w-[480px] max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn"
        style={{ animation: 'fadeIn 0.2s ease-out' }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b relative">
          <div className="absolute inset-x-0 flex justify-center">
            <h2 className="text-sm font-medium">{title}</h2>
          </div>
          <div className="w-5" /> {/* Spacer */}
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors relative z-10"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-6 py-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;