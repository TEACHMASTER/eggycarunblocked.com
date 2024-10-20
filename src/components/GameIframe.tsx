"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface GameIframeProps {
  src: string;
  title: string;
  logoSrc: string;
}

const GameIframe: React.FC<GameIframeProps> = ({ src, title, logoSrc }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showIframe, setShowIframe] = useState(false);
  const [likes, setLikes] = useState(999);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError('加载游戏时出错。请稍后再试。');
    setIsLoading(false);
  };

  const handlePlay = () => {
    setShowIframe(true);
    setIsLoading(true);
  };

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div className="flex justify-center isolate">
      <div ref={containerRef} className="relative w-3/4 h-0 pb-[45%]">
        {!showIframe ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
            <Image
              src={logoSrc}
              alt="Game Logo"
              width={100}
              height={100}
              className="mb-3"
            />
            <button
              onClick={handlePlay}
              className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="play"
            >
              Play
            </button>
          </div>
        ) : (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <p className="text-base font-semibold">加载中...</p>
              </div>
            )}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-100">
                <p className="text-base font-semibold text-red-600">{error}</p>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={src}
              title={title}
              className={`absolute top-0 left-0 w-full h-full border-0 ${isFullscreen ? 'z-50' : ''}`}
              allowFullScreen
              onLoad={handleLoad}
              onError={handleError}
            />
            <div className={`absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black bg-opacity-50 text-white p-1.5 ${isFullscreen ? 'z-50' : ''}`}>
              <div className="flex items-center space-x-2">
                <Image
                  src={logoSrc}
                  alt="Game Logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-semibold text-sm">{title}</span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleLike}
                  className="flex items-center space-x-1 focus:outline-none"
                  aria-label="点赞"
                >
                  <span>👍</span>
                  <span className="text-sm">{likes}</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GameIframe;
