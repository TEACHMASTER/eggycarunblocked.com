
// 定义文章接口
interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}


/**
 * 从API获取指定游戏名称的文章列表
 * @param gameName 游戏名称
 * @returns 对应游戏的文章列表数组
 */
export const getArticlesByGameName = async (gameName: string): Promise<Article[]> => {
  try {
    const response = await fetch(`/api/articles?gameName=${encodeURIComponent(gameName)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const articles: Article[] = await response.json();
    return articles;
  } catch (error) {
    console.error('Error fetching article list:', error);
    return [];
  }
};
