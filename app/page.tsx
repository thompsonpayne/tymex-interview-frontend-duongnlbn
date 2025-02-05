import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import Image from "next/image";

async function getData() {
    const baseUrl = process.env.API_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/api/products`, { 
          next: { revalidate: 60 },
          // Add cache option to help with static generation
          cache: 'force-cache'
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    
        return response.json();
      } catch (error) {
        console.error('Fetch error:', error);
        return { products: [] }; // Return a default value instead of throwing
      }
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
