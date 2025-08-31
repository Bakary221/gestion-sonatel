import express from 'express';
import { getCompetences , createCompetences , getCompetence , updateCompetence , deleteCompetence} from '../controllers/competence.controller';

const router = express.Router();

router.get('/', getCompetences);
router.post('/', createCompetences);
router.get('/:id', getCompetence);
router.put('/:id', updateCompetence);
router.delete('/:id', deleteCompetence);



export default router;