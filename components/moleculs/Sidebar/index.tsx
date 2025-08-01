"use client"

import clsx from "clsx";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <Image src="/images/blob-1.png" className="absolute mt-6 ml-4" alt="Blob" width={620} height={620} />
      <div
        className="h-screen w-64 p-6 bg-white/20 backdrop-blur-md border-r border-white/30 shadow-lg flex flex-col items-center"
        style={{
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          borderRadius: '24px 0 0 24px',
        }}
      >
        <Image src="/images/logo.png" alt="Logo" className="mb-8 w-34 h-20 object-contain" width={100} height={70} />
        <nav className="flex flex-col gap-4 w-full">
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/dashboard') ? 'bg-blue-600' : 'bg-black/65')}>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <Image src="/icon/ic-home.svg" alt="Home" width={19} height={19} />
              <p>Home</p>
            </Link>
          </div>
          <hr className="border-b-black my-4" />
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/category') ? 'bg-blue-600' : 'bg-black/65')}>
            <Link
              href="/category"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <Image src="/icon/ic-tag.svg" alt="Home" width={19} height={19} />
              <p>Category</p>
            </Link>
          </div>
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/products') ? 'bg-blue-600' : 'bg-black/65')}>
            <Link
              href="/products"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <Image src="/icon/ic-list.svg" alt="Home" width={19} height={19} />
              <p>Products</p>
            </Link>
          </div>
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/banks') ? 'bg-blue-600' : 'bg-black/65')}>
            <Link
              href="/banks"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <Image src="/icon/ic-bank.svg" alt="Home" width={19} height={19} />
              <p>Banks</p>
            </Link>
          </div>
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/payments') ? 'bg-blue-600' : 'bg-black/65')}>
            <Link
              href="/payments"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <Image src="/icon/ic-money.svg" alt="Home" width={19} height={19} />
              <p>Payments</p>
            </Link>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/signin" })}
            className="mt-12 text-center cursor-pointer rounded-lg p-2 bg-black/65 text-white text-base hover:text-white transition">
            Logout
          </button>
        </nav>
      </div>
    </>
  );
}