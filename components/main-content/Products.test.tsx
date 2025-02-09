import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Products from "./Products";

// Mock lucide-react
jest.mock("lucide-react", () => ({
    Search: () => "Mocked Search Icon",
    ChevronDown: () => "Mocked Chevrondown Icon",
    Heart: () => "Mocked Heart Icon",
}));

describe("Products", () => {
    it("shows empty text when products are empty", () => {
        render(<Products products={[]} />);

        const text = screen.getByText("There's no item available");
        expect(text).toBeInTheDocument();
    });
});

describe("Products", () => {
    it("shows product image if there's any product", () => {
        render(
            <Products
                products={[
                    {
                        id: 1,
                        title: "Metal Gear Girl",
                        category: "Mythic",
                        price: 30.09,
                        isFavorite: false,
                        createdAt: 1624533946000,
                        theme: "Halloween",
                        tier: "Premium",
                        imageId: 8,
                        author: {
                            firstName: "Dewie",
                            lastName: "Labeuil",
                            email: "dlabeuilv@nba.com",
                            gender: "Male",
                            avatar: "https://robohash.org/nihiltotamdolorem.png?size=100x100&set=set1",
                            onlineStatus: "idle"
                        }
                    }
                ]}
            />
        );

        const image = screen.getByAltText("product"); // Selects any <img> tag
        expect(image).toBeInTheDocument();
    });
});
