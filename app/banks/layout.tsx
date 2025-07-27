import Sidebar from "@/components/moleculs/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banks",
  description: "Banks Page"
}

export default function BanksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid auto-cols-max grid-flow-col">
      <Sidebar />
      <div className="z-10">
        {children}
      </div>
    </div>
  )
}
