import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import MainFilters from "./MainFilters";

// Mock Next.js hooks
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(() => new URLSearchParams("")),
}));

// Mock lucide-react
jest.mock("lucide-react", () => ({
  Search: () => "Mocked Search Icon",
  ChevronDown: () => "Mocked Chevrondown Icon",
}));

describe("MainFilters", () => {
  it("updates the query parameter on search submit", () => {
    const mockReplace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace });

    render(<MainFilters minPriceDefault={0} maxPriceDefault={100} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /search/i });

    // Type into input
    fireEvent.change(input, { target: { value: "new query" } });

    // Submit form
    fireEvent.click(button);

    // Ensure router.replace() was called with correct query param
    expect(mockReplace).toHaveBeenCalledWith("?search=new query", { scroll: false });
  });
});