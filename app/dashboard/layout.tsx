import Sidebar from "@/components/moleculs/Sidebar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page"
}

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid auto-cols-max grid-flow-col">
      <Sidebar />
      {children}
    </div>
  )
}
