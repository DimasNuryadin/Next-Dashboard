import Sidebar from "@/components/moleculs/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products Page"
}

export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid auto-cols-max grid-flow-col">
      <Sidebar />
      <div className="z-10">
        {children}
      </div>
    </div>
  )
}
