import React, { Fragment, useEffect, useState } from 'react';
import GameIframe from '../components/GameIframe';
import ArticleList from '../components/ArticleList';
import { getArticlesByGameName } from '../data/Data';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getArticlesByGameName('eggy-car');
      setArticles(fetchedArticles);
    };
    fetchArticles();
  }, []);

  return (
    <Fragment>
      {/* <GameIframe src="https://webglmath.github.io/eggy-car/" title="Eggy Car" logoSrc="/eggy-car.png" /> */}
      <ArticleList articles={articles} />
    </Fragment>
  );
};

export default Home;
