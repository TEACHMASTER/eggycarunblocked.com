import React, { useRef, useEffect } from 'react';
import ArticleCard from './ArticleCard';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1;
    const gap = 24; // This should match the gap in your CSS (space-x-6 = 1.5rem = 24px)

    const scroll = () => {
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'auto'
      });
      scrollAmount += step;
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div ref={scrollRef} className="w-full overflow-hidden">
      <div className="flex space-x-6 p-6 animate-scroll">
        {articles.concat(articles).map((article, index) => (
          <ArticleCard
            key={`${article.id}-${index}`}
            title={article.title}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            author={article.author}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;