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

    const scroll = () => {
      scrollContainer.scrollLeft += 1;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      requestAnimationFrame(scroll);
    };

    let animation:number
    animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div ref={scrollRef} className="w-3/4 mx-auto rounded-lg shadow-md overflow-x-hidden">
      <div className="flex space-x-6 p-6 w-max">
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
