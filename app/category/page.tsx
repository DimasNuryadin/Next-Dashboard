"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

interface PropsCategory {
  id: number,
  name: string
}

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, [])

  async function fetchCategories() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/category`);
    const res = await data.json()
    setCategories(res.data);
  }

  async function handleDelete(id: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/category?id=${id}`, {
      method: "DELETE"
    })
    const data = await res.json();
    alert(`${data.data.name} telah dihapus`);
    fetchCategories();
  }

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
          {
            categories.map((item: PropsCategory) => {
              return (
                <tr key={item.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{item.id}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{item.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <Link href={`/category/edit/${item.id}`}>
                      <button type="button" className="cursor-pointer text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2">Edit</button>
                    </Link>
                    <button type="button" onClick={() => handleDelete(item.id)} className="cursor-pointer text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}
