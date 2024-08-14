"use client";

import { ReactNode, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { usePathname } from "next/navigation";

const TiltProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    const tiltCards = document.querySelectorAll("#tilt");

    // @ts-ignore
    VanillaTilt.init(tiltCards, {
      reverse: false,
      max: 15,
      speed: 500,
      scale: 1,
      glare: true,
      reset: true,
      perspective: 1000,
      transition: true,
      "max-glare": 0.09,
      "glare-prerender": false,
      // gyroscope: true,
      // gyroscopeMinAngleX: -45,
      // gyroscopeMaxAngleX: 45,
      // gyroscopeMinAngleY: -45,
      // gyroscopeMaxAngleY: 45
    });
  }, [pathname]);

  return <div>{children}</div>;
};

export default TiltProvider;
