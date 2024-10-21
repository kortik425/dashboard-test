import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";

export const metadata: Metadata = {
  title: "My App Dashboard",
  description: "Generic Dashboard that fetch data",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-primary",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`antialiased ${spaceGrotesk.className} flex`}>
        <Sidebar />
        <main className="mt-24 md:mt-4">{children}</main>
      </body>
    </html>
  );
}
