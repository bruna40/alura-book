import { Router } from 'express';
import { LivroController } from '../Controller/LivroController.js';


const livroRouter = Router();


livroRouter
    .get('/', LivroController.getAll)
    .post('/livros', LivroController.createBook);


export default livroRouter;