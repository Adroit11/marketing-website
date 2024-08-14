import Image from "next/image";
import { Button } from "../ui/button";

export const LandingHero = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center text-center pt-24 pb-10">
          <h1 className="mb-5 text-4xl lg:text-6xl font-semibold max-w-3xl tracking-normal !leading-[110%]">
            The best software partner for your business
          </h1>
          <p className="mb-10 text-lg lg:text-xl text-foreground/70 max-w-2xl">
            Set up your store, get access to a smooth payment flow and open up a
            new way to get your next big sales all on Ramp.
          </p>

          <div className="mb-[52px] md:mb-[102px] flex flex-wrap gap-x-2 gap-y-4 items-center justify-center">
            <Button className="px-14 py-6 text-base" size={"lg"}>
              Get Started
            </Button>
            <Button className="text-base py-6" variant={"link"} size={"lg"}>
              View Products
            </Button>
          </div>

          <div className="w-fit shadow-lg rounded-lg overflow-hidden">
            <Image src={"/ramp_web.webp"} alt="" width={2800} height={15700} />
          </div>
        </div>
      </div>
    </section>
  );
};
