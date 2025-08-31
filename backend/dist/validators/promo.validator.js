"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoSchema = void 0;
const zod_1 = require("zod");
// Schéma pour la création/mise à jour d'une promo
exports.PromoSchema = zod_1.z.object({
    nom: zod_1.z.string().min(1, { message: "Le nom est obligatoire" }),
    annee: zod_1.z.string().min(1, { message: "L'année est obligatoire" }),
    nbrRef: zod_1.z.string().min(1, { message: "Le nombre de référentiels est obligatoire" }),
});
