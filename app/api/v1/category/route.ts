import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const categories = await prisma.category.findMany();
  console.log(categories)
  return NextResponse.json({ 
    message: 'Success',
    data: categories
  })
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  if (!name) {
    return NextResponse.json({ error: 'Nama wajib diisi' }, { status: 400 })
  }

  const categories = await prisma.category.create({
    data: {name}
  })

  return NextResponse.json(categories, { status: 201 })
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = parseInt(searchParams.get('id') ?? '')
  const { name } = await request.json()

  const categories = await prisma.category.update({
    where: { id },
    data: { name}
  })
  return NextResponse.json(categories, {status: 200})
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = parseInt(searchParams.get('id') ?? '')

  const categories = await prisma.category.delete({
    where: {id}
  })
  return NextResponse.json({ message: 'Kategori dihapus', categories })
}