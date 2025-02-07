import { getData } from "@/app/actions";
import MainFilters from "./MainFilters";
import Products from "./Products";
import SecondaryFilter from "./SecondaryFilter";

const MainContent = async ({ searchParams }: { searchParams: Promise<URLSearchParams> }) => {
    const params = await searchParams;
    const res = await getData(params);
    console.log("fetched data", res);
    return (
        <div className="px-10 py-5 flex gap-10">
            <MainFilters />
            <div>
                <SecondaryFilter />
                <Products products={res.data} />
            </div>
        </div>
    );
};

export default MainContent;
