import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TagService {
  static async create(data: { libelle: string }) {
    return await prisma.tag.create({ data });
  }

  static async findAll() {
    return await prisma.tag.findMany();
  }

  static async findById(id: number) {
    return await prisma.tag.findUnique({ where: { id } });
  }

  static async update(id: number, data: { libelle: string }) {
    return await prisma.tag.update({ where: { id }, data });
  }

  static async delete(id: number) {
    return await prisma.tag.delete({ where: { id } });
  }
}
