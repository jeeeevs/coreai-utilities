import React from 'react';
import ResearchAgentModal from './components/ResearchAgentModal';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ResearchAgentModal isOpen={true} onClose={() => {}} />
    </div>
  );
}

export default App;