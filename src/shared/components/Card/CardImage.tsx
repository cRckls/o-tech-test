import styles from "./Card.module.scss";

interface CardImageProps {
  src: string;
  width?: string;
  className?: string;
}

const CardImage = ({ src, width, className }: CardImageProps) => {
  return (
    <span
      className={`${styles.cardImage} ${className}`}
      style={{ backgroundImage: `url("${src}")` }}
    ></span>
  );
};

export { CardImage };
