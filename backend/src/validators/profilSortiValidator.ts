import { z } from 'zod';

export const profilSortieSchema = z.object({
  nom: z.string().min(1, { message: "Le nom du profil de sortie est obligatoire" }),
})