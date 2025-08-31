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
exports.deleteTag = exports.updateTag = exports.getTag = exports.getTags = exports.createTag = void 0;
const tag_service_1 = require("../services/tag.service");
const tag_validator_1 = require("../validators/tag.validator");
const createTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = tag_validator_1.TagSchema.parse(req.body);
        const tag = yield tag_service_1.TagService.create(data);
        res.status(201).json(tag);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.createTag = createTag;
const getTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield tag_service_1.TagService.findAll();
        res.json(tags);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getTags = getTags;
const getTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tag = yield tag_service_1.TagService.findById(Number(id));
        if (!tag) {
            return res.status(404).json({ error: 'Tag non trouvé' });
        }
        res.json(tag);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getTag = getTag;
const updateTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = tag_validator_1.TagSchema.parse(req.body);
        const tag = yield tag_service_1.TagService.update(Number(id), data);
        res.json(tag);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.updateTag = updateTag;
const deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield tag_service_1.TagService.delete(Number(id));
        res.status(204).send();
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.deleteTag = deleteTag;
