"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const competence_controller_1 = require("../controllers/competence.controller");
const router = express_1.default.Router();
router.get('/', competence_controller_1.getCompetences);
router.post('/', competence_controller_1.createCompetences);
router.get('/:id', competence_controller_1.getCompetence);
router.put('/:id', competence_controller_1.updateCompetence);
router.delete('/:id', competence_controller_1.deleteCompetence);
exports.default = router;
