import { Request, Response } from 'express';
import { PromoService } from '../services/promo.service';
import { PromoSchema } from '../validators/promo.validator';

// Créer une promo
export const createPromo = async (req: Request, res: Response) => {
  try {
    const data = PromoSchema.parse(req.body);
    const promo = await PromoService.create(data);
    res.status(201).json(promo);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    res.status(400).json({ error: message });
  }
};

// Lister toutes les promos
export const getPromos = async (req: Request, res: Response) => {
  try {
    const promos = await PromoService.findAll();
    res.json(promos);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    res.status(500).json({ error: message });
  }
};

// Récupérer une promo par ID
export const getPromo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const promo = await PromoService.findById(Number(id));
    if (!promo) {
      return res.status(404).json({ error: 'Promo non trouvée' });
    }
    res.json(promo);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    res.status(500).json({ error: message });
  }
};

// Mettre à jour une promo
export const updatePromo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = PromoSchema.parse(req.body);
    const promo = await PromoService.update(Number(id), data);
    res.json(promo);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    res.status(400).json({ error: message });
  }
};

// Supprimer une promo
export const deletePromo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await PromoService.delete(Number(id));
    res.status(204).send(); // 204 No Content
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    res.status(500).json({ error: message });
  }
};

// Récupérer les formateurs d'une promo
export const getFormateursByPromo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const promo = await PromoService.findFormateursByPromo(Number(id));
    if (!promo) {
      return res.status(404).json({ error: 'Promo non trouvée' });
    }
    res.json(promo.formateurs); // Retourne uniquement les formateurs
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    res.status(500).json({ error: message });
  }
};
