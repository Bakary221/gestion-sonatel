"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promo_controller_1 = require("../controllers/promo.controller");
const router = express_1.default.Router();
// Routes CRUD pour /promos
router.post('/', promo_controller_1.createPromo);
router.get('/', promo_controller_1.getPromos);
router.get('/:id', promo_controller_1.getPromo);
router.put('/:id', promo_controller_1.updatePromo);
router.delete('/:id', promo_controller_1.deletePromo);
// Route pour /promos/:id/formateurs
router.get('/:id/formateurs', promo_controller_1.getFormateursByPromo);
exports.default = router;
