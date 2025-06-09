"use client";
import React, { useEffect, useState } from 'react'
import withHost, { WrappedComponentProps, InjectedProps } from "@coreai/ui/hoc/withHost";
import { mockCardData, CardDataProps } from './mockData';
  
  const ContentCard: React.FC<CardDataProps> = ({ 
    imageUrl, 
    title, 
    description,
    subHeading = '',
    keypoints = [],
  }) => {
    return (
      <div 
        className={`bg-gray-600 rounded-lg p-4 mb-4 flex gap-12 transition-all duration-200`}
      >
        {imageUrl && (
        <div className="w-64 h-48 flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        )}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 text-teal-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <input
              type="text"
              value={title}
              readOnly
              className="bg-transparent text-white text-xl font-semibold focus:outline-none focus:border-b border-teal-500 w-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <textarea
            value={description}
            readOnly
            className="mt-5 text-gray-300 bg-transparent w-full focus:outline-none focus:border-b border-teal-500 resize-none"
            rows={3}
            onClick={(e) => e.stopPropagation()}
          />
          <textarea
            value={subHeading}
            readOnly
            className="mt-2 text-gray-300 bg-transparent w-full focus:outline-none focus:border-b border-teal-500 resize-none"
            rows={1}
            onClick={(e) => e.stopPropagation()}
          />
          {keypoints.length > 0 && (
          <ul className="space-y-3">
              {keypoints.map((point, idx) => (
                <li key={idx} className="flex justify-between items-center text-gray-300">
                  <span>{idx + 1}. {point} </span>
                </li>
              ))}
        </ul>
        )}
        </div>
      </div>
    );
  };

function ContentView(props: WrappedComponentProps & InjectedProps) {
    const [images, setImages] = useState<CardDataProps[]>([]);

    useEffect(() => {
      console.log('images', images);
      console.log('props.incomingData', props.incomingData);
      setImages(mockCardData);
    }, [props.incomingData]);
  
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <div className="h-[calc(100vh-3rem)] overflow-y-auto pr-4 space-y-6">
          {images.map((image, idx) => (
            <ContentCard
              key={idx}
              imageUrl={image.imageUrl}
              title={image.title}
              description={image.description}
              subHeading={image.subHeading}
              keypoints={image.keypoints}
            />
          ))}
        </div>
      </div>
    );
}

export default withHost(ContentView);