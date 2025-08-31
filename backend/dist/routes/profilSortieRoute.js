"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profilSortieController_js_1 = require("../controllers/profilSortieController.js");
const router = express_1.default.Router();
router.post('/', profilSortieController_js_1.createProfilsSortie);
router.get('/', profilSortieController_js_1.getProfilsSortie);
router.put('/:id', profilSortieController_js_1.updateProfilsSortie);
router.patch('/:id', profilSortieController_js_1.updateProfilsSortie);
router.delete('/:id', profilSortieController_js_1.deleteProfilsSortie);
exports.default = router;
