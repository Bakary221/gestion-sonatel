import express from 'express';
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
