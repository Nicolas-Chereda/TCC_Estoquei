import { createContext, useContext, useState, type ReactNode } from "react";

export type Produto = {
    codigo: number;
    nome: string;
    descricao: string;
    categoria: string;
    marca: string;
    precoCusto: number;
    precoVenda: number;
    estoque: number;
    qtdMin: number;
};

type ProdutoContextoTipo = {
    produtos: Produto[];
    adicionarProduto: (produto: Produto) => void;
};

const ProdutoContexto = createContext<ProdutoContextoTipo | undefined>(
    undefined
);

type ProdutoProviderProps = {
    children: ReactNode;
};

export const ProdutoProvider = ({ children }: ProdutoProviderProps) => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const adicionarProduto = (produto: Produto) => {
        setProdutos((produtosAtuais) => [...produtosAtuais, produto]);
    };

    return (
        <ProdutoContexto.Provider value={{ produtos, adicionarProduto }}>
            {children}
        </ProdutoContexto.Provider>
    );
};

export const useProdutos = () => {
    const contexto = useContext(ProdutoContexto);

    if (!contexto) {
        throw new Error(
            "useProdutos deve ser utilizado dentro de ProdutoProvider"
        );
    }

    return contexto;
};
