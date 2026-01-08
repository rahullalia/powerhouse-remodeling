import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Powerhouse Remodeling | Phoenix Bathroom Remodels",
  description: "Transform your outdated bathroom in just 5 days. Licensed & insured with 13+ years experience. Free in-home estimates in Phoenix, AZ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Powerhouse Remodeling
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
              <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
            <Link
              href="#quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-lg font-semibold">Powerhouse Remodeling LLC</p>
            <p className="text-gray-400 mt-2">Phoenix, Arizona | Licensed & Insured</p>
            <p className="text-gray-400 mt-1">Serving 85035 + 35 mile radius</p>
            <p className="text-gray-500 mt-4 text-sm">&copy; {new Date().getFullYear()} Powerhouse Remodeling. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
