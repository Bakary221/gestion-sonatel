"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurSchema = void 0;
const zod_1 = require("zod");
exports.utilisateurSchema = zod_1.z.object({
    nom: zod_1.z.string().min(2),
    prenom: zod_1.z.string().min(2),
    email: zod_1.z.string().email(),
    telephone: zod_1.z.string().optional(),
    genre: zod_1.z.enum(["Homme", "Femme"]),
    login: zod_1.z.string().min(3, "Le login doit contenir au moins 3 caractères"),
    password: zod_1.z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères")
});
