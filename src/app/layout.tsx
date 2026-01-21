import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    metadataBase: new URL("https://offer.phoenixremodelingaz.com"),
    title: {
        default: "Powerhouse Remodeling | Phoenix Bathroom Remodels",
        template: "%s | Powerhouse Remodeling"
    },
    description: "Transform your outdated bathroom in just 5 days. Licensed & insured with 13+ years experience. Free in-home estimates in Phoenix, AZ.",
    keywords: ["bathroom remodel phoenix", "phoenix bathroom renovation", "one day bath remodel", "custom bathroom design", "contractors phoenix", "powerhouse remodeling", "bathroom makeover"],
    authors: [{ name: "Powerhouse Remodeling" }],
    creator: "Powerhouse Remodeling",
    publisher: "Powerhouse Remodeling",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Complete Bathroom Remodel for $5,000 | Phoenix, AZ",
        description: "Transform your bathroom in 5 days or less. Licensed, insured, and 100% satisfaction guaranteed. Get your free quote today.",
        url: "https://offer.phoenixremodelingaz.com",
        siteName: "Powerhouse Remodeling",
        images: [
            {
                url: "/images/gallery/1.jpg",
                width: 1200,
                height: 630,
                alt: "Modern Bathroom Renovation by Powerhouse Remodeling",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Phoenix Bathroom Remodels - 5 Day Turnaround",
        description: "Transform your bathroom for $5,000. Licensed & Insured. trusted by Phoenix homeowners.",
        images: ["/images/gallery/1.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://offer.phoenixremodelingaz.com",
    },
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
