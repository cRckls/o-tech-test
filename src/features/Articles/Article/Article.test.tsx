import { render, screen } from "@testing-library/react";
import { Article } from "./Article";

describe("Article component tests", () => {
  const testArticle = {
    id: "1",
    created_at: "2020-12-12T10:49:18.000Z",
    title: "Article Title",
    description: "Article description",
    images: [{ files: { medium: "test-image.jpg" } }],
    location: {
      country: "United Kingdom",
      town: "Ystalyfera",
    },
    user: {
      first_name: "Lloyd",
    },
    isOpen: false,
    isRead: false,
  };

  it("should load a component with correct props", async () => {
    render(<Article article={testArticle} />);
    expect(screen.getByText("Article Title")).toBeInTheDocument();
  });
});
