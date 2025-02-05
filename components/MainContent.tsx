"use client"
import { useState } from "react";
import { Slider } from "./ui/slider";

const MainContent = () => {
    const [sliderValue, setSliderValue] = useState([25, 100]);
    return (
        <div className="px-10 py-5">
            <Slider value={sliderValue} onValueChange={(value) => setSliderValue(value)} max={100} step={1} />
        </div>
    );
};

export default MainContent;
