import { Request, Response } from 'express';
import { TagService } from '../services/tag.service';
import { TagSchema } from '../validators/tag.validator';

export const createTag = async (req: Request, res: Response) => {
  try {
    const data = TagSchema.parse(req.body);
    const tag = await TagService.create(data);
    res.status(201).json(tag);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const getTags = async (req: Request, res: Response) => {
  try {
    const tags = await TagService.findAll();
    res.json(tags);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const getTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tag = await TagService.findById(Number(id));
    if (!tag) {
      return res.status(404).json({ error: 'Tag non trouvé' });
    }
    res.json(tag);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};

export const updateTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = TagSchema.parse(req.body);
    const tag = await TagService.update(Number(id), data);
    res.json(tag);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(400).json({ error: message });
  }
};

export const deleteTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await TagService.delete(Number(id));
    res.status(204).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ error: message });
  }
};
