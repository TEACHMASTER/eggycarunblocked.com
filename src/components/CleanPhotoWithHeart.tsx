"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const CleanPhotoHeart: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className="relative inline-block w-64 h-64 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`
          absolute inset-0 transition-transform duration-300 ease-in-out
          ${isHovered ? 'scale-110' : 'scale-100'}
        `}
        style={{
          clipPath: "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')",
        }}
      >
        <Image
          src="/CleanShot 2024-10-19 at 23.47.20@2x.png"
          alt="Clean Photo Heart"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default CleanPhotoHeart;
