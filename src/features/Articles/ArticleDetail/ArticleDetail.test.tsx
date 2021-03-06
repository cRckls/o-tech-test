import { render, screen } from "@testing-library/react";
import { ArticleDetail } from "./ArticleDetail";
import { formatDate } from "../../../shared/utilities";

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
    render(<ArticleDetail article={testArticle} onClose={() => {}} />);
    expect(screen.getByText("Article Title")).toBeInTheDocument();
    expect(screen.getByText("Article description")).toBeInTheDocument();
    expect(screen.getByText("Ystalyfera, United Kingdom")).toBeInTheDocument();
    expect(screen.getByText("Lloyd is giving away")).toBeInTheDocument();
    expect(screen.getByText("Added: 12/12/2020")).toBeInTheDocument();
  });

  it("should format date correctly", () => {
    const formattedDate = formatDate(testArticle.created_at);
    expect(formattedDate).toBe("12/12/2020");
  });
});
