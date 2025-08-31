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
exports.deleteNiveau = exports.updateNiveau = exports.getNiveau = exports.getNiveaux = exports.createNiveau = void 0;
const niveaux_service_1 = require("../services/niveaux.service");
const niveaux_validator_1 = require("../validators/niveaux.validator");
const createNiveau = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = niveaux_validator_1.NiveauxSchema.parse(req.body);
        const niveau = yield niveaux_service_1.NiveauxServices.create(data);
        res.status(201).json(niveau);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.createNiveau = createNiveau;
const getNiveaux = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const niveau = yield niveaux_service_1.NiveauxServices.findAll();
        res.json(niveau);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getNiveaux = getNiveaux;
const getNiveau = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const niveau = yield niveaux_service_1.NiveauxServices.findById(Number(id));
        if (!niveau) {
            return res.status(404).json({ error: 'Niveau non trouvé' });
        }
        res.json(niveau);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getNiveau = getNiveau;
const updateNiveau = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = niveaux_validator_1.NiveauxSchema.parse(req.body);
        const niveau = yield niveaux_service_1.NiveauxServices.update(Number(id), data);
        res.json(niveau);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.updateNiveau = updateNiveau;
const deleteNiveau = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield niveaux_service_1.NiveauxServices.delete(Number(id));
        res.status(204).send();
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.deleteNiveau = deleteNiveau;
