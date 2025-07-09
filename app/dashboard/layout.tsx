// app/dashboard/layout.tsx
import { ReactNode } from 'react'

export const metadata = {
  title: 'My App',
  description: 'Deskripsi singkat aplikasi',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', background: '#eee' }}>
        <p>Sidebar Dashboard</p>
      </aside>
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  )
}
