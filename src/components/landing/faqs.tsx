import { Button } from "../ui/button";

export const FAQS = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-center">
          <h6 className="mb-1 header-6 text-center">
            Frequently Asked Questions
          </h6>
          <h2 className="mb-16 header-2 text-center w-fit mx-auto">
            Do you have any questions?
          </h2>

          <Button className="px-7" size={"lg"}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
