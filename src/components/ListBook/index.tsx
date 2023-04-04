import { useContext } from "react";
import { livros } from "../../data/livros";
import { DadosContext } from "../../contexts/DadosContext";
import { Container, ListBookContainer } from "./style";

export function ListBook() {
    const { search } = useContext(DadosContext);
    return (
        <ListBookContainer>
            <h2>Lista de livros</h2>
            <ul>
                {livros
                    .filter((livro) => livro.nome.includes(search))
                    .map((livro) => (
                        <Container key={livro.id}>
                            <p>{livro.nome}</p>
                            <img src={livro.img}/>
                        </Container>
                    ))}
            </ul>
        </ListBookContainer>

    )
}