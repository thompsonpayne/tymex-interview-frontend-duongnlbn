import { Button } from "./ui/button";
import { ChevronDown, Globe, Menu } from "lucide-react";

const Header = () => {
    return (
        <div className="py-5 px-[20px] lg:px-[70px] bg-[rgba(23,22,26,0.7)] text-white flex justify-between items-center text-xs lg:text-sm font-bold">
            <div id="buttons" className="hidden md:visible md:flex gap-[2px] md:gap-[10px] lg:gap-[20px]">
                <Button variant="link">HOME</Button>
                <Button variant="link">ABOUT US</Button>
                <Button variant="link">OUR TEAMS</Button>
                <Button variant="link">MARKET PLACE</Button>
                <Button variant="link">ROAD MAP</Button>
                <Button variant="link">WHITE PAPER</Button>
            </div>
            <Menu className="md:hidden" />
            <div className="flex gap-2">
                <Button>Connect Wallet</Button>
                <Button variant="ghost">
                    <Globe />
                    <ChevronDown />
                </Button>
            </div>
        </div>
    );
};

export default Header;
