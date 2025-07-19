import Link from "next/link";

export default function Category() {
  return (
    <div className="container mx-auto px-12 py-13">
      <h1 className="text-blue-900 font-medium text-4xl mb-10">Category</h1>
      <Link href="/category/tambah" >
        <div className="flex text-center gap-2 py-2 px-2 bg-blue-800 text-white font-medium">
          <img src="/icon/ic-plus.svg" alt="Tambah" />
          Tambah
          { }
        </div>
      </Link>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50 divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2 whitespace-nowrap">1</td>
            <td className="px-4 py-2 whitespace-nowrap">Pants</td>
            <td className="px-4 py-2 whitespace-nowrap">
              <Link href="/category/1" className="bg-cyan-500 text-white p-2">Edit</Link>
              <Link href="/category/1" className="bg-red-500 text-white p-2">Delete</Link>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
