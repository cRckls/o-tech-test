import { Card } from "../../../shared/components/Card/Card";
import { CardImage } from "../../../shared/components/Card/CardImage";
import { ArticleModel } from "./article-model";
import styles from "./Article.module.scss";

interface ArticleProps {
  article: ArticleModel;
  onClick?: Function;
  onClose?: Function;
}

const Article = ({
  article,
  onClick = () => {},
  onClose = () => {},
}: ArticleProps) => {
  return (
    <Card className={styles.article}>
      <button
        onClick={() => !article.isOpen && onClick(article.id)}
        className={styles.articleTarget}
      >
        {!article.isRead && <span className={styles.articleLabel}>NEW</span>}
        <span className={styles.articleImage}>
          <CardImage src={article.images[0].files.medium} />
        </span>
        <h3 className="mb-s">{article.title}</h3>
      </button>
    </Card>
  );
};

export { Article };
