
// 定义文章接口
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}

// 定义游戏数据类型
export interface Game {
  title: string;
  src: string;
  logoSrc?: string;
  description?: string;
  end?: string;
  desc?: {
    title: string;
    p: string;
  }[];
}

// 定义描述数据类型
export interface DescSection {
  title: string;
  p: string;
}


// 定义问题数据类型
export type FAQItem = {
    id: number;
    question: string;
    answer: string;
};