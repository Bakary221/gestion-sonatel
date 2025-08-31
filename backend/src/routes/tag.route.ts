import express from 'express';
import {
  createTag,
  getTags,
  getTag,
  updateTag,
  deleteTag
} from '../controllers/tag.controller';

const tagRoutes = express.Router();

tagRoutes.post('/', createTag);
tagRoutes.get('/', getTags);
tagRoutes.get('/:id', getTag);
tagRoutes.put('/:id', updateTag);
tagRoutes.delete('/:id', deleteTag);

export default tagRoutes;
