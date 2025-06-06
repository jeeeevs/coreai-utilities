"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { mockImages, type ImageData } from './mockData';

interface ImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isSelected?: boolean;
  onClick?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ 
  imageUrl, 
  title, 
  description, 
  onTitleChange, 
  onDescriptionChange,
  isSelected,
  onClick
}) => {
  return (
    <div 
      className={`bg-gray-600 rounded-lg p-4 mb-4 flex gap-12 transition-all duration-200 ${
        isSelected ? 'ring-2 ring-teal-500 scale-[1.02]' : 'hover:scale-[1.01] cursor-pointer'
      }`}
      onClick={onClick}
    >
      <div className="w-64 h-48 flex-shrink-0 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
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
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <textarea
          value={description}
          onChange={onDescriptionChange}
          placeholder="Enter image description"
          className="mt-5 text-gray-300 bg-transparent w-full focus:outline-none focus:border-b border-teal-500 resize-none"
          rows={3}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const ImageGenerator: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<ImageData[]>(mockImages);

  const handleTitleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedImages = [...images];
    updatedImages[index] = {
      ...updatedImages[index],
      title: e.target.value
    };
    setImages(updatedImages);
  };

  const handleDescriptionChange = (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedImages = [...images];
    updatedImages[index] = {
      ...updatedImages[index],
      description: e.target.value
    };
    setImages(updatedImages);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="h-[calc(100vh-3rem)] overflow-y-auto pr-4 space-y-6">
        {images.map((image, index) => (
          <ImageCard
            key={image.id}
            imageUrl={image.imageUrl}
            title={image.title}
            description={image.description}
            onTitleChange={handleTitleChange(index)}
            onDescriptionChange={handleDescriptionChange(index)}
            isSelected={index === currentImageIndex}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGenerator;