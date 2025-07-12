'use client';
import style from '@/components/atoms/Button/button.module.css'
import { useRouter } from 'next/navigation';

interface ButtonProps {
  tittle: string,
  link?: string,
  size?: 'small' | 'medium' | 'big',
  icon?: boolean
}

export default function Button(props: Readonly<Partial<ButtonProps>>) {
  const router = useRouter();
  const { tittle, link, icon, size } = props;

  const submit = () => {
    if (link) {
      router.push(link);
    }
  }

  return (
    <button className={style.btn} onClick={submit}>{tittle}</button>
  )
}
