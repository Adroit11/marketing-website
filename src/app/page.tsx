import { Footer } from "@/components/footer";
import { FAQS } from "@/components/landing/faqs";
import { LandingHero } from "@/components/landing/hero";
import { HowRampWorks } from "@/components/landing/howRampWorks";
import { WhyChooseRamp } from "@/components/landing/whyChoose";
import { TopNav } from "@/components/main-nav";

export default function Home() {
  return (
    <div>
      <TopNav />
      <main className="py-[80px]">
        <LandingHero />

        <section className="section">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-5 header-2">
                Drive growth on the platform built for e-commerce success.
              </h2>
              <p className="lg:text-lg text-foreground/70 max-w-2xl">
                We give you the platform and the customers, you take control and
                do more for your business with ease.
              </p>
            </div>
          </div>
        </section>

        <HowRampWorks />

        <WhyChooseRamp />

        <FAQS />
      </main>
      <Footer />
    </div>
  );
}
