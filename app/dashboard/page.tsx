"use client"

import ItemDashboard from "@/components/atoms/ItemDashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <p>Loading...</p>;

  if (!session) {
    router.push('/signin');
    return null;
  }

  return (
    <div className="container mx-auto px-12 py-13 z-10">
      <h1 className="text-blue-900 font-medium text-4xl mb-10">Beranda</h1>
      <div className="grid grid-cols-3 gap-6">
        <ItemDashboard total={5} title="Category" url="/category" />
        <ItemDashboard total={5} title="Category" url="/category" />
        <ItemDashboard total={5} title="Category" url="/category" />
      </div>
    </div>
  )
}
