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
exports.deleteCompetence = exports.updateCompetence = exports.getCompetence = exports.createCompetences = exports.getCompetences = void 0;
const competence_service_1 = require("../services/competence.service");
const competence_validator_1 = require("../validators/competence.validator");
const getCompetences = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const competences = yield competence_service_1.CompetenceService.findAll();
        res.json(competences);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getCompetences = getCompetences;
const createCompetences = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = competence_validator_1.competenceSchema.parse(req.body);
        const competence = yield competence_service_1.CompetenceService.create(data);
        res.status(201).json(competence);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.createCompetences = createCompetences;
const getCompetence = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const competence = yield competence_service_1.CompetenceService.findById(Number(id));
        if (!competence) {
            return res.status(404).json({ error: 'Profil non trouvé' });
        }
        res.json(competence);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getCompetence = getCompetence;
const updateCompetence = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = competence_validator_1.competenceSchema.parse(req.body);
        const profile = yield competence_service_1.CompetenceService.update(Number(id), data);
        res.json(profile);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.updateCompetence = updateCompetence;
const deleteCompetence = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield competence_service_1.CompetenceService.delete(Number(id));
        res.status(204).send();
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.deleteCompetence = deleteCompetence;
