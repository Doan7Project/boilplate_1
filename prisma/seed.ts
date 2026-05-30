import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

import { PrismaClient } from "@/src/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
const result = loadEnvConfig(process.cwd())

console.log('cwd =', process.cwd())
console.log('loadedEnvFiles =', result.loadedEnvFiles[0].path)
console.log('DATABASE_URL =', process.env.DATABASE_URL)

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing")
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL
  })
})

async function main() {
  await prisma.project.deleteMany()

  await prisma.project.createMany({
    data: [
      { title: "Thiết kế nội thất căn hộ Vinhomes" },
      { title: "Dự án văn phòng hiện đại" },
      { title: "Showroom nội thất HomeDecor" }
    ]
  })

  console.log("Seeder Project đã chạy xong!")
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })