import React from 'react';
import { ArticleGrid } from './components/ArticleGrid';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1219]">
      <header className="p-6">
        <h1 className="text-white text-2xl font-bold">EXA</h1>
      </header>
      <ArticleGrid />
    </div>
  );
}

export default App;