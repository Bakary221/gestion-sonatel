"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfilsSortie = exports.updateProfilsSortie = exports.getProfilsSortie = exports.createProfilsSortie = void 0;
const ProfilSortiService_1 = require("../services/ProfilSortiService");
const profilSortiValidator_1 = require("../validators/profilSortiValidator");
const profilSortiService = ProfilSortiService_1.ProfilSortiService.getInstance();
const createProfilsSortie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = profilSortiValidator_1.profilSortieSchema.parse(req.body);
        console.log(data);
        const profil = yield profilSortiService.insert(data);
        res.status(201).json(profil);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.createProfilsSortie = createProfilsSortie;
const getProfilsSortie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield profilSortiService.selectAll();
        res.json(profiles);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getProfilsSortie = getProfilsSortie;
const updateProfilsSortie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const data = profilSortiValidator_1.profilSortieSchema.parse(req.body);
        const users = yield profilSortiService.update(Number(id), data);
        res.json(users);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.updateProfilsSortie = updateProfilsSortie;
const deleteProfilsSortie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        yield profilSortiService.delete(Number(id));
        res.status(200).json({ message: `Utilisateur avec id ${id} supprimé avec succès` });
    }
    catch (error) {
        res.status(400).json({ message: "Erreur lors de la suppression", error });
    }
});
exports.deleteProfilsSortie = deleteProfilsSortie;
