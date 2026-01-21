import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    metadataBase: new URL("https://offer.phoenixremodelingaz.com"),
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
            <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
                {children}
            </body>
        </html>
    );
}
