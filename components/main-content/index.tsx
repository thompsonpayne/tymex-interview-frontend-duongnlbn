import { getData } from "@/app/actions";
import MainFilters from "./MainFilters";
import Products from "./Products";
import SecondaryFilter from "./SecondaryFilter";
import { Suspense } from "react";
import { SearchParams } from "@/app/model";

const MainContent = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
    const params = await searchParams;
    const res = await getData(params);
    console.log("fetched data", res);
    return (
        <div className="px-10 lg:px-20 pt-12 flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-20">
            <MainFilters minPriceDefault={res.minPriceRange || 0} maxPriceDefault={res.maxPriceRange || 100} />
            <div className="w-full lg:w-3/4 flex flex-col gap-8">
                <SecondaryFilter />
                <Suspense fallback={"Loading..."}>
                    {/* <ProductWrapper searchParams={searchParams} /> */}
                    <Products products={res?.data || []} />
                </Suspense>
            </div>
        </div>
    );
};

export default MainContent;
