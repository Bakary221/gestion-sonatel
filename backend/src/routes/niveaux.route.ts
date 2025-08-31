import express from 'express';
import { createNiveau, getNiveau, getNiveaux, updateNiveau, deleteNiveau } from '../controllers/niveaux.controller';

const router = express.Router();

router.post('/', createNiveau);
router.get('/', getNiveaux);
router.get('/:id', getNiveau);
router.put('/:id', updateNiveau);
router.delete('/:id', deleteNiveau);

export default router;
