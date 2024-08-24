import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import TiltProvider from "@/providers/tiltProvider";
import { ThemeProvider } from "@/providers/theme";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ramp | New Customers, More Sales",
  description: "Ramp | New Customers, More Sales",
  openGraph: {
    title: "Ramp | New Customers, More Sales",
    description: "Ramp | New Customers, More Sales",
    siteName: "Ramp",
    images: {
      url: "http://res.cloudinary.com/dc9kfp5gt/image/upload/v1724451002/RampIcon/nk4lnmcd8vhwhet6mvn8.svg",
      width: 800,
      height: 600,
    },
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TiltProvider>{children}</TiltProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
