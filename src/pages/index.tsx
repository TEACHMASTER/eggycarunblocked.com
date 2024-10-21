import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import GameIframe from '../components/GameIframe';
import ArticleList from '../components/ArticleList';
import { getArticlesByGameName } from '../data/Data';
import EggyCarDescription from '../components/EggyCarDescription';

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
      <Head>
        <title>Eggy Car</title>
        <meta name="description" content="Eggy Car is a fun and challenging game where you drive a car made entirely of eggs! Get ready for an egg-citing adventure as you navigate through obstacle-filled courses and collect eggs along the way." />
      </Head>
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">Eggy Car</h1>
      <GameIframe src="https://webglmath.github.io/eggy-car/" title="Eggy Car" logoSrc="/eggy-car.png" /> 
      <EggyCarDescription />
    </Fragment>
  );
};

export default Home;
