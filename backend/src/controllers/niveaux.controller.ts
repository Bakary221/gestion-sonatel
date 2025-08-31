import { Request, Response } from 'express';
import { NiveauxServices } from '../services/niveaux.service';
import { NiveauxSchema } from '../validators/niveaux.validator';
import { ApiError } from '../types/error';

export const createNiveau = async (req: Request, res: Response) => {
  try {
    const data = NiveauxSchema.parse(req.body);
    const niveau = await NiveauxServices.create(data);
    res.status(201).json(niveau);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const getNiveaux = async (req: Request, res: Response) => {
  try {
    const niveau = await NiveauxServices.findAll();
    res.json(niveau);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const getNiveau = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const niveau = await NiveauxServices.findById(Number(id));
    if (!niveau) {
      return res.status(404).json({ error: 'Niveau non trouvé' });
    }
    res.json(niveau);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const updateNiveau = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = NiveauxSchema.parse(req.body);
    const niveau = await NiveauxServices.update(Number(id), data);
    res.json(niveau);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const deleteNiveau = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await NiveauxServices.delete(Number(id));
    res.status(204).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};
