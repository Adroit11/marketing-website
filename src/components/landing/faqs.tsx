import { Button } from "../ui/button";

export const FAQS = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-center">
          <h6 className="mb-1 header-6 text-center">
            Frequently Asked Questions
          </h6>
          <h2 className="mb-8 header-2 text-center w-fit mx-auto">
            Do you have any questions?
          </h2>

          <div className="mb-16 w-full flex flex-col md:flex-row md:flex-wrap justify-center gap-x-8 gap-y-6 max-w-4xl">
            <div className="p-6 border border-slate-100/20 rounded-xl flex-1">
              <p className="font-semibold">Email:</p>
              <a className="text-primary" href="mailto:technology@joinramp.co">
                technology@joinramp.co
              </a>
            </div>
            <div className="p-6 border border-slate-100/20 rounded-xl flex-1">
              <p className="font-semibold">Phone:</p>
              <p className="text-primary pr-2">+234 2018891783</p>
            </div>
            <div className="p-6 border border-slate-100/20 rounded-xl flex-2 ">
              <p className="font-semibold">Business Address:</p>
              <p className="text-primary">
                1 Fatai Aina Close, Ojodu Estate, Ikeja, Lagos State.
              </p>
            </div>
          </div>

          <a
            href={process.env.NEXT_PUBLIC_RAMP_SHOP_LINK + "/contact-us"}
            target="_blank"
          >
            <Button className="px-7" size={"lg"}>
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
