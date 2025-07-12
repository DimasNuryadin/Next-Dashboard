import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";
import Header from "@/components/moleculs/Header";

export const metadata: Metadata = {
  title: "Home",
  description: "Web sederhana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
