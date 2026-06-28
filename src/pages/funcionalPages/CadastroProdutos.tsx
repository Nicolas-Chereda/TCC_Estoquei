import estilos from "./CadastroProdutos.module.css";

const CadastroProdutos = () => {
    return (
        <div className={estilos.container}>
            <h2 className={estilos.titulo}>Cadastro de Produto</h2>

            <p className={estilos.descricao}>
                Preencha as informações abaixo para cadastrar um novo produto.
            </p>

            <form className={estilos.formProduto}>
                {/* ------------- SEÇÃO DE INFORMAÇÕES BÁSICAS ------------- */}
                <section className={estilos.secaoCadastro}>
                    <h3>Informações básicas</h3>

                    <div className={estilos.campo}>
                        <label htmlFor="nome">Nome do produto</label>
                        <input
                            id="nome"
                            type="text"
                            placeholder="Digite o nome do produto"
                        />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="codigo">Código</label>
                        <input
                            id="codigo"
                            type="number"
                            placeholder="Digite o código do produto"
                        />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea
                            id="descricao"
                            placeholder="Digite a descrição do produto..."
                        />
                    </div>
                </section>

                {/* ------------- SEÇÃO DE CATEGORIAS E MARCAS ------------- */}
                <section className={estilos.secaoCadastro}>
                    <h3>Categoria e marca</h3>

                    <div className={estilos.campo}>
                        <label htmlFor="categoria">Categoria</label>
                        <select id="categoria">
                            <option>Selecione uma categoria</option>
                            <option>Eletrônicos</option>
                            <option>Roupas</option>
                            <option>Alimentos</option>
                        </select>
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="marca">Marca</label>
                        <input
                            id="marca"
                            type="text"
                            placeholder="Digite a marca"
                        />
                    </div>
                </section>

                {/* ------------- SEÇÃO DE VALORES E ESTOQUE ------------- */}
                <section
                    className={`${estilos.secaoCadastro} ${estilos.secao3}`}
                >
                    <h3>Valores e estoque</h3>

                    <div className={estilos.campo}>
                        <label htmlFor="precoCusto">Preço de custo</label>
                        <input
                            id="precoCusto"
                            type="number"
                            placeholder="0,00"
                        />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="precoVenda">Preço de venda</label>
                        <input
                            id="precoVenda"
                            type="number"
                            placeholder="0,00"
                        />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="estoque">Estoque</label>
                        <input id="estoque" type="number" placeholder="0" />
                    </div>

                    <div className={estilos.campo}>
                        <label htmlFor="unidade">Unidade</label>
                        <select id="unidade">
                            <option value="">Selecione uma unidade</option>
                            <option value="un">Unidade (UN)</option>
                            <option value="kg">Quilograma (KG)</option>
                            <option value="g">Grama (G)</option>
                            <option value="l">Litro (L)</option>
                            <option value="ml">Mililitro (ML)</option>
                            <option value="cx">Caixa (CX)</option>
                        </select>
                    </div>
                </section>

                {/* ------------- SEÇÃO DE STATUS DO PRODUTO ------------- */}
                <section className={estilos.secaoCadastro}>
                    <h3>Status do produto</h3>

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
                    <button type="submit">Cadastrar produto</button>
                </section>

                
            </form>
        </div>
    );
};

export default CadastroProdutos;
