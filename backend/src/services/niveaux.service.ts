import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class NiveauxServices {
  static async create(data: { nom: string }) {
    return await prisma.niveaux.create({ data });
  }

  static async findAll() {
    return await prisma.niveaux.findMany();
  }

  static async findById(id: number) {
    return await prisma.niveaux.findUnique({ where: { id } });
  }

  static async update(id: number, data: { nom: string }) {
    return await prisma.niveaux.update({ where: { id }, data });
  }

  static async delete(id: number) {
    return await prisma.niveaux.delete({ where: { id } });
  }
}
