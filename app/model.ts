export interface IProduct {
    id: number;
    title: string;
    category: "Upper Body" | "Lower Body" | "Hat" | "Shoes" | "Accessory" | "Legendary" | "Mythic" | "Epic" | "Rare";
    price: number;
    isFavorite: boolean;
    createdAt: number;
    theme: "Dark" | "Light" | "Colorful" | "Halloween";
    tier: "Basic" | "Premium" | "Deluxe";
    imageId: number; // 1 -> 20 (integer)
    author: IAuthor;
}

interface IAuthor {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    avatar: string;
    onlineStatus: string;
}

type SearchParamsKey = "timeSort" | "priceSort" | "maxPrice" | "minPrice" | "theme" | "tier" | "category" | "search";
export type SearchParams = { [key in SearchParamsKey]: string | string[] };

export enum EPriceSort {
    lowToHigh = "Low to high",
    highToLow = "High to low"
}

export enum ETimeSort {
    latest = "Latest",
    oldest = "Oldest"
}
