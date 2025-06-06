"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MoreVertical } from 'lucide-react';
import OutputViewShowMore from './OutputViewShowMore';

export interface Article {
  id: string;
  type: string;
  date: string;
  title: string;
  url: string;
  domain: string;
  details: string[];
  source: string;
}

const mockArticles: Article[] = [
  {
    id: '1',
    type: 'Relevant Article',
    date: 'April 10, 2025',
    title: 'Build Your Own 2025 Mercedes-Maybach S 580 4MATIC',
    url: 'https://mbusa.com',
    domain: 'mbusa.com',
    details: [
      'The total price shown includes a base price plus estimated taxes and fees...',
      'Prices can change depending on optional products and add-ons.',
      'Acceleration rates are estimates from the manufacturer...',
      'EPA fuel economy estimates may not reflect real-world mileage...',
    ],
    source: 'Lorem Ipsum Dolor'
  },
  {
    id: '2',
    type: 'Relevant Article',
    date: 'April 10, 2025',
    title: 'Build Your Own 2025 Mercedes-Maybach S 580 4MATIC',
    url: 'https://mbusa.com',
    domain: 'mbusa.com',
    details: [
      'The total price shown includes a base price plus estimated taxes and fees...',
      'Prices can change depending on optional products and add-ons.',
      'Acceleration rates are estimates from the manufacturer...',
      'EPA fuel economy estimates may not reflect real-world mileage...',
    ],
    source: 'Lorem Ipsum Dolor'
  },
  {
    id: '3',
    type: 'Relevant Article',
    date: 'April 10, 2025',
    title: 'Build Your Own 2025 Mercedes-Maybach S 580 4MATIC',
    url: 'https://mbusa.com',
    domain: 'mbusa.com',
    details: [
      'The total price shown includes a base price plus estimated taxes and fees...',
      'Prices can change depending on optional products and add-ons.',
      'Acceleration rates are estimates from the manufacturer...',
      'EPA fuel economy estimates may not reflect real-world mileage...',
    ],
    source: 'Lorem Ipsum Dolor'
  }
];

const ArticleCard = ({
  article,
  onShowMore,
}: {
  article: Article;
  onShowMore: (article: Article) => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#1a1f2e] rounded-lg p-6 hover:bg-[#1e2436] transition-colors flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-gray-400 text-sm mb-1">{article.type}</div>
          <div className="text-gray-400 text-sm">{article.date}</div>
        </div>
        <button className="p-1 hover:bg-gray-700 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <h2 className="text-white text-lg font-semibold mb-4">{article.title}</h2>

      <div className="bg-[#2a2f3e] rounded p-2 mb-4 flex items-center gap-2 overflow-hidden">
        <Image
          src={`https://www.google.com/s2/favicons?domain=${article.domain}&sz=32`}
          alt={article.domain}
          width={16}
          height={16}
          unoptimized
          className="rounded"
        />
        <span className="text-gray-400 text-sm truncate">
          {article.domain} | {article.title}
        </span>
      </div>

      <div className={`space-y-2 ${expanded ? '' : 'line-clamp-3'} mb-4`}>
        {article.details.map((detail, idx) => (
          <div key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
            <span className="min-w-2 h-2 rounded-full bg-gray-500 mt-2" />
            <p>{detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <button
          onClick={() => onShowMore(article)}
          className="text-gray-400 hover:text-white text-sm transition-colors underline"
        >
          Show More
        </button>

        <div className="mt-4 flex items-center gap-2">
          <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">Source</span>
          <span className="text-gray-400 text-sm">{article.source}</span>
        </div>
      </div>
    </div>
  );
};

const OutputView = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleShowMore = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-[#0f1219] p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockArticles.map((article) => (
          <ArticleCard key={article.id} article={article} onShowMore={handleShowMore} />
        ))}
      </div>

      {/* Modal for expanded view */}
      {selectedArticle && (
        <OutputViewShowMore
          isOpen={true}
          onClose={handleCloseModal}
          article={selectedArticle}
        />
      )}
    </div>
  );
};

export default OutputView;
