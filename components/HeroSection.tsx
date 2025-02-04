import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <>
            <div className="py-[80px] pl-[200px] flex">
                <div className="flex flex-col relative">
                    <Image src="/hero-section/new-tag.svg" alt="New" width={443} height={234} priority />
                    <Image
                        src="/hero-section/shop-tag.svg"
                        alt="Shop now!"
                        width={133}
                        height={53}
                        priority
                        className="absolute bottom-[15px] right-[60px]"
                    />
                </div>
                <div className="relative flex">
                    <Image
                        src="/hero-section/title-tag-shadow.svg"
                        alt="Arrival shadow"
                        width={636}
                        height={267}
                        priority
                        className="absolute -top-5 -right-6 z-0"
                    />
                    <Image
                        src="/hero-section/title-tag.svg"
                        alt="Arrival"
                        width={636}
                        height={267}
                        priority
                        className="top-0 left-0 z-10"
                    />
                </div>
            </div>
            <div style={{ backgroundImage: `url('/hero-section/lineup-bg.svg')` }} className="pl-[180px] py-8">
                <div id="heroes" className="flex gap-[60px]">
                    <div className="text-center">
                        <Image src="/hero-section/assassin.png" alt="assassin" width={200} height={168} priority />
                        <text className="font-semibold text-lg text-black pt-3">ASSASSIN</text>
                    </div>
                    <div className="text-center">
                        <Image src="/hero-section/neon-guy.png" alt="neon guy" width={200} height={168} priority />
                        <text className="font-semibold text-lg text-black pt-3">NEON GUY</text>
                    </div>
                    <div className="text-center">
                        <Image
                            src="/hero-section/mafia-england.png"
                            alt="mafia england"
                            width={200}
                            height={168}
                            priority
                        />
                        <div className="font-semibold text-lg text-black pt-3">MAFIA ENGLAND</div>
                    </div>
                    <div className="text-center">
                        <Image
                            src="/hero-section/basketball-girl.png"
                            alt="basketball girl"
                            width={200}
                            height={168}
                            priority
                        />
                        <div className="font-semibold text-lg text-black pt-3">BASKETBALL GIRL</div>
                    </div>
                    <div className="text-center pl-10">
                        <Image
                            src="/hero-section/dj.png"
                            alt="basketball girl"
                            width={471}
                            height={655}
                            priority
                            className="absolute bottom-0"
                        />
                        <div className="relative bottom-0 text-center">
                            <Image
                                src="/hero-section/paint.svg"
                                alt="basketball girl"
                                width={471}
                                height={655}
                                priority
                            />
                            <div className="font-semibold text-7xl text-white absolute bottom-[60px] left-[70px]">THE DJ</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
