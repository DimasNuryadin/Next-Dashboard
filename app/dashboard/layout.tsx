import Sidebar from "@/components/moleculs/Sidebar"
import { Metadata } from "next"
import { authOptions } from "../lib/authOptions";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page"
}

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="grid auto-cols-max grid-flow-col">
      <Sidebar />
      {children}
    </div>
  )
}
