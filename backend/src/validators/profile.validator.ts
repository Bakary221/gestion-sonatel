import { z } from 'zod';

export const ProfileSchema = z.object({
  nomP: z.string().min(1, { message: "Le nom du profil est obligatoire" }),
});

export type ProfileInput = z.infer<typeof ProfileSchema>;
