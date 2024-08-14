import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const HowRampWorks = () => {
  return (
    <section className="section">
      <div className="container flex flex-col items-center">
        <h2 className="mb-16 header-2">How Ramp Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          <div>
            <a href={process.env.NEXT_PUBLIC_ADMIN_LINK ?? "#"} target="_blank">
              <Image
                alt="Set Up Your Store"
                src={"/how.png"}
                width={635}
                height={418}
                className="aspect-video rounded-md hover:-translate-y-2 transition duration-300"
              />
            </a>

            <div className="pt-5">
              <a
                className="inline-block hover:underline hover:text-primary transition"
                href={process.env.NEXT_PUBLIC_ADMIN_LINK ?? "#"}
                target="_blank"
              >
                <h4 className="font-semibold mb-1 lg:text-lg inline-flex gap-2 items-center">
                  Set Up Your Store <ArrowRight className="h-5" />
                </h4>
              </a>
              <p className="text-foreground/70 text-sm lg:text-base">
                Join, customize your storefront, and add products.
              </p>
            </div>
          </div>
          <div>
            <a href={process.env.NEXT_PUBLIC_ADMIN_LINK ?? "#"} target="_blank">
              <Image
                alt="Launch And Grow"
                src={"/how.png"}
                width={635}
                height={418}
                className="aspect-video rounded-md hover:-translate-y-2 transition duration-300"
              />
            </a>

            <div className="pt-5">
              <a
                href={process.env.NEXT_PUBLIC_ADMIN_LINK ?? "#"}
                target="_blank"
              >
                <h4 className="font-semibold mb-1 lg:text-lg inline-flex gap-2 items-center hover:text-primary transition">
                  Launch And Grow <ArrowRight className="h-5" />
                </h4>
              </a>
              <p className="text-foreground/70 text-sm lg:text-base">
                Start selling to millions of customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
