import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
jest.mock('lucide-react', () => ({
    MessageSquareText: () => 'message Icon',
    Phone: () => 'phone Icon',
}));

describe("Footer", () => {
    it("renders footer", () => {
        render(<Footer />);

        const text = screen.getByText("CONTACT US");

        expect(text).toBeInTheDocument();
    });
});
