import Image from "next/image";

const HeroSection = () => {
    return (
        <>
            <div className="py-[30px] md:py-[80px] flex">
                <Image
                    src="/hero-section/title-text.svg"
                    alt="New"
                    width={443}
                    height={234}
                    priority
                    className="w-full h-auto pl-[120px] pr-[100px] md:pr-[200px] lg:pr-[400px] xl:pr-[700px]"
                />
            </div>
            <div
                style={{ backgroundImage: `url('/hero-section/lineup-bg.svg')` }}
                className="xl:px-[150px] py-8 bg-repeat-x flex justify-evenly gap-0 md:gap-10 md:flex-nowrap flex-wrap bg-cover"
            >
                <div id="heroes" className="flex justify-between gap-1 sm:gap-5 md:gap-10">
                    <div className="text-center">
                        <Image src="/hero-section/assassin.png" alt="assassin" width={200} height={168} priority />
                        {/* <div className="font-semibold text-lg text-black pt-3">ASSASSIN</div> */}
                    </div>
                    <div className="text-center">
                        <Image src="/hero-section/neon-guy.png" alt="neon guy" width={200} height={168} priority />
                    </div>
                    <div className="text-center">
                        <Image
                            src="/hero-section/mafia-england.png"
                            alt="mafia england"
                            width={200}
                            height={168}
                            priority
                        />
                    </div>
                    <div className="text-center">
                        <Image
                            src="/hero-section/basketball-girl.png"
                            alt="basketball girl"
                            width={200}
                            height={168}
                            priority
                        />
                    </div>
                </div>
                <div className="relative text-center w-4/12">
                    <Image
                        src="/hero-section/dj.png"
                        alt="basketball girl"
                        width={471}
                        height={655}
                        priority
                        className="absolute -bottom-[30px]"
                    />
                    <div className="relative text-center w-full h-[200px] ">
                        <Image src="/hero-section/paint.svg" alt="paint" fill className="m-auto w-full h-auto " />
                        <Image
                            src="/hero-section/the-dj-text.svg"
                            alt="paint"
                            width={200}
                            height={200}
                            className="absolute inset-0 m-auto w-2/4 h-auto pr-[20px]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
