import "./globals.css";
import "./app.css";

export const metadata = {
  title: "Home - Fundedbits",
  // description: "Shop from our official merch store",
};

import { Navbar } from "@/containers";
import { Footer } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="Geist bg-[#000713] text-[#FFFFFF]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
