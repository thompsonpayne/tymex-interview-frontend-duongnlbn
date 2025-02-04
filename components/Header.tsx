import React from "react";
import { Button } from "./ui/button";
import { ChevronDown, Globe } from "lucide-react";

const Header = () => {
    return (
        <div className="py-5 px-[150px] bg-[rgba(23,22,26,0.7)] text-white flex justify-between items-center text-sm font-bold">
            <div id="buttons" className="flex gap-[60px] ">
                <Button variant="link">HOME</Button>
                <Button variant="link">ABOUT US</Button>
                <Button variant="link">OUR TEAMS</Button>
                <Button variant="link">MARKET PLACE</Button>
                <Button variant="link">ROAD MAP</Button>
                <Button variant="link">WHITE PAPER</Button>
            </div>
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
