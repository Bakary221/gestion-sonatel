import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PromoService {
  // Créer une promo
  static async create(data: { nom: string; annee: string }) {
    return await prisma.promo.create({ data });
  }

  // Lister toutes les promos
  static async findAll() {
    return await prisma.promo.findMany();
  }

  // Récupérer une promo par ID
  static async findById(id: number) {
    return await prisma.promo.findUnique({
      where: { id },
    });
  }

  // Mettre à jour une promo
  static async update(id: number, data: { nom: string; annee: string }) {
    return await prisma.promo.update({
      where: { id },
      data,
    });
  }

  // Supprimer une promo
  static async delete(id: number) {
    return await prisma.promo.delete({
      where: { id },
    });
  }

  // Récupérer les formateurs d'une promo
  static async findFormateursByPromo(id: number) {
    return await prisma.promo.findUnique({
      where: { id },
      include: { formateurs: true }, // Inclut les utilisateurs liés en tant que formateurs
    });
  }
}
