"use client";
import React, { useState } from 'react';

interface ImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ 
  imageUrl, 
  title, 
  description, 
  onTitleChange, 
  onDescriptionChange 
}) => {
  return (
    <div className="bg-gray-600 rounded-lg p-4 mb-4 flex gap-12">
      <div className="w-64 h-48 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
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
            onChange={onTitleChange}
            placeholder="Enter image title"
            className="bg-transparent text-white text-xl font-semibold focus:outline-none focus:border-b border-teal-500 w-full"
          />
        </div>
        <textarea
          value={description}
          onChange={onDescriptionChange}
          placeholder="Enter image description"
          className="mt-5 text-gray-300 bg-transparent w-full focus:outline-none focus:border-b border-teal-500 resize-none"
          rows={3}
        />
      </div>
    </div>
  );
};

const ImageGenerator: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<Omit<ImageCardProps, 'onTitleChange' | 'onDescriptionChange'>>({
    imageUrl: "https://picsum.photos/400/300",
    title: "",
    description: ""
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentImage({ ...currentImage, title: e.target.value });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentImage({ ...currentImage, description: e.target.value });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <ImageCard
        imageUrl={currentImage.imageUrl}
        title={currentImage.title}
        description={currentImage.description}
        onTitleChange={handleTitleChange}
        onDescriptionChange={handleDescriptionChange}
      />
    </div>
  );
};

export default ImageGenerator;