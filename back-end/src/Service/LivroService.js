import fs from 'fs';

export class LivroService{
    static getAllBooks() {
        return JSON.parse(fs.readFileSync('./src/livros.json'))

    }
    static getBookById(id) {
        const livros = this.getAllBooks();

    
        const livro = livros.find(livro => {
            
            return livro.id.toString() === id.toString();
        });
    
        return livro;
    }

    static createBook(livro) {
        const livros = this.getAllBooks();

        const novaLista = [...livros, livro];



        fs.writeFileSync('./src/livros.json', JSON.stringify(novaLista));

    }

   
}
