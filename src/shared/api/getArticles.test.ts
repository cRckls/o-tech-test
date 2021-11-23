import { getArticles } from "./getArticles";

describe('getArticles tests', () => {

  it("should return data", async () => {
    const articlesDataPromise = getArticles();
    const articlesData = (await articlesDataPromise).data;
    expect(articlesData).toBeDefined()
  });

});