import { Request , Response } from "express";
import { CompetenceService } from "../services/competence.service";
import { competenceSchema } from "../validators/competence.validator";


export const getCompetences = async (req: Request, res: Response) => {
  try {
    const competences = await CompetenceService.findAll();
    res.json(competences);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const createCompetences = async (req: Request, res: Response) => {
  try {
    const data = competenceSchema.parse(req.body);
    const competence = await CompetenceService.create(data);
    res.status(201).json(competence);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const getCompetence = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const competence = await CompetenceService.findById(Number(id));
    if (!competence) {
      return res.status(404).json({ error: 'Profil non trouvé' });
    }
    res.json(competence);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};


export const updateCompetence = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = competenceSchema.parse(req.body);
    const profile = await CompetenceService.update(Number(id), data);
    res.json(profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};


export const deleteCompetence = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await CompetenceService.delete(Number(id));
    res.status(204).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};