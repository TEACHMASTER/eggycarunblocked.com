
// 定义文章接口
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}

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


export interface DescSection {
  title: string;
  p: string;
}
