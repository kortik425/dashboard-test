import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App Dashboard",
  description: "Generic Dashboard that fetch data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
