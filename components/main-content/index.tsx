import { getData } from "@/app/actions";
import MainFilters from "./MainFilters";
import Products from "./Products";
import SecondaryFilter from "./SecondaryFilter";
import { Suspense } from "react";

const MainContent = ({ searchParams }: { searchParams: Promise<URLSearchParams> }) => {
    return (
        <div className="px-20 pt-12 flex gap-20">
            <MainFilters />
            <div className="w-3/4 flex flex-col gap-8">
                <SecondaryFilter />
                <Suspense fallback={"Loading..."}>
                    <ProductWrapper searchParams={searchParams} />
                </Suspense>
            </div>
        </div>
    );
};

const ProductWrapper = async ({ searchParams }: { searchParams: Promise<URLSearchParams> }) => {
    const params = await searchParams;
    const res = await getData(params);
    console.log("fetched data", res);
    return <Products products={res.data} />;
};

export default MainContent;
