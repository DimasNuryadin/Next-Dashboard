import { use } from "react";
import EditClient from "./ClientComponent";

export default function Edit({ params }: Readonly<{ params: Promise<{ slug: number }> }>) {
  const { slug } = use(params);

  return (
    <EditClient slug={slug} />
  )
}
