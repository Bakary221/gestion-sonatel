import express from 'express';
import {
  createProfile,
  getProfiles,
  getProfile,
  updateProfile,
  deleteProfile
} from '../controllers/profile.controller';

const router = express.Router();

router.post('/', createProfile);
router.get('/', getProfiles);
router.get('/:id', getProfile);
router.put('/:id', updateProfile);
router.delete('/:id', deleteProfile);

export default router;
