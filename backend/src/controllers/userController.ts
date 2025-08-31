import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { utilisateurSchema } from '../validators/userValidator.js';
import { ApiError } from '../types/error';

const userService = UserService.getInstance();

export const createUser = async (req: Request, res: Response) => {
  try {
    const data = utilisateurSchema.parse(req.body);
    const user = await userService.insert(data);
    res.status(201).json(user);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.selectAll();
    res.json(users);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const data = utilisateurSchema.parse(req.body);
    const users = await userService.update(Number(id), data);
    res.json(users);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    await userService.delete(Number(id));
    res.status(200).json({ message: `Utilisateur avec id ${id} supprimé avec succès` });
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la suppression", error });
  }
};
