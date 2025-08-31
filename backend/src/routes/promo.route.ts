import express from 'express';
import {
  createPromo,
  getPromos,
  getPromo,
  updatePromo,
  deletePromo,
  getFormateursByPromo,
} from '../controllers/promo.controller';

const router = express.Router();

// Routes CRUD pour /promos
router.post('/', createPromo);
router.get('/', getPromos);
router.get('/:id', getPromo);
router.put('/:id', updatePromo);
router.delete('/:id', deletePromo);

// Route pour /promos/:id/formateurs
router.get('/:id/formateurs', getFormateursByPromo);

export default router;

