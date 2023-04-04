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

   
}
