import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CompetenceService{

    static async findAll() {
        return await prisma.competence.findMany();
    }

    static async create(data: { description: string , niveauxId: number}) {
        return await prisma.competence.create({ data });
    }

    static async findById(id: number) {
        return await prisma.competence.findUnique({ where: { id } });
    }

    static async update(id: number, data: { description: string }) {
        return await prisma.competence.update({ where: { id }, data });
    }

    static async delete(id: number) {
        return await prisma.competence.delete({ where: { id } });
    }

    static async findNiveau() {
        return await prisma.competence.findMany({
            select:{niveaux:{select :{nom:true}}}
        });
    }
}