import Sidebar from "@/components/moleculs/Sidebar"
import { Metadata } from "next"
import React from 'react'

export const metadata: Metadata = {
  title: "Payments",
  description: "Payments Page"
}

export default function PaymentsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid auto-cols-max grid-flow-col">
      <Sidebar />
      <div className="z-10">
        {children}
      </div>
    </div>
  )
}
