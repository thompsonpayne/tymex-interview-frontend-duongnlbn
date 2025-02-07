import { IProduct } from "@/app/model";
import Image from "next/image";

const Products = ({ products }: { products: IProduct[] }) => {
    return (
        <div className="flex">
            <div className="rounded-lg bg-[#3A384199] p-4">
                <div className="relative">
                    <Image width={235} height={233} alt="product" src={"https://placehold.co/235x233.png"}></Image>
                </div>
                <div className="pt-4 flex flex-col gap-2">
                    <div id="title-wrapper" className="flex justify-between">
                        <span>{products[0].title}</span>
                        <div className="flex gap-1">
                            <Image width={8} height={14} src="/eth.svg" alt="eth price"></Image>
                            <span>{products[0].price}</span>
                        </div>
                    </div>
                    <div id="authour-wrapper" className="flex items-center text-xs">
                        <Image alt="author avatar" width={32} height={32} src={products[0].author.avatar}></Image>
                        <span>{products[0].author.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Products;
