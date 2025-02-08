"use client";
import { priceOptions, themeOptions, tierOptions, timeOptions } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";

const MainFilters = ({ minPriceDefault, maxPriceDefault }: { minPriceDefault: number; maxPriceDefault: number }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Init default values
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const defaultPriceValues = [minPriceParam ? +minPriceParam : minPriceDefault, maxPriceParam ? +maxPriceParam : maxPriceDefault];
    const defaultTier = searchParams.get("tier") ?? tierOptions[0];
    const defaultTheme = searchParams.get("theme") ?? themeOptions[0];
    const defaultTimeSort = searchParams.get("timeSort") ?? timeOptions[0];
    const defaultPriceSort = searchParams.get("priceSort") ?? priceOptions[0];

    // manual state manage for price slider
    const [sliderValue, setSliderValue] = useState(defaultPriceValues);

    // Set browser url query params
    const setSearchParam = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value);
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    // Handle search submit form
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries()) as { search: string };
        setSearchParam("search", values.search);
    };

    return (
        <div className="w-full lg:w-3/12">
            <form onSubmit={handleSearchSubmit} className="flex flex-col xl:flex-row gap-1 ">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <Input name="search" placeholder="Search product name" className="pl-10"></Input>
                </div>
                <Button>Search</Button>
            </form>
            <div className="pt-8 pb-5">
                <label htmlFor="price" className="block pb-4 font-semibold">
                    PRICE
                </label>
                <Slider
                    name="price"
                    defaultValue={defaultPriceValues}
                    value={sliderValue}
                    onValueChange={(value) => setSliderValue(value)}
                    onValueCommit={(value) => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.set("minPrice", `${value[0]}`);
                        params.set("maxPrice", `${value[1]}`);
                        router.push(`?${params.toString()}`, { scroll: false });
                    }}
                    max={maxPriceDefault || 100}
                    min={minPriceDefault || 0}
                    step={0.1}
                />
                <div className="flex justify-between pt-2">
                    <label htmlFor="price">{sliderValue[0]}</label>
                    <label htmlFor="price">{sliderValue[1]}</label>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div>
                    <label htmlFor="tier" className="block pb-2 font-semibold text-[#89888B]">
                        TIER
                    </label>
                    <Select
                        name="tier"
                        defaultValue={defaultTier}
                        onValueChange={(value) => setSearchParam("tier", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a tier" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {tierOptions.map((tier) => (
                                    <SelectItem key={tier} value={tier}>
                                        {tier}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="theme" className="block pb-2 font-semibold text-[#89888B]">
                        THEME
                    </label>
                    <Select
                        name="theme"
                        defaultValue={defaultTheme}
                        onValueChange={(value) => setSearchParam("theme", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {themeOptions.map((theme) => (
                                    <SelectItem key={theme} value={theme}>
                                        {theme}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="time-sort" className="block pb-2 font-semibold text-[#89888B]">
                        TIME
                    </label>
                    <Select
                        name="time-sort"
                        defaultValue={defaultTimeSort}
                        onValueChange={(value) => setSearchParam("timeSort", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Sort time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {timeOptions.map((time) => (
                                    <SelectItem key={time} value={time}>
                                        {time}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="price-sort" className="block pb-2 font-semibold text-[#89888B]">
                        PRICE
                    </label>
                    <Select
                        name="price-sort"
                        defaultValue={defaultPriceSort}
                        onValueChange={(value) => setSearchParam("priceSort", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Sort price" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {priceOptions.map((price) => (
                                    <SelectItem key={price} value={price}>
                                        {price}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            {/* <Button type="submit">Search</Button> */}
        </div>
    );
};
export default MainFilters;
