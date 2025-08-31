"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  gradientColor = "hsl(0, 0%, 100%)", // New prop with default white
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
    gradientColor?: string; // Add to interface
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: `radial-gradient(20.7% 50% at 50% 0%, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
    LEFT: `radial-gradient(16.6% 43.1% at 0% 50%, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
    BOTTOM: `radial-gradient(20.7% 50% at 50% 100%, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
    RIGHT: `radial-gradient(16.6% 43.1% at 100% 50%, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
  };

  const highlight =
    "radial-gradient(75% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);

  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center transition duration-500 dark:bg-black/20 dark:hover:bg-black/30 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-full",
          hovered ? "transition-all duration-500" : ""
        )}
        style={{
          filter: "url(#blur)",
          opacity: hovered ? 1 : 0,
        }}
      >
        <motion.div
          className="h-full w-full absolute inset-0"
          style={{ background: movingMap[direction] }}
          animate={{
            background: hovered ? highlight : movingMap[direction],
          }}
          transition={
            hovered
              ? {
                  duration: 0.8,
                  ease: "easeOut",
                }
              : {
                  duration: duration,
                  ease: "easeInOut",
                }
          }
        />
      </motion.div>
      <div className={cn("relative z-10", className)}>{children}</div>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <filter id="blur" filterUnits="userSpaceOnUse">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          <feOffset dx="0" dy="0" result="outlineEffect" />
          <feComposite in="SourceGraphic" in2="outlineEffect" operator="over" />
        </filter>
      </svg>
    </Tag>
  );
} 