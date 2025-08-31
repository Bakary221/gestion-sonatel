"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tag_controller_1 = require("../controllers/tag.controller");
const tagRoutes = express_1.default.Router();
tagRoutes.post('/', tag_controller_1.createTag);
tagRoutes.get('/', tag_controller_1.getTags);
tagRoutes.get('/:id', tag_controller_1.getTag);
tagRoutes.put('/:id', tag_controller_1.updateTag);
tagRoutes.delete('/:id', tag_controller_1.deleteTag);
exports.default = tagRoutes;
