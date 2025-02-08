import { EPriceSort, ETimeSort } from "@/app/model";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const heroImgUrl =
    "https://s3-alpha-sig.figma.com/img/b516/b416/0d2bda4f7b35456926d5b2cde87c9b5a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DmqLngdp6LzhEHBYLiA7y~xxAq9HlVboAAEbtxnL5mIJ7chE3HOsashOdbCXlopyNIt8Njw2pk5-TunAJetlqUHVo3z3QXM3Ac2y77-cwDURJ485Hw1lLCyXBkFfueLAsqfz2Rgn3KC-KlY4nYX3m9zYpliaam6gWT4Xt5za4FtskQG7oB1zbXMqdI6vFF1x7wxxY5g5myU4Ez-Bp1p7y1vkN57AfjKlaV31xDbuaiwVaiWwDfaXdSRR6N5NzQE2SyjPg4lqXmO2Ilt6aneqvfco4IjYzy0ezDMv8dbvU9TPEWK0j~fbV4Obzc3n1U4gmFAFuxG8e3EvEGgvQIl~eQ__";

export const tierOptions = ["All", "Basic", "Premium", "Deluxe"];
export const themeOptions = ["All", "Dark", "Light", "Colorful", "Halloween"];
export const cateogyOptions = [
    "All",
    "Upper Body",
    "Lower Body",
    "Hat",
    "Shoes",
    "Accessory",
    "Legendary",
    "Mythic",
    "Epic",
    "Rare"
];
export const timeOptions = [ETimeSort.latest, ETimeSort.oldest];
export const priceOptions = [EPriceSort.lowToHigh, EPriceSort.highToLow];

export const wait = (time: number) => {
    return new Promise((resolve) => setTimeout(() => resolve(true), time));
};
