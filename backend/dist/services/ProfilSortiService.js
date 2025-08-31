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
exports.ProfilSortiService = void 0;
const client_1 = require("@prisma/client");
class ProfilSortiService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    selectAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.profilSorti.findMany({
                select: { nom: true }
            });
        });
    }
    insert(profilSortie) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.profilSorti.create({ data: profilSortie });
        });
    }
    update(id, profilSortie) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.profilSorti.update({
                where: { id },
                data: profilSortie
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.profilSorti.delete({
                where: { id }
            });
        });
    }
    static getInstance() {
        if (!ProfilSortiService.instance) {
            ProfilSortiService.instance = new ProfilSortiService;
        }
        return ProfilSortiService.instance;
    }
}
exports.ProfilSortiService = ProfilSortiService;
