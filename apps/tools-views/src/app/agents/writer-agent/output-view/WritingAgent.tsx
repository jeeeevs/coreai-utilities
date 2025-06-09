import React from 'react'

const mockData = [
  {
    title: "Content Strategy Analysis",
    description: "A comprehensive analysis of current content strategy trends and their impact on digital marketing. This report highlights key findings and recommendations for improvement.",
    subHeading: "What are the most effective content types for digital marketing in 2024?",
    keypoints: [
      { text: "Video content engagement rate", percentage: 35 },
      { text: "Blog post effectiveness", percentage: 25 },
      { text: "Social media impact", percentage: 20 },
      { text: "Email marketing success", percentage: 15 },
      { text: "Podcast reach", percentage: 5 }
    ]
  }
];

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
      {mockData.map((data, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl font-semibold">{data.title}</h3>
          
          <p className="text-gray-300">
            {data.description}
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4">
              {data.subHeading}
            </h4>
            
            <ul className="space-y-3">
              {data.keypoints.map((point, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span>{idx + 1}. {point.text}, {point.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WritingAgent