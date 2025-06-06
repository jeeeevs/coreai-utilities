import React, { useState } from 'react';
import Image from 'next/image';
import { MoreVertical } from 'lucide-react';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#1a1f2e] rounded-lg p-6 transition-all duration-300 hover:bg-[#1e2436]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-gray-400 text-sm mb-1">{article.type}</div>
          <div className="text-gray-400 text-sm">{article.date}</div>
        </div>
        <button className="p-1 hover:bg-gray-700 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <h2 className="text-white text-xl font-semibold mb-4">{article.title}</h2>

      <div className="bg-[#2a2f3e] rounded p-2 mb-4 flex items-center gap-2">
        <Image
          src="https://www.google.com/s2/favicons?domain=mbusa.com&sz=32"
          alt="Mercedes-Benz"
          width={16}
          height={16}
          className="rounded"
        />
        <span className="text-gray-400 text-sm">
          {article.domain} | {article.title}
        </span>
      </div>

      <div className={`space-y-2 ${expanded ? '' : 'line-clamp-3'}`}>
        {article.details.map((detail, index) => (
          <div key={index} className="flex items-start gap-2 text-gray-300 text-sm">
            <span className="min-w-2 h-2 rounded-full bg-gray-500 mt-2" />
            <p>{detail}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-gray-400 hover:text-white text-sm transition-colors underline"
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>

      <div className="mt-4 flex items-center gap-2">
        <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">Source</span>
        <span className="text-gray-400 text-sm">{article.source}</span>
      </div>
    </div>
  );
}