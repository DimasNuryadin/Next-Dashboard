import EditClient from "./ClientComponent";

export default function Edit({ params }: Readonly<{ params: { slug: string } }>) {
  const { slug } = params;

  return (
    <EditClient slug={slug} />
  )
}
