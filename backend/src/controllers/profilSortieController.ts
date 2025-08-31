import { Request, Response } from 'express';
import { ProfilSortiService } from '../services/ProfilSortiService.js';
import { profilSortieSchema } from '../validators/profilSortiValidator.js';
import { ApiError } from '../types/error';

const profilSortiService = ProfilSortiService.getInstance();

export const createProfilsSortie = async (req: Request, res: Response) => {
  try {
    const data = profilSortieSchema.parse(req.body);
    console.log(data);
    
    const profil = await profilSortiService.insert(data);
    res.status(201).json(profil);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const getProfilsSortie = async (req: Request, res: Response) => {
  try {
    const profiles = await profilSortiService.selectAll();
    res.json(profiles);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const updateProfilsSortie = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const data = profilSortieSchema.parse(req.body);
    const users = await profilSortiService.update(Number(id), data);
    res.json(users);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const deleteProfilsSortie = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    await profilSortiService.delete(Number(id));
    res.status(200).json({ message: `Utilisateur avec id ${id} supprimé avec succès` });
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la suppression", error });
  }
};
