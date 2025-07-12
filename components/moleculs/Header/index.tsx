import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white px-28 py-4 shadow">
      <div className="flex items-center justify-between">
        <Link href="/">
          <img
            className="cursor-pointer"
            src="/images/logo.png"
            alt="Logo"
          />
        </Link>

        <nav className="flex space-x-6">
          <Link href="/showcase" className="text-blue-950 transition duration-300 hover:text-blue-600">
            Showcase
          </Link>
          <Link href="/catalog" className="text-blue-950 transition duration-300 hover:text-blue-600">
            Catalog
          </Link>
          <Link href="/delivery" className="text-blue-950 transition duration-300 hover:text-blue-600">
            Delivery
          </Link>
          <Link href="/rewards" className="text-blue-950 transition duration-300 hover:text-blue-600">
            Rewards
          </Link>
        </nav>
      </div>
    </header>
  )
}