"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const competence_route_1 = __importDefault(require("./routes/competence.route"));
const referentiel_route_1 = __importDefault(require("./routes/referentiel.route"));
const profile_route_1 = __importDefault(require("./routes/profile.route"));
const profilSortieRoute_1 = __importDefault(require("./routes/profilSortieRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const tag_route_1 = __importDefault(require("./routes/tag.route"));
const promo_route_1 = __importDefault(require("./routes/promo.route"));
const niveaux_route_1 = __importDefault(require("./routes/niveaux.route"));
const app = (0, express_1.default)();
const PORT = 4000;
// Middleware pour parser les requêtes JSON
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Api Is running');
});
// Utiliser les routes pour les profils
app.use('/profiles', profile_route_1.default);
app.use("/users", userRoute_1.default);
app.use('/promos', promo_route_1.default);
app.use("/niveaux", niveaux_route_1.default);
app.use("/competences", competence_route_1.default);
app.use("/referentiels", referentiel_route_1.default);
app.use("/tags", tag_route_1.default);
app.use("/profils-sortie", profilSortieRoute_1.default);
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
