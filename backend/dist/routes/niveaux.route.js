"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const niveaux_controller_1 = require("../controllers/niveaux.controller");
const router = express_1.default.Router();
router.post('/', niveaux_controller_1.createNiveau);
router.get('/', niveaux_controller_1.getNiveaux);
router.get('/:id', niveaux_controller_1.getNiveau);
router.put('/:id', niveaux_controller_1.updateNiveau);
router.delete('/:id', niveaux_controller_1.deleteNiveau);
exports.default = router;
