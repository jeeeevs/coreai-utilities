"use client";

import React from "react";
import { X } from "lucide-react";
import type { Article } from "./OutputView"; // adjust if stored separately

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-fadeIn">
        <div className="relative flex items-center justify-center border-b px-6 py-4">
          <h2 className="text-sm font-medium text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 text-gray-500 hover:text-gray-800"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-6 py-5 text-gray-900 overflow-y-auto max-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

interface OutputViewShowMoreProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article;
}

const OutputViewShowMore: React.FC<OutputViewShowMoreProps> = ({
  isOpen,
  onClose,
  article,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Research Agent">
      <h1 className="text-sm font-semibold mb-4 text-gray-900">
        {article.title}
      </h1>
      <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
        {article.details.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Modal>
  );
};

export default OutputViewShowMore;
