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
];
  
  return (
    <Fragment>
      <GameIframe src="https://webglmath.github.io/eggy-car/" title="Game Title" logoSrc="https://webglmath.github.io/eggy-car/logo.png" />
      <ArticleList articles={articles} />
    </Fragment>
  );
};

export default Home;
