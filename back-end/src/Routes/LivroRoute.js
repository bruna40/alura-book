import { Router } from 'express';
import { LivroController } from '../Controller/LivroController.js';


const livroRouter = Router();


livroRouter
    .get('/', LivroController.getAll)
    .get('/:id', LivroController.getById)
    .post('/', LivroController.createBook);


export default livroRouter;