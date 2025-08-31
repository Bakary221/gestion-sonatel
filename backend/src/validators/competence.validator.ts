import {z} from "zod";

export const competenceSchema = z.object({
    description: z.string().min(1, { message: "La description du competence est obligatoire" }),
    niveauxId: z.number()
});

export type competenceInput = z.infer<typeof competenceSchema>