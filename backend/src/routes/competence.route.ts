import express from 'express';
import { getCompetences , createCompetences , getCompetence , updateCompetence , deleteCompetence, getCompetencesNiveau} from '../controllers/competence.controller';

const router = express.Router();

router.get('/', getCompetences);
router.post('/', createCompetences);
router.get('/:id', getCompetence);
router.put('/:id', updateCompetence);
router.delete('/:id', deleteCompetence);
router.get('/:id/niveaux', getCompetencesNiveau);



export default router;