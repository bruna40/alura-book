export class LivroController {

    static getAll(_req, res) {
        res.send('Hello World!');
    }

    static createBook(req, res)  {
        const { titulo, autor, ano } = req.body;
        const livro = {
            titulo,
            autor,
            ano
        }    
        res.send(livro);
    }
    

}