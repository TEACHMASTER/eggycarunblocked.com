// components/ResponsiveIframe.tsx
import React, { useState, useRef, useEffect } from 'react';

interface IframeProps {
  src: string;
  title: string;
  width?: string;    // 自定义宽度
  height?: string;   // 自定义高度
}

const ResponsiveIframe: React.FC<IframeProps> = ({ src, title, width = '560px', height = '315px' }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      iframeContainerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div
        ref={iframeContainerRef}
        style={{ width: isFullscreen ? '100%' : width, height: isFullscreen ? '100%' : height }}
        className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
      >
        <iframe
          src={src}
          title={title}
          style={{ width: '100%', height: '100%' }}
          frameBorder="0"
          className="border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={toggleFullscreen}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {isFullscreen ? '退出全屏' : '全屏显示'}
      </button>
    </div>
  );
};

export default ResponsiveIframe;
