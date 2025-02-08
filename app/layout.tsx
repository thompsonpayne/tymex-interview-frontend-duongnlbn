import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { heroImgUrl } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
});

const interTight = Inter_Tight({
    variable: "--font-inter-tight",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Character Shop",
    description: "New arrival! Shop now!"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} ${interTight.variable} antialiased`}
            >
                <SpeedInsights />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImgUrl})` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative h-full">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
