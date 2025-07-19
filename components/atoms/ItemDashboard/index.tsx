import Link from "next/link";

interface PropsItemDashboard {
  total: number,
  title: string,
  url: string
}

export default function ItemDashboard({ total, title, url }: Readonly<PropsItemDashboard>) {
  return (
    <div className="bg-blue-500 pt-3 w-52">
      <p className="text-white text-4xl px-4">{total}</p>
      <p className="text-white text-lg px-4 pt-4 pb-3">{title}</p>
      <Link href={url}>
        <div className="bg-blue-900 cursor-pointer text-white text-center">Lihat</div>
      </Link>
    </div>
  )
}
