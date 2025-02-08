import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/main-content";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Suspense } from "react";
import { SearchParams } from "./model";
export default function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
    return (
        <div className="">
            <HeroSection />
            <div className="w-full relative bg-cover" style={{ backgroundImage: `url('/main-bg.png')` }}>
                <Suspense
                    fallback={
                        <div className="flex space-x-4 p-12">
                        <Skeleton className="h-[500px] w-3/12 rounded-lg p-5" >Loading filter...</Skeleton>
                        <Skeleton className="w-3/4 h-[1000px] p-5" >Loading products...</Skeleton>
                    </div>
                    }
                >
                    <MainContent searchParams={searchParams} />
                </Suspense>

                <Image
                    src={"/footer-graphics.svg"}
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="footer graphics"
                    className="object-none"
                ></Image>
            </div>
        </div>
    );
}
