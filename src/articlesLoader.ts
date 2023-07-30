import { marked } from 'marked';

interface Article {
  title: string;
  slug: string;
  description: string;
  date: string;
  keywords: string[];
  content: string;
}

async function loadArticles(): Promise<Article[]> {
  try {
    const response = await fetch('/articles.json');
    if (!response.ok) {
      throw new Error('Failed to load articles data');
    }

    const articles: Article[] = await response.json();

    for (const article of articles) {
      article.content = marked(article.content);
    }

    return articles;
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
}

async function loadArticle(date: string, slug: string): Promise<Article | null> {
  try {
    const response = await fetch(`/articles/${date}/${slug}.json`);
    if (!response.ok) {
      throw new Error('Failed to load article data');
    }

    const article: Article = await response.json();

    article.content = marked(article.content);

    return article;
  } catch (error) {
    console.error(`Error loading article with date ${date} and slug ${slug}:`, error);
    return null;
  }
}

async function searchArticle(terms: string): Promise<Article[]> {
  try {
    let articles = await loadArticles();
    const searchTerms = terms.toLowerCase().split(' ');
    
    return articles.filter((article) => {
      const articleText = `${article.title} ${article.description} ${article.content}`.toLowerCase();
      return searchTerms.every((term) => articleText.includes(term));
    });
    
  } catch (error) {
    console.error('Error searching articles:', error);
    return [];
  }
}

export { loadArticles, loadArticle, searchArticle };
export type { Article };
