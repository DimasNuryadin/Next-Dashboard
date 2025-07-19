export default async function Products({
  params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div>My Post: {slug}</div>
}
