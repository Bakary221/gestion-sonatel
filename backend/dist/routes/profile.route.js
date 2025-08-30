"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("../controllers/profile.controller");
const router = express_1.default.Router();
router.post('/', profile_controller_1.createProfile);
router.get('/', profile_controller_1.getProfiles);
router.get('/:id', profile_controller_1.getProfile);
router.put('/:id', profile_controller_1.updateProfile);
router.delete('/:id', profile_controller_1.deleteProfile);
exports.default = router;
