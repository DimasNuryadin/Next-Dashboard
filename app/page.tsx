import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import Header from "@/components/moleculs/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
      <h2>Dimas Nuryadin</h2>
      <Image
        src="/hero-desktop.jpg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </>
  );
}
