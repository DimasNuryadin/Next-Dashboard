export default function Header() {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="flex items-center justify-between">
        {/* Logo/Gambar di kiri */}
        {/* <img
          src="/logo.png" // Ganti dengan path gambar yang sesuai
          alt="Logo"
          className="h-10 w-10 object-cover rounded-full"
        /> */}

        {/* Link di kanan */}
        <nav className="flex space-x-6">
          <a href="/dashboard" className="hover:underline">
            Dashboard
          </a>
          <a href="/profile" className="hover:underline">
            Profile
          </a>
        </nav>
      </div>
    </header>
  )
}