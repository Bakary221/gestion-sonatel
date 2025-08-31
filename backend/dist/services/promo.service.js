"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PromoService {
    // Créer une promo
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.promotion.create({ data });
        });
    }
    // Lister toutes les promos
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.promotion.findMany();
        });
    }
    // Récupérer une promo par ID
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.promotion.findUnique({
                where: { id },
            });
        });
    }
    // Mettre à jour une promo
    // Note: le schéma Prisma fourni exige `nbrRef` sur Promotion.
    // L'API attend donc le même objet que pour la création.
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.promotion.update({
                where: { id },
                data,
            });
        });
    }
    // Supprimer une promo
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.promotion.delete({
                where: { id },
            });
        });
    }
    // Récupérer les formateurs d'une promo
    static findFormateursByPromo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // IMPORTANT: le schéma Prisma que vous avez fourni pour vérification
            // ne définit pas de relation `formateurs` sur le modèle `Promotion`.
            // Appeler `prisma.promotion.findUnique({ include: { formateurs: true }})`
            // provoquerait une erreur au runtime si la relation n'existe pas.
            // Pour éviter une erreur inattendue ici, on retourne un objet avec
            // un tableau vide et un message indiquant la limitation.
            // Si vous voulez réellement lister des formateurs, ajoutez la relation
            // dans votre `schema.prisma` (e.g. `formateurs Utilisateur[]` et
            // la relation inverse sur `Utilisateur`), puis régénérez le client Prisma.
            return { formateurs: [] };
        });
    }
}
exports.PromoService = PromoService;
