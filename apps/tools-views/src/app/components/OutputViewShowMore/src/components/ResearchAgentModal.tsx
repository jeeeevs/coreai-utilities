import React from 'react';
import Modal from './Modal';

interface ResearchAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResearchAgentModal: React.FC<ResearchAgentModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Research Agent">
      <div>
        <h1 className="text-base font-semibold mb-4">Build Your Own 2025 Mercedes-Maybach S 580 4MATIC</h1>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Inthahs asdc ksdcksd cksdc jkas cd</li>
          <li>V8 Biturbo engine with 496 horsepower</li>
          <li>All-wheel drive system with advanced stability control</li>
          <li>Executive rear seats with massage function</li>
          <li>Premium Burmester® 4D surround sound system</li>
          <li>Hand-crafted Nappa leather interior options</li>
          <li>Customizable ambient lighting with 64 colors</li>
          <li>Advanced driver assistance package included</li>
        </ul>
      </div>
    </Modal>
  );
};

export default ResearchAgentModal;