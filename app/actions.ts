import { priceOptions, timeOptions, wait } from "@/lib/utils";
import { EPriceSort, ETimeSort, IProduct, SearchParams } from "./model";

interface IDataRes {
    data: IProduct[];
    timestamp: string;
    minPriceRange?: number;
    maxPriceRange?: number;
}
export const getData = async (searchParams?: SearchParams): Promise<IDataRes> => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/api/products`, {
            next: { revalidate: 60, tags: ["products"] } // revalidate products cache after 60 seconds
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        wait(3000); // simulate data fetching delay
        const resData = (await response.json()) as IDataRes;
        const data = processData(resData, searchParams);
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        return { data: [], timestamp: new Date().toISOString() } as IDataRes;
    }
};

const processData = (data: IDataRes, searchParams?: SearchParams): IDataRes => {
    const products = data.data;
    const minPriceRange = Math.min(...products.map((p) => p.price));
    const maxPriceRange = Math.max(...products.map((p) => p.price));
    if (searchParams) {
        const {
            search = "",
            category = "All",
            maxPrice = maxPriceRange,
            minPrice = minPriceRange,
            priceSort = priceOptions[0],
            theme = "All",
            tier = "All",
            timeSort = timeOptions[0]
        } = searchParams;
        const resData = products
            .filter((product) => {
                if (
                    !product.title.includes((search || "") as string) &&
                    !product.author.lastName.includes((search || "") as string) &&
                    !product.author.firstName.includes((search || "") as string)
                ) {
                    return false;
                }
                if (!category.includes(product.category) && category !== "All") {
                    return false;
                }
                if (product.tier !== tier && tier !== "All") {
                    return false;
                }
                if (product.theme !== theme && theme !== "All") {
                    return false;
                }
                if (!!+minPrice && product.price < +minPrice || !!+maxPrice && product.price > +maxPrice) {
                    return false;
                }
                return true;
            })
            .sort((a, b) => {
                if (a.price !== b.price) {
                    return priceSort === EPriceSort.lowToHigh ? a.price - b.price : b.price - a.price;
                }
                return timeSort === ETimeSort.latest ? b.createdAt - a.createdAt : a.createdAt - b.createdAt;
            });
        return {
            data: resData,
            timestamp: data.timestamp,
            minPriceRange,
            maxPriceRange
        };
    }

    return { ...data, minPriceRange, maxPriceRange };
};
