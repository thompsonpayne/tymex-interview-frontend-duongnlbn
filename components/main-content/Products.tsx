"use client";
import { IProduct } from "@/app/model";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

const LOAD_SIZE = 20;

const Products = ({ products }: { products: IProduct[] }) => {
    const [visibleCount, setVisibleCount] = useState(LOAD_SIZE);
    const containerRef = useRef<HTMLDivElement>(null);
    // Slice only the visible items
    const items = products.slice(0, visibleCount);

    // Load More function
    const loadMore = () => {
        setVisibleCount((prev) => prev + LOAD_SIZE);
    };

    useEffect(() => {
        if (containerRef.current && visibleCount !== LOAD_SIZE) {
            containerRef.current?.scrollTo({
                behavior: "smooth",
                top: containerRef.current.scrollHeight
            });
        }
    }, [visibleCount]);

    return (
        <div className="flex flex-col justify-center gap-10">
            <div
                ref={containerRef}
                className="grid grid-flow-row auto-rows-max gap-10 pr-10 
            grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-h-[1000px] overflow-auto
            [&::-webkit-scrollbar]:w-1.5 
            [&::-webkit-scrollbar-track]:bg-[#777777] 
            [&::-webkit-scrollbar-thumb]:bg-[#FFCC21] 
            [&::-webkit-scrollbar-thumb]:rounded-ful"
            >
                {items.map((product) => (
                    <div key={product.id} className="rounded-lg bg-[#3A384199] p-4">
                        <div className="relative">
                            <Image
                                width={235}
                                height={233}
                                alt="product"
                                className="w-full"
                                src={"https://placehold.co/235x233.png"}
                            ></Image>
                            <div className="absolute top-0 left-0 p-2 flex justify-between w-full">
                                <div id="tag" className="bg-[#313B4580] rounded-sm px-3 py-1 text-xs">
                                    {product.tier}
                                </div>
                                <Heart />
                            </div>
                        </div>
                        <div className="pt-4 flex flex-col gap-2">
                            <div id="title-wrapper" className="flex justify-between">
                                <span>{product.title}</span>
                                <div className="flex gap-1">
                                    <Image width={8} height={14} src="/eth.svg" alt="eth price"></Image>
                                    <span>{product.price}</span>
                                </div>
                            </div>
                            <div id="authour-wrapper" className="flex items-center text-xs">
                                <Image alt="author avatar" width={32} height={32} src={product.author.avatar}></Image>
                                <span>{product.author.email}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Button onClick={loadMore} className="!py-6 !px-8 min-w-16 self-center">
                View more
            </Button>
        </div>
    );
};
export default Products;
