import estilos from "./CadastroProdutos.module.css";
import { useNavigate } from "react-router-dom";
import {ModalCategoria} from '../../components/ModalCategoria'
import { useState } from 'react'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useProdutos } from "../../contexts/ProdutosContexto";

type CadastroValues = {
    nome: string;
    codigo: number;
    descricao: string;
    categoria: string;
    marca: string;
    precoCusto: number;
    precoVenda: number;
    estoque: number;
    qtdMin: number;
}

const cadastroSchema = z.object({
    nome: z.string(),
    codigo: z.number(),
    descricao: z.string(),
    categoria: z.string(),
    marca: z.string(),
    precoCusto: z.number(),
    precoVenda: z.number(),
    estoque: z.number(),
    qtdMin: z.number()
});

const CadastroProdutos = () => {

    const cadastroForm = useForm<CadastroValues>({resolver: zodResolver(cadastroSchema)})

    const {register, handleSubmit} = cadastroForm

    const {adicionarProduto} = useProdutos()

    const navigation = useNavigate()

    const cadastrarProduto = (data: CadastroValues) => {

        const produto = {
            codigo: data.codigo,
            nome: data.nome,
            descricao: data.descricao,
            categoria: data.categoria,
            marca: data.marca,
            precoCusto: data.precoCusto,
            precoVenda: data.precoVenda,
            estoque: data.estoque,
            qtdMin: data.qtdMin,
        }

        adicionarProduto(produto)
        navigation('/principal/listaProdutos')
    }

     const [modalVisivel, setModalVisivel] = useState(false)

     const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

      const handleChange = (e) => {
    const valor = e.target.value;
    setOpcaoSelecionada(valor);

    if (valor === 'adicionar') {
      setModalVisivel(true);
    }
  };

  const ocultarModal = () => {
        setModalVisivel(false)
    }

    return (
        <div className={estilos.container}>
            <div className={estilos.modal}>
            <h2 className={estilos.titulo}>Cadastro de Produto</h2>

            <p className={estilos.descricao}>
                Preencha as informações abaixo para cadastrar um novo produto.
            </p>

            <form className={estilos.formProduto} onSubmit={handleSubmit(cadastrarProduto)}>
                {/* ------------- SEÇÃO DE INFORMAÇÕES BÁSICAS ------------- */}
                <section className={estilos.secaoCadastro}>
                    <div className={estilos.campo}>
                        <label htmlFor="nome">Nome do produto</label>
                        <input
                            id="nome"
                            type="text"
                            placeholder="Digite o nome do produto"
                            {...register("nome")}
                        />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="codigo">Código</label>
                        <input
                            id="codigo"
                            type="number"
                            placeholder="Digite o código do produto"
                            {...register("codigo",{valueAsNumber: true})}
                        />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea
                            id="descricao"
                            placeholder="Digite a descrição do produto..."
                            {...register("descricao")}
                        />
                    </div>
                </section>

                {/* ------------- SEÇÃO DE CATEGORIAS E MARCAS ------------- */}
                <section className={estilos.secaoCadastro}>
                    <div className={estilos.campo}>
                        <label htmlFor="categoria">Categoria</label>
                        <select id="categoria" {...register("categoria")}  onChange={(e) => setOpcaoSelecionada(e.target.value)} value={opcaoSelecionada} onChange={handleChange} >
                            <option>Selecione uma categoria</option>
                            <option value="e" >Eletrônicos</option>
                            <option value="a">Roupas</option>
                            <option value="r">Alimentos</option>
                            <option value="adicionar">Adicionar</option>
                        </select>
                    </div>

            

                     

                    <div className={estilos.campo}>
                        <label htmlFor="marca">Marca</label>
                        <input
                            id="marca"
                            type="text"
                            placeholder="Digite a marca"
                            {...register("marca")}
                        />
                    </div>
                </section>

                {/* ------------- SEÇÃO DE VALORES E ESTOQUE ------------- */}
                <section
                    className={`${estilos.secaoCadastro} ${estilos.secao3}`}
                >
                    <div className={estilos.campo}>
                        <label htmlFor="precoCusto">Preço de custo</label>
                        <input
                            id="precoCusto"
                            type="number"
                            placeholder="0,00"
                            {...register("precoCusto", {valueAsNumber: true})}
                        />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="precoVenda">Preço de venda</label>
                        <input
                            id="precoVenda"
                            type="number"
                            placeholder="0,00"
                            {...register("precoVenda", {valueAsNumber: true})}
                        />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="estoque">Estoque</label>
                        <input id="estoque" type="number" placeholder="0" {...register("estoque", {valueAsNumber: true})} />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="qtdMin">Quantidade mínima:</label>
                        <input id="qtdMin" type="number" placeholder="0" {...register("qtdMin", {valueAsNumber: true})} />
                    </div>
                </section>

                {/* ------------- SEÇÃO DE STATUS DO PRODUTO ------------- */}
                <section className={estilos.secaoCadastro}>
                    <div className={`${estilos.campo} ${estilos.campoSwitch}`}>
                        <label htmlFor="prodAtivo" className={estilos.switch}>
                            <input id="prodAtivo" type="checkbox" />

                            <span className={estilos.slider}></span>
                        </label>
                        <div>
                            <h4>Produto ativo</h4>
                            <p>Produto disponível para venda na loja.</p>
                        </div>
                    </div>
                    <button>Cadastrar produto</button>
                </section>
            </form>

            
            <ModalCategoria 
                exibir={modalVisivel}
                ocultar={() => ocultarModal()}

                    />
             </div>
        </div>
    );
};

export default CadastroProdutos;
