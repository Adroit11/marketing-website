import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-14">
      <hr className="mb-8 border-border sm:mx-auto" />
      <div className="block text-sm text-foreground/70  text-center">
        © {new Date().getFullYear()}{" "}
        <Link href="/" className="hover:underline text-primary">
          Ramp™
        </Link>
        . All Rights Reserved.
      </div>
    </footer>
  );
};
