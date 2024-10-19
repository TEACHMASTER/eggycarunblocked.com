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
  const [likes, setLikes] = useState(0);
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

  const handleFullscreen = () => {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handlePlay = () => {
    setShowIframe(true);
    setIsLoading(true);
  };

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div ref={containerRef} className="relative w-full h-0 pb-[56.25%]">
      {!showIframe ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
          <Image
            src={logoSrc}
            alt="Game Logo"
            width={200}
            height={200}
            className="mb-4"
          />
          <button
            onClick={handlePlay}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="开始游戏"
          >
            开始游戏
          </button>
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <p className="text-lg font-semibold">加载中...</p>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-100">
              <p className="text-lg font-semibold text-red-600">{error}</p>
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
            style={{
              width: '100%',
              height: '100%',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          />
          <div className={`absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black bg-opacity-50 text-white p-2 ${isFullscreen ? 'z-50' : ''}`}>
            <div className="flex items-center space-x-2">
              <Image
                src={logoSrc}
                alt="Game Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-semibold">{title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className="flex items-center space-x-1 focus:outline-none"
                aria-label="点赞"
              >
                <span>👍</span>
                <span>{likes}</span>
              </button>
              <button
                onClick={handleFullscreen}
                className="focus:outline-none"
                aria-label={isFullscreen ? "退出全屏" : "全屏"}
              >
                {isFullscreen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GameIframe;