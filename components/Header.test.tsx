import Header from "./Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
jest.mock('lucide-react', () => ({
    ChevronDown: () => 'Mocked Chevrondown Icon',
    Globe: () => 'Mocked globe Icon',
    Menu: () => 'Mocked menu Icon',
}));

describe("Header", () => {
    it("renders a heading", () => {
        render(<Header />);

        const heading = screen.getByText("HOME");

        expect(heading).toBeInTheDocument();
    });
});
