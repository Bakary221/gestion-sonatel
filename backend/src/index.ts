import express from 'express';
import profileRouter from './routes/profile.route';
import userRoutes from'./routes/userRoute.js'
import profilSortieRoutes from'./routes/profilSortieRoute.js'
import competenceRoutes from './routes/competence.route';
import referentielRoutes from './routes/referentiel.route';

const app = express();
const PORT = 3100;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Utiliser les routes pour les profils
app.use('/profiles', profileRouter);

app.use("/users", userRoutes);
// app.use("/promos", promoRoutes); @Bamba Jeeli
// app.use("/niveaux", niveauRoutes); @KHadija Fall
app.use("/competences", competenceRoutes); 
app.use("/referentiels", referentielRoutes); 
// app.use("/tags", tagRoutes); @Anna Sock
app.use("/profilsSortie", profilSortieRoutes);

// Démarrer le serveur

 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
