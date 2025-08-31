import express from 'express';
import { 
    getReferentiels ,
    createReferentiel ,
    getReferentiel ,
    updateReferentiel ,
    deleteReferentiel
} from '../controllers/referentiel.controller';
const router = express.Router();


router.get('/', getReferentiels);
router.post('/', createReferentiel);
router.get('/:id', getReferentiel);
router.put('/:id', updateReferentiel);
router.delete('/:id', deleteReferentiel);

export default router;


