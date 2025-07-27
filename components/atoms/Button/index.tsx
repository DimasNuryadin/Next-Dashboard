'use client';
// import style from '@/components/atoms/Button/button.module.css'
import { useRouter } from 'next/navigation';

interface ButtonProps {
  tittle: string,
  link?: string,
  size?: 'small' | 'medium' | 'big',
  icon?: boolean
}

export default function Button(props: Readonly<Partial<ButtonProps>>) {
  const router = useRouter();
  const { tittle, link } = props;

  const submit = () => {
    if (link) {
      router.push(link);
    }
  }

  return (
    <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 hover:text-white transition-colors duration-200 cursor-pointer" onClick={submit}>{tittle}</button>
  )
}
