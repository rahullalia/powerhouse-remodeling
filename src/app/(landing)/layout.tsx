import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Special Offer - Powerhouse Remodeling",
    description: "Complete Bathroom Remodel for $5,000. Limited time offer.",
};

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-white min-h-screen">
            {children}
        </div>
    );
}
