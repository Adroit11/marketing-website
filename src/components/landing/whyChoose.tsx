"use client";

import {
  ChartColumnIncreasing,
  CreditCard,
  Layers,
  ReceiptText,
  Rocket,
  Scaling,
} from "lucide-react";
import { useState } from "react";

export const WhyChooseRamp = () => {
  const [list] = useState([
    {
      label: "Unified Store Management",
      desc: "Seamlessly oversee products, inventory, and orders from a single, intuitive dashboard.",
      icon: <Rocket className="w-7 h-7" />,
      bg: "#F03641",
    },
    {
      label: "Efficient Payment Processing",
      desc: "Ensure a smooth checkout experience for your customers.",
      icon: <CreditCard className="w-7 h-7" />,
      bg: "#7531CC",
    },
    {
      label: " Automated Financial Reporting",
      desc: "Get comprehensive financial reports on your sales. ",
      icon: <ReceiptText className="w-7 h-7" />,
      bg: "#345DEE",
    },
    {
      label: "Scalable Solutions",
      desc: "Ramp scales with your needs, offering features tailored to every stage of your business growth.",
      icon: <Scaling className="w-7 h-7" />,
      bg: "#FF7E47",
    },
    {
      label: "Crazy Sales Growth",
      desc: "Ramp puts your store in the face of every shopper online.",
      icon: <ChartColumnIncreasing className="w-7 h-7" />,
      bg: "#48A7FF",
    },
    {
      label: "Cutting Edge Technology",
      desc: "We are committed to making your business grow stronger and more successful by leveraging the latest tech.",
      icon: <Layers className="w-7 h-7" />,
      bg: "#F5497C",
    },
  ]);

  return (
    <section className="section">
      <div className="container">
        <h6 className="mb-1 header-6 text-center">Why choose RAMP?</h6>
        <h2 className="mb-16 header-2 text-center w-fit mx-auto">
          Key features of the product
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-12 lg:gap-y-14 py-10">
          {list.map((item, idx) => (
            <div key={idx} className="flex gap-5 items-start">
              <div
                className="mt-1 p-3.5 rounded-xl flex justify-center items-center"
                style={{ backgroundColor: item.bg }}
              >
                {item.icon}
              </div>

              <div>
                <h5 className="font-semibold mb-1.5">{item.label}</h5>
                <p className="text-sm text-foreground/70 leading-[150%]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
