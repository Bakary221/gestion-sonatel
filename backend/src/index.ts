import express from 'express';
import profileRouter from './routes/profile.route';

const app = express();
const PORT = 3100;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Utiliser les routes pour les profils
app.use('/profiles', profileRouter);

// app.use("/users", usersRoutes); @Ousmane Marra
// app.use("/promos", promoRoutes); @Bamba Jeeli
// app.use("/niveaux", niveauRoutes); @KHadija Fall
// app.use("/competences", competenceRoutes); @Bakary Diassy
// app.use("/referentiels", referentielRoutes); @Bakary Diassy
// app.use("/tags", tagRoutes); @Anna Sock
// app.use("/profils-sortie", profilSortieRoutes); @Ousmane Marra

// Démarrer le serveur

 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
