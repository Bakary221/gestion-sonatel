import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ReferentielService{

    static async findAll() {
        return await prisma.referentiel.findMany();
    }

    static async create(data: { nom: string }) {
        return await prisma.referentiel.create({ data });
    }

    static async findById(id: number) {
        return await prisma.referentiel.findUnique({ where: { id } });
    }

    static async update(id: number, data: { nom: string }) {
        return await prisma.referentiel.update({ where: { id }, data });
    }

    static async delete(id: number) {
        return await prisma.referentiel.delete({ where: { id } });
    }
}