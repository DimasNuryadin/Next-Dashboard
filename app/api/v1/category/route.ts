// app/api/hello/route.ts (dengan TypeScript)
import { NextRequest, NextResponse } from 'next/server';

let categories = [
  { id: 1, name: 'Pants' },
  { id: 2, name: 'Shirt' },
  { id: 3, name: 'K' },
]

export async function GET() {
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

  const newCategory = {
    id: categories.length ? categories[categories.length - 1].id + 1 : 1,
    name
  }

  categories.push(newCategory)
  return NextResponse.json(newCategory, { status: 201 })
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = parseInt(searchParams.get('id') ?? '')
  const { name } = await request.json()

  const index = categories.findIndex(c => c.id === id)
  if (index === -1) {
    return NextResponse.json({ error: 'Kategori tidak ditemukan' }, { status: 404 })
  }

  categories[index].name = name ?? categories[index].name
  return NextResponse.json(categories[index])
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = parseInt(searchParams.get('id') ?? '')

  const index = categories.findIndex(c => c.id === id)
  if (index === -1) {
    return NextResponse.json({ error: 'Kategori tidak ditemukan' }, { status: 404 })
  }

  const deleted = categories.splice(index, 1)
  return NextResponse.json({ message: 'Kategori dihapus', data: deleted[0] })
}