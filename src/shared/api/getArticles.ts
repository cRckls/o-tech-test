import axios, { AxiosPromise } from "axios";
import { ArticleModel } from "../../features/Articles/Article/article-model";

const getArticles = (): AxiosPromise<ArticleModel[]> => {
  const response = axios.get<ArticleModel[]>(
    "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json");

  return response;
};

export { getArticles };
