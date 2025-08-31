"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_route_1 = __importDefault(require("./routes/profile.route"));
const userRoute_js_1 = __importDefault(require("./routes/userRoute.js"));
const profilSortieRoute_js_1 = __importDefault(require("./routes/profilSortieRoute.js"));
const competence_route_1 = __importDefault(require("./routes/competence.route"));
const referentiel_route_1 = __importDefault(require("./routes/referentiel.route"));
const app = (0, express_1.default)();
const PORT = 3100;
// Middleware pour parser les requêtes JSON
app.use(express_1.default.json());
// Utiliser les routes pour les profils
app.use('/profiles', profile_route_1.default);
app.use("/users", userRoute_js_1.default);
// app.use("/promos", promoRoutes); @Bamba Jeeli
// app.use("/niveaux", niveauRoutes); @KHadija Fall
app.use("/competences", competence_route_1.default);
app.use("/referentiels", referentiel_route_1.default);
// app.use("/tags", tagRoutes); @Anna Sock
app.use("/profilsSortie", profilSortieRoute_js_1.default);
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
