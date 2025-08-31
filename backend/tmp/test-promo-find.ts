import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  try {
    const r = await prisma.promotion.findMany();
    console.log('OK', r);
  } catch (e) {
    console.error('ERR', e);
  } finally {
    await prisma.$disconnect();
  }
}

run();
