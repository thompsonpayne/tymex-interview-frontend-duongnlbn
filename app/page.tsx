import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import Image from "next/image";

async function getData() {
    const baseUrl = process.env.API_BASE_URL;
    const response = await fetch(`${baseUrl}/api/products`, { next: { revalidate: 60 } }); // Cache data for 60 second only/ revalidate after 60 seconds
    return response.json();
}

export default async function Home() {
    const data = await getData();
    console.log({ data });
    return (
        <div className="">
            <HeroSection />
            <div className="w-full relative" style={{ backgroundImage: `url('/main-bg.png')` }}>
                <MainContent />

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
