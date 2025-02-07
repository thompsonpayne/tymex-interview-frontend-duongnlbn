import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/main-content";
import { Suspense } from "react";
import Image from "next/image";
export default function Home({ searchParams }: { searchParams: Promise<URLSearchParams> }) {
    return (
        <div className="">
            <HeroSection />
                {Date.now()}
            <div className="w-full relative" style={{ backgroundImage: `url('/main-bg.png')` }}>
                <Suspense fallback={"Loading..."}>
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
