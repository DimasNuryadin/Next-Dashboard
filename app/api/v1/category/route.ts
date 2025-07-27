import { prisma } from "@/app/lib/prisma";
import { CategoryTypes } from "@/services/data-types";
import { NextRequest, NextResponse } from 'next/server';


export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json({ 
    message: 'Success',
    data: categories
  })
}

export async function POST(req: NextRequest) {
  const body: CategoryTypes = await req.json();
  const { name, description } = body;

  if (!name) {
    return NextResponse.json({ error: 'Nama wajib diisi' }, { status: 400 })
  }

  const categories = await prisma.category.create({
    data: {name, description}
  })

  return NextResponse.json(categories, { status: 201 })
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = parseInt(searchParams.get('id') ?? '')
  const body: CategoryTypes = await request.json();
  const { name, description } = body;

  const categories = await prisma.category.update({
    where: { id },
    data: { name, description}
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