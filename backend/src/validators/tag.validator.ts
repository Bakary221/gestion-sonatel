import { z } from 'zod';

export const TagSchema = z.object({
  libelle: z.string().min(1, { message: "Le libelle du tag est obligatoire" }),
});

export type TagInput = z.infer<typeof TagSchema>;
