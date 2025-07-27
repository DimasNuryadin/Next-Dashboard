export default async function ProductsDetail({
  params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  return <div>My Post: {slug}</div>
}
