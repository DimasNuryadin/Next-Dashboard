"use client";
import { usePathname } from 'next/navigation'

export default function Dashboard() {
  const pathname = usePathname()

  return (
    <div>Dashboard
      <p>Current pathname: {pathname}</p>
    </div>
  )
}
