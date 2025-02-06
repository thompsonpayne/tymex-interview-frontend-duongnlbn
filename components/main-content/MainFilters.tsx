"use client";
import { getData } from "@/app/actions";
import { priceOptions, themeOptions, tierOptions, timeOptions } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Slider } from "../ui/slider";

const MainFilters = () => {
    const [sliderValue, setSliderValue] = useState([25, 100]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const handleSubmit = async () => {
        const data = await getData();
        console.log("submit", data);
    };

    const setSearchParam = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value);
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    return (
        <form action={handleSubmit} className="w-3/12 ">
            <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <Input placeholder="Search" className="pl-10"></Input>
            </div>
            <div className="pt-8 pb-5">
                <label htmlFor="price" className="block pb-4 font-semibold">
                    PRICE
                </label>
                <Slider
                    name="price"
                    defaultValue={[0, 100]}
                    value={sliderValue}
                    onValueChange={(value) => setSliderValue(value)}
                    onValueCommit={(value) => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.set("minPrice", `${value[0]}`);
                        params.set("maxPrice", `${value[1]}`);
                        router.push(`?${params.toString()}`, { scroll: false });
                    }}
                    max={100}
                    step={1}
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
                        defaultValue={tierOptions[0]}
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
                    <Select name="theme" defaultValue={themeOptions[0]}>
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
                    <Select name="time-sort" defaultValue={timeOptions[0]}>
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
                        THEME
                    </label>
                    <Select name="price-sort" defaultValue={priceOptions[0]}>
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
        </form>
    );
};
export default MainFilters;
