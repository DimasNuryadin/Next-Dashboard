//  file helper yang biasanya digunakan untuk menginisialisasi dan men-share satu instance PrismaClient
// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // optional, bisa dilog query-nya
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

