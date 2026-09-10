import { createContext, useContext, useState, type ReactNode } from "react";
import { type ProdutoTipo } from "../types/ProdutoTipo";

type ProdutoContextoTipo = {
    produtos: ProdutoTipo[];
    adicionarProduto: (produto: ProdutoTipo) => void;
    editarProduto: (produto: ProdutoTipo) => void;
};

const ProdutoContexto = createContext<ProdutoContextoTipo | undefined>(
    undefined
);

type ProdutoProviderProps = {
    children: ReactNode;
};

export const ProdutoProvider = ({ children }: ProdutoProviderProps) => {
    const [produtos, setProdutos] = useState<ProdutoTipo[]>([]);

    const adicionarProduto = (produto: ProdutoTipo) => {
        setProdutos((produtosAtuais) => [...produtosAtuais, produto]);
    };

    const editarProduto = (produtoEditado: ProdutoTipo) => {
        setProdutos((produtosAtuais) =>
            produtosAtuais.map((produto) =>
                produto.codigo === produtoEditado.codigo
                    ? produtoEditado
                    : produto
            )
        );
    };    

    return (
        <ProdutoContexto.Provider value={{ produtos, adicionarProduto, editarProduto }}>
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
