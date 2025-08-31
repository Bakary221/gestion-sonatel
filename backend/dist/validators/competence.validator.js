"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.competenceSchema = void 0;
const zod_1 = require("zod");
exports.competenceSchema = zod_1.z.object({
    description: zod_1.z.string().min(1, { message: "La description du competence est obligatoire" }),
    niveauxId: zod_1.z.number()
});
