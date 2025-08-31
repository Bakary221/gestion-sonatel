import { z } from 'zod';

export const NiveauxSchema = z.object({
  nom: z.string().min(1, { message: "Le nom du niveau est obligatoire" }),
});

export type NiveauInput = z.infer<typeof NiveauxSchema>;
