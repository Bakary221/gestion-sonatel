import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProfileService {
  static async create(data: { nomP: string }) {
    return await prisma.profile.create({ data });
  }

  static async findAll() {
    return await prisma.profile.findMany();
  }

  static async findById(id: number) {
    return await prisma.profile.findUnique({ where: { id } });
  }

  static async update(id: number, data: { nomP: string }) {
    return await prisma.profile.update({ where: { id }, data });
  }

  static async delete(id: number) {
    return await prisma.profile.delete({ where: { id } });
  }
}
