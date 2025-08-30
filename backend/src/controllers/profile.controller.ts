import { Request, Response } from 'express';
import { ProfileService } from '../services/profile.service';
import { ProfileSchema } from '../validators/profile.validator';
import { ApiError } from '../types/error';

export const createProfile = async (req: Request, res: Response) => {
  try {
    const data = ProfileSchema.parse(req.body);
    const profile = await ProfileService.create(data);
    res.status(201).json(profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const getProfiles = async (req: Request, res: Response) => {
  try {
    const profiles = await ProfileService.findAll();
    res.json(profiles);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = await ProfileService.findById(Number(id));
    if (!profile) {
      return res.status(404).json({ error: 'Profil non trouvé' });
    }
    res.json(profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = ProfileSchema.parse(req.body);
    const profile = await ProfileService.update(Number(id), data);
    res.json(profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ProfileService.delete(Number(id));
    res.status(204).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};
