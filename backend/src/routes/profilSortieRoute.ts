import express from 'express';
import {
  createProfilsSortie,
  getProfilsSortie,
  updateProfilsSortie,
  deleteProfilsSortie
} from '../controllers/profilSortieController.js';

const router = express.Router();

router.post('/', createProfilsSortie);
router.get('/', getProfilsSortie);
router.put('/:id', updateProfilsSortie);
router.patch('/:id', updateProfilsSortie);
router.delete('/:id', deleteProfilsSortie);

export default router;
