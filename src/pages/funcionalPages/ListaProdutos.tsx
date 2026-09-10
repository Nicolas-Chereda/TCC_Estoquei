import styles from "./ListaProdutos.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useProdutos } from "../../contexts/ProdutosContexto";

// ─── Componente principal ─────────────────────────────────────────────────────

export default function ListaProdutos() {
    
    const {produtos} = useProdutos();

    const navigate = useNavigate()

    const irParaProduto = (codigo: number) => {
        navigate('/principal/detalheProduto/'+ codigo)
    }


    return (
        <div className={styles.pagina}>
            {/* ── Topo ── */}
            <div className={styles.topo}>
                <div className={styles.topoEsquerda}>
                    <h1>Produtos</h1>
                    <p>Gerencie e acompanhe seu estoque em tempo real</p>
                </div>
                <Link to='/principal/cadastroProd' className={styles.btnAdicionar}>
                    <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                    Adicionar produto
                </Link>
            </div>

            {/* ── Cards de resumo ── */}
            <div className={styles.resumo}>
                <div className={styles.resumoCard}>
                    <p className={styles.resumoLabel}>Total de produtos</p>
                    <p className={styles.resumoValor}>0</p>
                    <p className={styles.resumoSub}>3 categorias</p>
                </div>
                <div className={styles.resumoCard}>
                    <p className={styles.resumoLabel}>Valor em estoque</p>
                    <p className={styles.resumoValor}>0</p>
                    <p className={styles.resumoSub}>preço de custo</p>
                </div>
                <div
                    className={`${styles.resumoCard} ${styles.resumoCardAlerta}`}
                >
                    <p
                        className={`${styles.resumoLabel} ${styles.resumoLabelAlerta}`}
                    >
                        Sem estoque
                    </p>
                    <p
                        className={`${styles.resumoValor} ${styles.resumoValorAlerta}`}
                    >
                        0
                    </p>
                    <p
                        className={`${styles.resumoSub} ${styles.resumoSubAlerta}`}
                    >
                        requer atenção
                    </p>
                </div>
                <div className={styles.resumoCard}>
                    <p className={styles.resumoLabel}>Estoque baixo</p>
                    <p
                        className={styles.resumoValor}
                        style={{ color: "var(--cor-primaria-base)" }}
                    >
                        0
                    </p>
                    <p className={styles.resumoSub}>abaixo do mínimo</p>
                </div>
            </div>

            {/* ── Alerta ── */}
            <div className={styles.alerta} role="alert">
                <span aria-hidden="true">⚠️</span>
                <p className={styles.alertaTexto}>
                    <strong>0 produto(s) zerado(s)</strong> e{" "}
                    <strong>0 com estoque baixo</strong> — verifique antes de
                    fazer novas vendas.
                </p>
            </div>

            {/* ── Filtros ── */}
            <div className={styles.painel}>
                <div className={styles.painelLinha}>
                    {/* Busca */}
                    <div className={styles.campoBusca}>
                        <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            type="search"
                            placeholder="Buscar por nome ou código de barras..."
                            readOnly
                        />
                    </div>

                    {/* Categoria */}
                    <select className={styles.select} defaultValue="Todas">
                        <option>Todas</option>
                        <option>Alimentos</option>
                        <option>Limpeza</option>
                        <option>Bebidas</option>
                    </select>

                    {/* Status */}
                    <div className={styles.chips}>
                        <button
                            className={`${styles.chip} ${styles.chipAtivo}`}
                        >
                            Todos
                        </button>
                        <button
                            className={`${styles.chip} ${styles.chipInativo}`}
                        >
                            Normal
                        </button>
                        <button
                            className={`${styles.chip} ${styles.chipInativo}`}
                        >
                            Baixo
                        </button>
                        <button
                            className={`${styles.chip} ${styles.chipInativo}`}
                        >
                            Zerado
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Tabela ── */}
            <div className={styles.tabelaWrap}>
                <div className={styles.tabelaCabecalho}>
                    <span className={styles.tabelaTitulo}>
                        Lista de produtos
                    </span>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                        }}
                    >
                        <span className={styles.tabelaContagem}>
                            8 de 8 produtos
                        </span>
                        <button className={styles.btnOrdenar}>Ordenar ↕</button>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Preço custo</th>
                            <th>Preço venda</th>
                            <th>Mínimo</th>
                            <th>Quantidade</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((p) => {
                            return (
                                <tr key={p.codigo} onClick={() => {irParaProduto(p.codigo)}}>
                                    <td>
                                        <div className={styles.celulaProduto}>
                                            <div>
                                                <p
                                                    className={
                                                        styles.nomeProduto
                                                    }
                                                >
                                                    {p.nome}
                                                </p>
                                                <p
                                                    className={
                                                        styles.codigoProduto
                                                    }
                                                >
                                                    Cód: {p.codigo}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.tdMutado}>
                                        {p.categoria}
                                    </td>
                                    <td className={styles.tdMutado}>
                                        R$ {p.precoCusto.toFixed(2)}
                                    </td>
                                    <td className={styles.tdBold}>
                                        R$ {p.precoVenda.toFixed(2)}
                                    </td>
                                    <td className={styles.tdMutado}>
                                        {p.qtdMin} un.
                                    </td>
                                    <td>
                                        <span className={styles.classeQtd}>
                                            {p.estoque} un.
                                        </span>
                                    </td>
                                    <td className={styles.tdBold}>
                                        <span className={styles.pill}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className={styles.btnAcoes}>
                                            Editar
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
