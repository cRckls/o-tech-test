import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <article className={`${styles.card} ${className}`}>{children}</article>
  );
};

export { Card };
