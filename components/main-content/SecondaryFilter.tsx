"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cateogyOptions } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { debounce } from "lodash";

const SecondaryFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const categoryValues = searchParams.getAll("category");

    // Update the url query param, with debounce pattern
    const updateQueryParam = debounce((values: string[]) => {
        const params = new URLSearchParams(searchParams.toString());
        if (!values.length) {
            params.delete("category");
        }
        values.forEach((value, index) => {
            if (index === 0) {
                params.set("category", value);
            } else {
                params.append("category", value); // Adding multiple values
            }
        });
        router.replace(`?${params.toString()}`, { scroll: false });
    }, 300);

    return (
        <ToggleGroup type="multiple" variant="outline" defaultValue={categoryValues} onValueChange={updateQueryParam}>
            {cateogyOptions.map((category) => (
                <ToggleGroupItem
                    key={category}
                    value={category}
                    aria-label="Toggle bold"
                    className="px-3 data-[state=on]:bg-gradient-to-r data-[state=on]:from-[#DA458F] data-[state=on]:to-[#DA34DD] data-[state=off]:bg-gradient-to-r data-[state=off]:from-[#DA458F66] data-[state=off]:to-[#DA34DD66] text-white"
                >
                    {category}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
};
export default SecondaryFilter;
