import React, { Fragment } from 'react';
import GameIframe from '@/components/GameIframe';
import ArticleList from '@/components/ArticleList';
const GameName: React.FC = () => {
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
  {
    id: '2',
    title: '最新游戏发布：《星际探险》',
    excerpt: '《星际探险》终于发布了！这款备受期待的太空探索游戏将带你踏上一段惊心动魄的宇宙之旅。',
    imageUrl: 'https://example.com/images/space-adventure.jpg',
    author: '游戏评论家',
    date: '2023-05-28'
  },
  {
    id: '3',
    title: '经典游戏回顾：《超级马里奥》',
    excerpt: '让我们一起回顾这款改变了整个游戏行业的经典之作，探索它为何至今仍然深受玩家喜爱。',
    imageUrl: 'https://example.com/images/mario-retrospective.jpg',
    author: '怀旧游戏爱好者',
    date: '2023-05-25'
  },

  {
    id: '3',
    title: '经典游戏回顾：《超级马里奥》',
    excerpt: '让我们一起回顾这款改变了整个游戏行业的经典之作，探索它为何至今仍然深受玩家喜爱。',
    imageUrl: 'https://example.com/images/mario-retrospective.jpg',
    author: '怀旧游戏爱好者',
    date: '2023-05-25'
  },
  {
    id: '3',
    title: '经典游戏回顾：《超级马里奥》',
    excerpt: '让我们一起回顾这款改变了整个游戏行业的经典之作，探索它为何至今仍然深受玩家喜爱。',
    imageUrl: 'https://example.com/images/mario-retrospective.jpg',
    author: '怀旧游戏爱好者',
    date: '2023-05-25'
  },
  {
    id: '3',
    title: '经典游戏回顾：《超级马里奥》',
    excerpt: '让我们一起回顾这款改变了整个游戏行业的经典之作，探索它为何至今仍然深受玩家喜爱。',
    imageUrl: 'https://example.com/images/mario-retrospective.jpg',
    author: '怀旧游戏爱好者',
    date: '2023-05-25'
  }
];
  
  return (
    <Fragment>
      <GameIframe src="https://webglmath.github.io/eggy-car/" title="Game Title" logoSrc="https://webglmath.github.io/eggy-car/logo.png" />
      <ArticleList articles={articles} />
    </Fragment>
  );
};

export default GameName;
