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
exports.deleteReferentiel = exports.updateReferentiel = exports.getReferentiel = exports.createReferentiel = exports.getReferentiels = void 0;
const referentiel_service_1 = require("../services/referentiel.service");
const referentiel_validator_1 = require("../validators/referentiel.validator");
const getReferentiels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const referentiels = yield referentiel_service_1.ReferentielService.findAll();
        res.json(referentiels);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getReferentiels = getReferentiels;
const createReferentiel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = referentiel_validator_1.ReferentielSchema.parse(req.body);
        const referentiel = yield referentiel_service_1.ReferentielService.create(data);
        res.status(201).json(referentiel);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.createReferentiel = createReferentiel;
const getReferentiel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const referentiel = yield referentiel_service_1.ReferentielService.findById(Number(id));
        if (!referentiel) {
            return res.status(404).json({ error: 'Profil non trouvé' });
        }
        res.json(referentiel);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getReferentiel = getReferentiel;
const updateReferentiel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = referentiel_validator_1.ReferentielSchema.parse(req.body);
        const profile = yield referentiel_service_1.ReferentielService.update(Number(id), data);
        res.json(profile);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.updateReferentiel = updateReferentiel;
const deleteReferentiel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield referentiel_service_1.ReferentielService.delete(Number(id));
        res.status(204).send();
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.deleteReferentiel = deleteReferentiel;
