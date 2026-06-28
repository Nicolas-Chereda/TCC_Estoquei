import styles from "./ListaProdutos.module.css";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type StatusProduto = "normal" | "baixo" | "zerado";

interface Produto {
    id: number;
    nome: string;
    codigo: string;
    categoria: string;
    quantidade: number;
    minimo: number;
    precoCusto: number;
    precoVenda: number;
    status: StatusProduto;
}

// ─── Dados fictícios ──────────────────────────────────────────────────────────

const PRODUTOS: Produto[] = [
    { id: 1, nome: "Café premium 500g",  codigo: "7891234", categoria: "Alimentos", quantidade: 42, minimo: 20, precoCusto: 12.50, precoVenda: 22.90, status: "normal" },
    { id: 2, nome: "Açúcar cristal 1kg", codigo: "7895678", categoria: "Alimentos", quantidade:  8, minimo: 15, precoCusto:  3.20, precoVenda:  6.99, status: "baixo"  },
    { id: 3, nome: "Detergente 500ml",   codigo: "7899012", categoria: "Limpeza",   quantidade:  0, minimo: 10, precoCusto:  1.80, precoVenda:  4.50, status: "zerado" },
    { id: 4, nome: "Arroz tipo 1 5kg",   codigo: "7893456", categoria: "Alimentos", quantidade: 31, minimo: 10, precoCusto: 18.00, precoVenda: 29.90, status: "normal" },
    { id: 5, nome: "Sabão em pó 1kg",    codigo: "7897890", categoria: "Limpeza",   quantidade:  5, minimo:  8, precoCusto:  7.40, precoVenda: 14.90, status: "baixo"  },
    { id: 6, nome: "Leite integral 1L",  codigo: "7892345", categoria: "Bebidas",   quantidade: 60, minimo: 24, precoCusto:  3.90, precoVenda:  7.50, status: "normal" },
    { id: 7, nome: "Água mineral 500ml", codigo: "7896789", categoria: "Bebidas",   quantidade: 14, minimo: 30, precoCusto:  0.80, precoVenda:  2.00, status: "baixo"  },
    { id: 8, nome: "Amaciante 2L",       codigo: "7894567", categoria: "Limpeza",   quantidade:  0, minimo:  6, precoCusto:  9.00, precoVenda: 18.90, status: "zerado" },
];

// ─── StatusPill ───────────────────────────────────────────────────────────────

function StatusPill({ status }: { status: StatusProduto }) {
    const mapa: Record<StatusProduto, { classe: string; label: string }> = {
        normal: { classe: styles.pillNormal, label: "Normal"      },
        baixo:  { classe: styles.pillBaixo,  label: "Baixo"       },
        zerado: { classe: styles.pillZerado, label: "Sem estoque" },
    };
    const { classe, label } = mapa[status];
    return (
        <span className={`${styles.pill} ${classe}`}>
            <span aria-hidden="true">●</span>
            {label}
        </span>
    );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function ListaProdutos() {
    return (
        <div className={styles.pagina}>

            {/* ── Topo ── */}
            <div className={styles.topo}>
                <div className={styles.topoEsquerda}>
                    <h1>Produtos</h1>
                    <p>Gerencie e acompanhe seu estoque em tempo real</p>
                </div>
                <button className={styles.btnAdicionar}>
                    <svg width="18" height="18" fill="none" stroke="currentColor"
                        strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                    Adicionar produto
                </button>
            </div>

            {/* ── Cards de resumo ── */}
            <div className={styles.resumo}>
                <div className={styles.resumoCard}>
                    <p className={styles.resumoLabel}>Total de produtos</p>
                    <p className={styles.resumoValor}>8</p>
                    <p className={styles.resumoSub}>3 categorias</p>
                </div>
                <div className={styles.resumoCard}>
                    <p className={styles.resumoLabel}>Valor em estoque</p>
                    <p className={styles.resumoValor}>R$ 1.423</p>
                    <p className={styles.resumoSub}>preço de custo</p>
                </div>
                <div className={`${styles.resumoCard} ${styles.resumoCardAlerta}`}>
                    <p className={`${styles.resumoLabel} ${styles.resumoLabelAlerta}`}>Sem estoque</p>
                    <p className={`${styles.resumoValor} ${styles.resumoValorAlerta}`}>2</p>
                    <p className={`${styles.resumoSub} ${styles.resumoSubAlerta}`}>requer atenção</p>
                </div>
                <div className={styles.resumoCard}>
                    <p className={styles.resumoLabel}>Estoque baixo</p>
                    <p className={styles.resumoValor} style={{ color: "var(--cor-primaria-base)" }}>3</p>
                    <p className={styles.resumoSub}>abaixo do mínimo</p>
                </div>
            </div>

            {/* ── Alerta ── */}
            <div className={styles.alerta} role="alert">
                <span aria-hidden="true">⚠️</span>
                <p className={styles.alertaTexto}>
                    <strong>2 produto(s) zerado(s)</strong> e{" "}
                    <strong>3 com estoque baixo</strong> — verifique antes de fazer novas vendas.
                </p>
            </div>

            {/* ── Filtros ── */}
            <div className={styles.painel}>
                <div className={styles.painelLinha}>

                    {/* Busca */}
                    <div className={styles.campoBusca}>
                        <svg width="16" height="16" fill="none" stroke="currentColor"
                            strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
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
                        <button className={`${styles.chip} ${styles.chipAtivo}`}>Todos</button>
                        <button className={`${styles.chip} ${styles.chipInativo}`}>Normal</button>
                        <button className={`${styles.chip} ${styles.chipInativo}`}>Baixo</button>
                        <button className={`${styles.chip} ${styles.chipInativo}`}>Zerado</button>
                    </div>
                </div>
            </div>

            {/* ── Tabela ── */}
            <div className={styles.tabelaWrap}>
                <div className={styles.tabelaCabecalho}>
                    <span className={styles.tabelaTitulo}>Lista de produtos</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span className={styles.tabelaContagem}>8 de 8 produtos</span>
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
                        {PRODUTOS.map((p) => {
                            const classeQtd =
                                p.status === "zerado" ? styles.qtdZerado
                                : p.status === "baixo" ? styles.qtdBaixo
                                : styles.qtdNormal;

                            return (
                                <tr key={p.id}>
                                    <td>
                                        <div className={styles.celulaProduto}>
                                            <div>
                                                <p className={styles.nomeProduto}>{p.nome}</p>
                                                <p className={styles.codigoProduto}>Cód: {p.codigo}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.tdMutado}>{p.categoria}</td>
                                    <td className={styles.tdMutado}>R$ {p.precoCusto.toFixed(2)}</td>
                                    <td className={styles.tdBold}>R$ {p.precoVenda.toFixed(2)}</td>
                                    <td className={styles.tdMutado}>{p.minimo} un.</td>
                                    <td><span className={classeQtd}>{p.quantidade} un.</span></td>
                                    <td><StatusPill status={p.status} /></td>
                                    <td>
                                        <button className={styles.btnAcoes}>Editar</button>
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