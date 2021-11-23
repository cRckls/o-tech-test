import React from "react";
import { Article } from "../Article/Article";
import { ArticleModel } from "../Article/article-model";
import { ArticleDetail } from "../ArticleDetail/ArticleDetail";
import styles from "./ArticleList.module.scss";

interface ArticleListProps {
  articles?: Array<ArticleModel>;
  isLoaded?: boolean;
  articleOnClick?: Function;
  articleOnClose?: Function;
}

const ArticleList = ({
  articles,
  isLoaded = false,
  articleOnClick = () => {},
  articleOnClose = () => {},
}: ArticleListProps) => {
  return !isLoaded ? (
    <div>LOADING</div>
  ) : (
    <>
      <div className={styles.articleList}>
        {articles &&
          Array.isArray(articles) &&
          articles.map((article: ArticleModel) =>
            article.isOpen ? (
              <ArticleDetail article={article} onClose={articleOnClose} />
            ) : (
              <Article
                key={article.id}
                article={article}
                onClick={articleOnClick}
              />
            )
          )}
      </div>
    </>
  );
};

export { ArticleList };
