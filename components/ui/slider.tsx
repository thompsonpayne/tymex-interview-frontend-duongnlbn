"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn("relative flex w-full touch-none select-none items-center", className)}
        {...props}
    >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" >
            <SliderPrimitive.Range className="absolute h-full bg-primary" style={{
          background: "linear-gradient(91.27deg, rgba(218, 69, 143, 0) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0) 102.8%)"
        }}/>
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
            style={{
              background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 84, 238, 0.2) 100%)",
              boxShadow: "0px 0px 16px 3px rgba(218, 64, 163, 0.53)"

            }}
            className="block h-6 w-6 rounded-full border border-primary/50 bg- shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        />
        <SliderPrimitive.Thumb
            style={{
              background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 84, 238, 0.2) 100%)",
              boxShadow: "0px 0px 16px 3px rgba(218, 64, 163, 0.53)"

            }}
            className="block h-6 w-6 rounded-full border border-primary/50 bg- shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        />
    </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
