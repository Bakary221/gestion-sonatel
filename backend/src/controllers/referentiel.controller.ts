import { Request , Response } from "express";
import { ReferentielService } from "../services/referentiel.service";
import { ReferentielSchema } from "../validators/referentiel.validator";


export const getReferentiels = async (req: Request, res: Response) => {
  try {
    const referentiels = await ReferentielService.findAll();
    res.json(referentiels);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const createReferentiel = async (req: Request, res: Response) => {
  try {
    const data = ReferentielSchema.parse(req.body);
    const referentiel = await ReferentielService.create(data);
    res.status(201).json(referentiel);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const getReferentiel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const referentiel = await ReferentielService.findById(Number(id));
    if (!referentiel) {
      return res.status(404).json({ error: 'Profil non trouvé' });
    }
    res.json(referentiel);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};


export const updateReferentiel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = ReferentielSchema.parse(req.body);
    const profile = await ReferentielService.update(Number(id), data);
    res.json(profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};


export const deleteReferentiel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ReferentielService.delete(Number(id));
    res.status(204).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};