import { createContext, useState } from 'react';

interface DadosContextProviderProps {
    children: React.ReactNode;
}
interface Livros {
    id: number;
    nome: string;
    img: string;
}
interface DadosContextProviderType {
    search: string;
    setSearch: (search: string) => void;
    livros: Livros[];
    setLivros: (livros: []) => void;
}

export const DadosContext = createContext({} as DadosContextProviderType); 

export function DadosProvider({ children }: DadosContextProviderProps) {
    const [search, setSearch] = useState('');
    const [livros, setLivros] = useState([]);

    return (
        <DadosContext.Provider value={{ 
                                        search,
                                        setSearch,
                                        livros,
                                        setLivros,
                                        }}>
            {children}
        </DadosContext.Provider>
    )
}