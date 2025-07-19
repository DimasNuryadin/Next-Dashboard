import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";
import Sidebar from "@/components/moleculs/Sidebar";

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
        <div className="grid auto-cols-max grid-flow-col">
          <Sidebar />
          <div className="z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
