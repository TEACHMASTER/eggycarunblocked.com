import React, { useState, useEffect, useCallback } from "react";


const backgroundImages = ["/path/to/image1.jpg"];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleExploreClick = useCallback(() => {
    // Implement scroll to game list or navigation
    console.log("Explore games clicked");
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        handleExploreClick();
      }
    },
    [handleExploreClick]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-gray-800 text-white py-20 h-screen bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Epic Game Hub
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover your next gaming adventure
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300"
          onClick={handleExploreClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="Explore games"
        >
          Explore Games
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
