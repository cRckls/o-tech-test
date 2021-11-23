import { Card } from "../../../shared/components/Card/Card";
import { CardImage } from "../../../shared/components/Card/CardImage";
import { ArticleModel } from "../Article/article-model";
import { formatDate } from "../../../shared/utilities";
import styles from "./ArticleDetail.module.scss";

interface ArticleDetailProps {
  article: ArticleModel;
  onClose: Function;
}

const ArticleDetail = ({ article, onClose = () => {} }: ArticleDetailProps) => {
  return (
    <Card className={styles.articleDetail}>
      {article.isOpen && (
        <button onClick={() => onClose()} className={styles.btnClose}>
          Back
        </button>
      )}
      <CardImage src={article.images[0].files.medium} className="mb-s" />

      <p className="mb-s">{article.user.first_name} is giving away</p>
      <h3 className="mb-s">{article.title}</h3>
      <p className="mb-m">Added: {formatDate(article.created_at)}</p>
      <p className="mb-s">
        {article.location.town}, {article.location.country}
      </p>
      <p className="mb-m">{article.description}</p>
      <p>
        <button className={styles.button}>Request</button>
      </p>
    </Card>
  );
};
export { ArticleDetail };
