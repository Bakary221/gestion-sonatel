import { z } from 'zod';

export const ReferentielSchema = z.object({
  nom: z.string().min(1, { message: "Le nom du profil est obligatoire" }),
});

export type ProfileInput = z.infer<typeof ReferentielSchema>;
