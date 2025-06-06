import React from 'react'

function WritingAgent() {
  return (
    <div className="bg-gray-600 rounded-lg p-6 text-white">
      {/* Block Name Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
            ✓
          </div>
          <h2 className="text-lg font-medium">Block Name</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm7 5a1 1 0 10-2 0v4a1 1 0 102 0V9z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg">⋮</button>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Tempor incididunt</h3>
        
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt?
          </h4>
          
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span>1. Lorem ipsum dolor sit amet consectetur, 10%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>2. Sit amet consectetur, 15%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>3. Adipiscing elit sed, 30%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>4. Eiusmod tempor incididunt, 20%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>5. Consectetur adipiscing elit sed, 25%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WritingAgent