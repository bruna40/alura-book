import { LivroService } from '../Service/LivroService.js'


export class LivroController {

    static getAll(_req, res) {
        try {
            const livros = LivroService.getAllBooks();
            res.send(livros);
        }  catch (error) {
            res.status(500).send(error.message);
        }
    }

    static getById(req, res) {
        try {
            const id   = req.params.id;

            const livro = LivroService.getBookById(id);

            res.status(200).json(livro);
        } catch (error) {
            res.status(500).send(error.message);
        }

    }


}