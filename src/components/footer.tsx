import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-14">
      <hr className="mb-8 border-border" />
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 ">
          <div className="block text-sm text-foreground/70  text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline text-primary">
              Ramp™
            </Link>
            . All Rights Reserved.
          </div>

          <ul className="flex gap-6 items-center text-sm text-foreground/70 ">
            <li>
              <a
                href={process.env.NEXT_PUBLIC_RAMP_SHOP_LINK + "/terms"}
                target="_blank"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href={process.env.NEXT_PUBLIC_RAMP_SHOP_LINK + "/privacy"}
                target="_blank"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href={process.env.NEXT_PUBLIC_RAMP_SHOP_LINK + "/refund"}
                target="_blank"
              >
                Refund
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
