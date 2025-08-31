import express , {Request , Response} from 'express';
import profileRouter from './routes/profile.route';
import competenceRoutes from './routes/competence.route';
import referentielRoutes from './routes/referentiel.route';

const app = express();
const PORT = 4000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

app.get('/', (req: Request , res: Response) => {
  res.send('Api Is running');
});

// Utiliser les routes pour les profils
app.use('/profiles', profileRouter);

// app.use("/users", usersRoutes); @Ousmane Marra
// app.use("/promos", promoRoutes); @Bamba Jeeli
// app.use("/niveaux", niveauRoutes); @KHadija Fall
app.use("/competences", competenceRoutes); // @Bakary Diassy
app.use("/referentiels", referentielRoutes); // @Bakary Diassy
// app.use("/tags", tagRoutes); @Anna Sock
// app.use("/profils-sortie", profilSortieRoutes); @Ousmane Marra

// Démarrer le serveur

 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
