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
exports.getFormateursByPromo = exports.deletePromo = exports.updatePromo = exports.getPromo = exports.getPromos = exports.createPromo = void 0;
const promo_service_1 = require("../services/promo.service");
const promo_validator_1 = require("../validators/promo.validator");
// Créer une promo
const createPromo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = promo_validator_1.PromoSchema.parse(req.body);
        const promo = yield promo_service_1.PromoService.create(data);
        res.status(201).json(promo);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Erreur inconnue';
        res.status(400).json({ error: message });
    }
});
exports.createPromo = createPromo;
// Lister toutes les promos
const getPromos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promos = yield promo_service_1.PromoService.findAll();
        res.json(promos);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Erreur inconnue';
        res.status(500).json({ error: message });
    }
});
exports.getPromos = getPromos;
// Récupérer une promo par ID
const getPromo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const promo = yield promo_service_1.PromoService.findById(Number(id));
        if (!promo) {
            return res.status(404).json({ error: 'Promo non trouvée' });
        }
        res.json(promo);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Erreur inconnue';
        res.status(500).json({ error: message });
    }
});
exports.getPromo = getPromo;
// Mettre à jour une promo
const updatePromo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = promo_validator_1.PromoSchema.parse(req.body);
        const promo = yield promo_service_1.PromoService.update(Number(id), data);
        res.json(promo);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Erreur inconnue';
        res.status(400).json({ error: message });
    }
});
exports.updatePromo = updatePromo;
// Supprimer une promo
const deletePromo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield promo_service_1.PromoService.delete(Number(id));
        res.status(204).send(); // 204 No Content
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Erreur inconnue';
        res.status(500).json({ error: message });
    }
});
exports.deletePromo = deletePromo;
// Récupérer les formateurs d'une promo
const getFormateursByPromo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const promo = yield promo_service_1.PromoService.findFormateursByPromo(Number(id));
        if (!promo) {
            return res.status(404).json({ error: 'Promo non trouvée' });
        }
        res.json(promo.formateurs); // Retourne uniquement les formateurs
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Erreur inconnue';
        res.status(500).json({ error: message });
    }
});
exports.getFormateursByPromo = getFormateursByPromo;
