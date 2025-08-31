"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferentielSchema = void 0;
const zod_1 = require("zod");
exports.ReferentielSchema = zod_1.z.object({
    nom: zod_1.z.string().min(1, { message: "Le nom du profil est obligatoire" }),
});
