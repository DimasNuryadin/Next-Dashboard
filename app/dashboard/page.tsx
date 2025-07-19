import ItemDashboard from "@/components/atoms/ItemDashboard";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-12 py-13">
      <h1 className="text-blue-900 font-medium text-4xl mb-10">Beranda</h1>
      <div className="grid grid-cols-3 gap-6">
        <ItemDashboard total={5} title="Category" url="/category" />
        <ItemDashboard total={5} title="Category" url="/category" />
        <ItemDashboard total={5} title="Category" url="/category" />
      </div>
    </div>
  )
}
