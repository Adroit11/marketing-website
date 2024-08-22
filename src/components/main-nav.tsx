"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ThemeToggle } from "@/providers/theme";
import { useEffect, useState } from "react";
import Image from "next/image";

export const TopNav = () => {
  const [position, setPosition] = useState<"top" | "down" | "up">("top");

  useEffect(() => {
    let lastVal = 0;

    function onPageScroll() {
      const y = window.scrollY;

      if (y > lastVal) {
        setPosition("down");
      }
      if (y < lastVal) {
        setPosition("up");
      }
      if (y === 0) {
        setPosition("top");
      }
      lastVal = y;
    }

    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header
      className={cn("fixed top-0 inset-x-0 z-50 transition duration-300", {
        "bg-background/70 shadow-md dark:bg-[#1b1b1b90] dark:shadow-none ":
          position !== "top",
      })}
      style={{
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container">
        <div className="flex justify-between items-center py-5">
          {/* <p className="font-serif font-semibold text-base md:text-lg">RAMP</p> */}
          <div>
            <Image alt="RAMP" src={"/logo_brand.png"} width={90} height={80} />
          </div>

          <div className="flex gap-4 items-center">
            {/* <ThemeToggle /> */}
            <a href={process.env.NEXT_PUBLIC_RAMP_SHOP_LINK} target="_blank">
              <Button className="sm:px-7">Get Started</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
