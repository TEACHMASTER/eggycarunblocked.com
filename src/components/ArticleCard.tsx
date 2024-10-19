import React from 'react';
import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, imageUrl, author, date }) => {
  return (
    <div className="flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden w-64 h-96 transition-transform duration-300 hover:scale-105">
      <div className="relative h-40">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col h-56">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-4 flex-grow">{excerpt}</p>
        <div className="text-xs text-gray-500 mt-auto">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;