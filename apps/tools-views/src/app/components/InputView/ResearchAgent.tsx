"use client";
import React, { useState } from 'react';
import withHost, { WrappedComponentProps, InjectedProps } from '@coreai/ui/hoc/withHost';

function ResearchAgent(props: WrappedComponentProps & InjectedProps) {
  console.log(props);
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Research topic:', topic);
  };

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg mb-2 text-gray-300">
          We require the topic you wish to research.
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="research-topic" 
              className="block text-sm text-gray-400 mb-2"
            >
              Desired Research Topic
            </label>
            <textarea
              id="research-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full min-h-[120px] bg-[#242937] border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Enter your research topic here..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white text-[#1a1f2e] px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
              onClick={() => {
                props.sendOutput('research-topic', topic);
              }}
            >
              Let&apos;s Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withHost(ResearchAgent);