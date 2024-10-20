import React, { Fragment } from 'react';
import GameIframe from '../components/GameIframe';
import ArticleList from '../components/ArticleList';

const Home: React.FC = () => {
interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string; 
  author: string;
  date: string;
}
  
// 示例文章数据
  const articles: Article[] = [
    {
    id: '1',
    title: '10个提高游戏体验的小技巧',
    excerpt: '想要在游戏中获得更好的体验？这里有10个实用的小技巧，让你的游戏之旅更加愉快。',
    imageUrl: 'https://example.com/images/gaming-tips.jpg',
    author: '游戏达人',
    date: '2023-06-01'
  },
  ];
  
  return (
    <Fragment>
      <GameIframe src="https://webglmath.github.io/eggy-car/" title="Game Title" logoSrc="/eggy-car.png" />
      <ArticleList articles={articles} />
    </Fragment>
  );
};

export default Home;
