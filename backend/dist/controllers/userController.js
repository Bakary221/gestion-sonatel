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
exports.deleteUser = exports.updateUser = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const userValidator_js_1 = require("../validators/userValidator.js");
const userService = userService_1.UserService.getInstance();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = userValidator_js_1.utilisateurSchema.parse(req.body);
        const user = yield userService.insert(data);
        res.status(201).json(user);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService.selectAll();
        res.json(users);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(500).json({ error: message });
    }
});
exports.getUsers = getUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const data = userValidator_js_1.utilisateurSchema.parse(req.body);
        const users = yield userService.update(Number(id), data);
        res.json(users);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
        res.status(400).json({ error: message });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        yield userService.delete(Number(id));
        res.status(200).json({ message: `Utilisateur avec id ${id} supprimé avec succès` });
    }
    catch (error) {
        res.status(400).json({ message: "Erreur lors de la suppression", error });
    }
});
exports.deleteUser = deleteUser;
