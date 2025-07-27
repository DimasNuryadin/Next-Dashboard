import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

interface CategoryInput {
  name: string
}

export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json({ 
    message: 'Success',
    data: categories
  })
}

export async function POST(req: NextRequest) {
  const body: CategoryInput = await req.json();
  const { name } = body;

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
  const body: CategoryInput = await request.json();
  const { name } = body;

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