import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Veux-tu Etre Ma Valentine",
  description:
    "Veux-tu Etre Ma Valentine is woven with the threads of devotion, each element carefully placed to create a tapestry of love with you as the sole inspiration. Every single detail was prudently considered, every pixel precision-placed to create a haven that whispers how I feel about you. The words and the very essence of this digital sanctuary was designed to envelop you in a warm embrace. As you wander through this curated space, I hope that you feel the love and intention that pours from every corner, every curve and every gentle nuance.",
  icons: "/logo.svg",
  authors: [{ name: "Olumide Akinsoyinu" }, { name: "CodeDreadnaught" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
