"use client"

import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <img src="/images/blob-1.png" className="absolute mt-6 ml-4" alt="" />
      <div
        className="h-screen w-64 p-6 bg-white/20 backdrop-blur-md border-r border-white/30 shadow-lg flex flex-col items-center"
        style={{
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          borderRadius: '24px 0 0 24px',
        }}
      >
        <img src="/images/logo.png" alt="Logo" className="mb-8 w-34 h-20 object-contain" />
        <nav className="flex flex-col gap-4 w-full">
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/dashboard') ? 'bg-blue-600' : 'bg-black/65')}>
            <a
              href="/dashboard"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <img src="/icon/ic-home.svg" alt="Home" className="w-5 h-5" />
              <p>Home</p>
            </a>
          </div>
          <hr className="border-b-black my-4" />
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/category') ? 'bg-blue-600' : 'bg-black/65')}>
            <a
              href="/category"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <img src="/icon/ic-tag.svg" alt="Home" className="w-5 h-5" />
              <p>Category</p>
            </a>
          </div>
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/products') ? 'bg-blue-600' : 'bg-black/65')}>
            <a
              href="/products"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <img src="/icon/ic-list.svg" alt="Home" className="w-5 h-5" />
              <p>Products</p>
            </a>
          </div>
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/banks') ? 'bg-blue-600' : 'bg-black/65')}>
            <a
              href="/banks"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <img src="/icon/ic-bank.svg" alt="Home" className="w-5 h-5" />
              <p>Banks</p>
            </a>
          </div>
          <div className={clsx('rounded-lg p-2', pathname.startsWith('/payments') ? 'bg-blue-600' : 'bg-black/65')}>
            <a
              href="/payments"
              className="flex items-center gap-2 text-white text-base hover:text-white transition"
            >
              <img src="/icon/ic-money.svg" alt="Home" className="w-5 h-5" />
              <p>Payments</p>
            </a>
          </div>

        </nav>
      </div>
    </>
  );
}