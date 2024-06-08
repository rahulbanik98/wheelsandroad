import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";
import { Providers } from "../store/providers";

export const metadata: Metadata = {
  title: "Wheels and Road",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
