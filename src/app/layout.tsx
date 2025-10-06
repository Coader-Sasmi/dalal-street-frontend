import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEBI Registered Research Recommendations | Dalal Street",
  description: "Stay informed with SEBI Registered Research Recommendations from Dalal Street to make smarter investment decisions with confidence.Transform your business with Netsqure. We are your trusted partner in navigating the digital landscape, offering expert guidance and exceptional services to help you thrive in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className="overflow-x-hidden">
      <body className="">
        <Header />
        <main className="overflow-x-hidden">
          {children}
        </main>
          <Link
          href="https://api.whatsapp.com/send?phone=919148638118"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-4 z-50 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-white w-6 h-6" />
        </Link>
        <Footer />
      </body>
    </html>
  );
}
