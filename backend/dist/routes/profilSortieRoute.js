"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profilSortieController_1 = require("../controllers/profilSortieController");
const router = express_1.default.Router();
router.post('/', profilSortieController_1.createProfilsSortie);
router.get('/', profilSortieController_1.getProfilsSortie);
router.put('/:id', profilSortieController_1.updateProfilsSortie);
router.patch('/:id', profilSortieController_1.updateProfilsSortie);
router.delete('/:id', profilSortieController_1.deleteProfilsSortie);
exports.default = router;
