"use client";

import { motion } from "motion/react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ContainerScrollSection() {
  return (
    <div className="relative z-20 -mt-150">
      {/* Container Scroll Animation Section */}
      <ContainerScroll
        titleComponent={
         <></>
        }
      >
        {/* Display the actual dash.png image */}
        <img
          src="/dash.png"
          alt="Trading Dashboard"
          className="w-full h-full object-cover rounded-2xl"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
} 