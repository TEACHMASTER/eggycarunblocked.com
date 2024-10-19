"use client";

import React from 'react';
import Image from 'next/image';

const photos = [
  { src: "/CleanShot 2024-10-19 at 23.47.20@2x.png", isHeart: true },
  { src: "/CleanShot 2024-10-19 at 23.47.20@2x.png", isHeart: false },
  { src: "/CleanShot 2024-10-19 at 23.47.20@2x.png", isHeart: true },
  { src: "/CleanShot 2024-10-19 at 23.47.20@2x.png", isHeart: false },
  { src: "/CleanShot 2024-10-19 at 23.47.20@2x.png", isHeart: true },
  { src: "/CleanShot 2024-10-19 at 23.47.20@2x.png", isHeart: false },
];

const LovePhotoWall: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-8 animate-pulse">我爱你！</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className={`relative w-40 h-40 md:w-64 md:h-64 overflow-hidden rounded-lg shadow-lg 
                        transition-all duration-300 ease-in-out hover:scale-105 
                        ${index % 2 === 0 ? 'animate-bounce' : 'animate-pulse'}`}
            style={{
              animationDuration: `${3 + index * 0.5}s`,
            }}
          >
            <div 
              className="w-full h-full"
              style={{
                clipPath: photo.isHeart 
                  ? "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')"
                  : "none",
              }}
            >
              <Image
                src={photo.src}
                alt="Love Photo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xl text-red-500 mt-8 text-center">
        每一张照片都是我们美好的回忆，<br/>
        你是我生命中最珍贵的礼物。
      </p>
    </div>
  );
};

export default LovePhotoWall;
