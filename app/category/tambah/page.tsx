"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

export default function Tambah() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  async function submit() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/category`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description })
    });
    const data = await res.json();
    if (res.status === 201) {
      router.push("/category");
      alert(`Berhasil Tambah ${data.name}`)
    }
  }

  return (
    <div className="container mx-auto px-12 py-13">
      <h1 className="text-blue-900 font-medium text-4xl mb-10">Add Category</h1>

      {/* <form className="max-w-sm mx-auto"> */}
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-5">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
        <textarea name="description" id="description" cols={30} rows={10} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setDescription(e.target.value)} >
        </textarea>
      </div>
      <button onClick={submit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      {/* </form> */}
    </div>
  )
}
