import { useEffect, useState } from "react";
import { getArticles } from "../../shared/actions/getArticles";
import { ArticleList } from "./ArticleList/ArticleList";
import { ArticleModel } from "./Article/article-model";

const Articles = () => {
  const [articles, setArticles] = useState<Array<ArticleModel>>([]);
  const [displayArticles, setDisplayArticles] = useState<Array<ArticleModel>>(
    []
  );
  const [articlesLoaded, setArticlesLoaded] = useState<boolean>(false);
  const [readArticles, setReadArticles] = useState<Array<string>>([]); // todo - save this in session state to persist read status

  const handleArticleClick = (id: string) => {
    const selectedArticle = articles.find((article) => article.id === id);
    if (selectedArticle) {
      const selectedArticleArray = [selectedArticle];
      const newDisplayArticles = selectedArticleArray.map((article) => {
        if (!readArticles.includes(id)) {
          setReadArticles([...readArticles, id]);
        }
        return { ...article, isOpen: true, isRead: true };
      });
      newDisplayArticles && setDisplayArticles(newDisplayArticles);
    }
  };

  const handleCloseArticle = () => {
    const articlesWithReadStatus = articles.map((article) => {
      return { ...article, isRead: readArticles.includes(article.id) };
    });
    setDisplayArticles(articlesWithReadStatus);
  };

  const refreshArticles = async () => {
    setArticlesLoaded(false);
    const articlesDataPromise = getArticles();
    const articlesData = (await articlesDataPromise).data;

    setArticles(articlesData);
    setDisplayArticles(articlesData);
    setArticlesLoaded(true);
  };

  useEffect(() => {
    refreshArticles();
  }, []);

  return (
    <ArticleList
      articles={displayArticles}
      isLoaded={articlesLoaded}
      articleOnClick={handleArticleClick}
      articleOnClose={handleCloseArticle}
    />
  );
};

export { Articles };
