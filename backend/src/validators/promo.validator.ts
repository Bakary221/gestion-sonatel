import { z } from 'zod';

// Schéma pour la création/mise à jour d'une promo
export const PromoSchema = z.object({
  nom: z.string().min(1, { message: "Le nom est obligatoire" }),
  annee: z.string().min(1, { message: "L'année est obligatoire" }),
});

// Type TypeScript généré à partir du schéma
export type PromoInput = z.infer<typeof PromoSchema>;
