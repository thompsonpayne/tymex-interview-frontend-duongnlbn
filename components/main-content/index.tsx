import { getData } from "@/app/actions";
import { SearchParams } from "@/app/model";
import MainFilters from "./MainFilters";
import Products from "./Products";
import SecondaryFilter from "./SecondaryFilter";

const MainContent = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
    const params = await searchParams;
    let res;
    try {
        res = await getData(params);
        console.log("fetched data", res);
    } catch (error) {
        console.error("Error fetching data:", error);
        res = { data: [], timestamp: new Date().toISOString(), minPriceRange: 0, maxPriceRange: 100 }; // Provide default or handle error case
    } 
    return (
        <div className="px-10 lg:px-20 pt-12 flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-20">
            <MainFilters minPriceDefault={res.minPriceRange || 0} maxPriceDefault={res.maxPriceRange || 100} />
            <div className="w-full lg:w-3/4 flex flex-col gap-8">
                <SecondaryFilter />
                <Products products={res?.data || []} />
            </div>
        </div>
    );
};

export default MainContent;
