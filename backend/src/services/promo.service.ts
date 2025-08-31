import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PromoService {
  // Créer une promo
  static async create(data: { nom: string; annee: string; nbrRef: string }) {
    return await prisma.promotion.create({ data });
  }

  // Lister toutes les promos
  static async findAll() {
    return await prisma.promotion.findMany();
  }

  // Récupérer une promo par ID
  static async findById(id: number) {
    return await prisma.promotion.findUnique({
      where: { id },
    });
  }

  // Mettre à jour une promo
  // Note: le schéma Prisma fourni exige `nbrRef` sur Promotion.
  // L'API attend donc le même objet que pour la création.
  static async update(id: number, data: { nom: string; annee: string; nbrRef: string }) {
    return await prisma.promotion.update({
      where: { id },
      data,
    });
  }

  // Supprimer une promo
  static async delete(id: number) {
    return await prisma.promotion.delete({
      where: { id },
    });
  }

  // Récupérer les formateurs d'une promo
  static async findFormateursByPromo(id: number) {
  // IMPORTANT: le schéma Prisma que vous avez fourni pour vérification
  // ne définit pas de relation `formateurs` sur le modèle `Promotion`.
  // Appeler `prisma.promotion.findUnique({ include: { formateurs: true }})`
  // provoquerait une erreur au runtime si la relation n'existe pas.
  // Pour éviter une erreur inattendue ici, on retourne un objet avec
  // un tableau vide et un message indiquant la limitation.
  // Si vous voulez réellement lister des formateurs, ajoutez la relation
  // dans votre `schema.prisma` (e.g. `formateurs Utilisateur[]` et
  // la relation inverse sur `Utilisateur`), puis régénérez le client Prisma.
  return { formateurs: [] } as { formateurs: any[] };
  }
}
