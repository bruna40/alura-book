import { InputContainer } from "../Input/style";
import { SearchContainer } from "./style";
import { useContext } from "react";
import { DadosContext } from "../../contexts/DadosContext";

export default function Search() {

    const { setSearch } = useContext(DadosContext);

    return(
        <SearchContainer>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <InputContainer
                type='text'
                placeholder="Escreva sua próxima leitura"
                onBlur={(e) => setSearch(e.target.value)}
            />
        </SearchContainer>
    )
}