import express , {Request , Response} from 'express';
import competenceRoutes from './routes/competence.route';
import referentielRoutes from './routes/referentiel.route';
import profileRouter from './routes/profile.route';
import profilSortieRoutes from'./routes/profilSortieRoute';
import usersRoutes from'./routes/userRoute'
import tagRoutes from './routes/tag.route'
import promoRouter from './routes/promo.route'; 
import niveauxRouter from './routes/niveaux.route';




const app = express();
const PORT = 4000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

app.get('/', (req: Request , res: Response) => {
  res.send('Api Is running');
});

// Utiliser les routes pour les profils
app.use('/profiles', profileRouter);
app.use("/users", usersRoutes);
app.use('/promos', promoRouter); 
app.use("/niveaux", niveauxRouter);
app.use("/competences", competenceRoutes);
app.use("/referentiels", referentielRoutes);
app.use("/tags", tagRoutes); 
app.use("/profils-sortie", profilSortieRoutes); 


// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
