import { z } from 'zod';

export const utilisateurSchema = z.object({
    nom: z.string().min(2),
    prenom: z.string().min(2),
    email: z.string().email(),
    telephone: z.string().optional(),
    genre: z.enum(["Homme", "Femme"]),
    login: z.string().min(3, "Le login doit contenir au moins 3 caractères"),
    password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères")
})