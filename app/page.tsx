// import styles from "@/app/ui/home.module.css";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">Admin Portal</h1>
        <p className="text-blue-100 mb-8 text-center">
          Selamat datang di halaman admin.<br />Silakan login untuk melanjutkan.
        </p>
        <Button tittle="Login" link="/signin" />
      </div>
    </div>
  );
}
