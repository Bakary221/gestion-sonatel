import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProfileService {
  static async create(data: { nomP: string }) {
    return await prisma.profil.create({ data });
  }

  static async findAll() {  
    return await prisma.profil.findMany();
  }

  static async findById(id: number) {
    return await prisma.profil.findUnique({ where: { id } }); 
  }

  static async update(id: number, data: { nomP: string }) {
    return await prisma.profil.update({ where: { id }, data });
  }

  static async delete(id: number) {
    return await prisma.profil.delete({ where: { id } });
  } 
}
