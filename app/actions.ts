import { IProduct } from "./model";

export const getData = async (params?: URLSearchParams) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/api/products`, {
            next: { revalidate: 60 } // revalidate products cache after 60 seconds
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json() as Promise<{
            data: IProduct[];
            timestamp: string;
        }>;
    } catch (error) {
        console.error("Fetch error:", error);
        return { data: [], timestamp: new Date().toISOString() };
    }
};
