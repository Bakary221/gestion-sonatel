"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const referentiel_controller_1 = require("../controllers/referentiel.controller");
const router = express_1.default.Router();
router.get('/', referentiel_controller_1.getReferentiels);
router.post('/', referentiel_controller_1.createReferentiel);
router.get('/:id', referentiel_controller_1.getReferentiel);
router.put('/:id', referentiel_controller_1.updateReferentiel);
router.delete('/:id', referentiel_controller_1.deleteReferentiel);
exports.default = router;
