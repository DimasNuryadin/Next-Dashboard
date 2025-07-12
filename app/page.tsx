import styles from "@/app/ui/home.module.css";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-18">
      <div className="flex pt-20">
        <div className="w-1/2">
          <h1 className="text-2xl/7">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="mt-6 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nobis sed omnis deleniti non praesentium. Alias, quis. Placeat magnam temporibus sapiente voluptas quia ipsa facere quidem distinctio. Esse, tempora aspernatur.</p>
          <Button tittle="Show Me Now" />
        </div>
        <div className="w-1/2">
          Gambar
        </div>
      </div>
      <div></div>
    </div>
  );
}
