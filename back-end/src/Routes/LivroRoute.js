import { Router } from 'express';
import { LivroController } from '../Controller/LivroController.js';


const livroRouter = Router();


livroRouter.get('/', LivroController.getAll);
livroRouter.get('/:id', LivroController.getById);
    // .post('/livros', LivroController.createBook);


export default livroRouter;