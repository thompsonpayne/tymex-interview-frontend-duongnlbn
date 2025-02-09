import { MessageSquareText, Phone } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
    return (
        <div className="bg-[#17161A] px-10 md:px-32">
            <div className="py-10  border-b border-[#3A3841]">
                <div className="w-full flex justify-between flex-wrap gap-20">
                    <div id="navigate-footer" className="">
                        <div className="text-xl font-bold pb-8">NAVIGATION</div>
                        <div className="flex gap-8">
                            <div className="nav-col space-y-4">
                                <div>Home</div>
                                <div>About us</div>
                                <div>Our teams</div>
                            </div>
                            <div className="nav-col space-y-4">
                                <div>Whitepaper</div>
                                <div>Market place</div>
                                <div>Road map</div>
                            </div>
                            <div className="nav-col space-y-4">
                                <div>FAQs</div>
                                <div>News</div>
                                <div>Community</div>
                            </div>
                        </div>
                    </div>
                    <div id="contact-us">
                        <div className="text-xl font-bold pb-8">CONTACT US</div>
                        <div className="space-y-4">
                            <div className="flex gap-8">
                                <Phone />
                                <div>012345678910</div>
                            </div>
                            <div className="flex gap-8">
                                <MessageSquareText />
                                <div>tymex-talent@tyme.com</div>
                            </div>
                        </div>
                    </div>
                    <div id="subscribe" className="w-min-[430px]">
                        <div className="text-xl font-bold pb-8">SUBSCRIBE TO RECEIVE OUR LATEST UPDATE</div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <Input placeholder="Your email address"></Input>
                            <Button className="!px-7">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-trade-mark" className="flex flex-col md:flex-row justify-between pt-10 pb-20 gap-4">
                <div>©2023 Tyme - Edit. All Rights reserved.</div>
                <div className="flex gap-5">
                    <div>Security</div>
                    <div>Legal</div>
                    <div>Privacy</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
