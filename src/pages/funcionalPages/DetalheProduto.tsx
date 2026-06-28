import styles from "./DetalheProduto.module.css";

// ─── Dados fictícios ──────────────────────────────────────────────────────────

const PRODUTO = {
    nome:          "Café premium 500g",
    codigo:        "7891234",
    categoria:     "Alimentos",
    fornecedor:    "Distribuidora Norte Ltda",
    emoji:         "☕",
    quantidade:    8,
    minimo:        20,
    maximo:        100,
    precoCusto:    12.50,
    precoVenda:    22.90,
    ultimaEntrada: "12/06/2025",
    ultimaSaida:   "18/06/2025",
};

const HISTORICO = [
    { id: 1, tipo: "saida",   quantidade: 5,  responsavel: "Ana Lima",     data: "18/06/2025", hora: "14:32", saldoApos: 8  },
    { id: 2, tipo: "saida",   quantidade: 3,  responsavel: "Carlos Melo",  data: "15/06/2025", hora: "09:14", saldoApos: 13 },
    { id: 3, tipo: "entrada", quantidade: 20, responsavel: "João Mercado", data: "12/06/2025", hora: "08:00", saldoApos: 16 },
    { id: 4, tipo: "saida",   quantidade: 8,  responsavel: "Ana Lima",     data: "10/06/2025", hora: "16:45", saldoApos:  4 },
    { id: 5, tipo: "entrada", quantidade: 30, responsavel: "João Mercado", data: "01/06/2025", hora: "07:50", saldoApos: 42 },
];

const porcentagem = Math.min(Math.round((PRODUTO.quantidade / PRODUTO.maximo) * 100), 100);
const margem = ((PRODUTO.precoVenda - PRODUTO.precoCusto) / PRODUTO.precoVenda * 100).toFixed(0);

// ─── Componente ───────────────────────────────────────────────────────────────

export default function DetalheProduto() {
    return (
        <div className={styles.pagina}>

            {/* ── Topo ── */}
            <div className={styles.topo}>
                <div className={styles.topoEsquerda}>
                    <button className={styles.btnVoltar} aria-label="Voltar">‹</button>
                    <div className={styles.topoInfo}>
                        <h1>{PRODUTO.nome}</h1>
                        <p>Cód: {PRODUTO.codigo} · {PRODUTO.categoria}</p>
                    </div>
                </div>
                <div className={styles.topoAcoes}>
                    <button className={styles.btnPerigo}>
                        <svg width="15" height="15" fill="none" stroke="currentColor"
                            strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6l-1 14H6L5 6"/>
                            <path d="M10 11v6M14 11v6"/>
                        </svg>
                        Excluir
                    </button>
                    <button className={styles.btnSecundario}>
                        <svg width="15" height="15" fill="none" stroke="currentColor"
                            strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                        Editar
                    </button>
                    <button className={styles.btnPrimario}>
                        <svg width="15" height="15" fill="none" stroke="currentColor"
                            strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                        </svg>
                        Registrar movimentação
                    </button>
                </div>
            </div>

            {/* ── Grid ── */}
            <div className={styles.grid}>

                {/* ── Coluna esquerda ── */}
                <div className={styles.colunaEsquerda}>

                    {/* Identidade */}
                    <div className={styles.card}>
                        <div className={styles.produtoIdentidade}>
                            <div className={styles.produtoEmoji}>{PRODUTO.emoji}</div>
                            <p className={styles.produtoNome}>{PRODUTO.nome}</p>
                            <p className={styles.produtoCodigo}>Cód: {PRODUTO.codigo}</p>
                            <span className={`${styles.statusBadge} ${styles.statusBaixo}`}>
                                ● Estoque baixo
                            </span>
                        </div>
                        <div className={styles.cardCorpo} style={{ paddingTop: 0 }}>
                            <div className={styles.campoLinha}>
                                <span className={styles.campoLabel}>Categoria</span>
                                <span className={styles.campoValor}>{PRODUTO.categoria}</span>
                            </div>
                            <div className={styles.campoLinha}>
                                <span className={styles.campoLabel}>Fornecedor</span>
                                <span className={styles.campoValorMutado}>{PRODUTO.fornecedor}</span>
                            </div>
                            <div className={styles.campoLinha}>
                                <span className={styles.campoLabel}>Última entrada</span>
                                <span className={styles.campoValorMutado}>{PRODUTO.ultimaEntrada}</span>
                            </div>
                            <div className={styles.campoLinha}>
                                <span className={styles.campoLabel}>Última saída</span>
                                <span className={styles.campoValorMutado}>{PRODUTO.ultimaSaida}</span>
                            </div>
                        </div>
                    </div>

                    {/* Preços */}
                    <div className={styles.card}>
                        <p className={styles.cardTitulo}>Preços</p>
                        <div className={styles.cardCorpo}>
                            <div className={styles.precosGrid}>
                                <div className={styles.precoItem}>
                                    <p className={styles.precoLabel}>Custo</p>
                                    <p className={styles.precoValor}>R$ {PRODUTO.precoCusto.toFixed(2)}</p>
                                    <p className={styles.precoSub}>preço de compra</p>
                                </div>
                                <div className={styles.precoItem}>
                                    <p className={styles.precoLabel}>Venda</p>
                                    <p className={styles.precoValor}>R$ {PRODUTO.precoVenda.toFixed(2)}</p>
                                    <p className={styles.precoSub}>preço ao cliente</p>
                                </div>
                            </div>
                            <div className={styles.margemDestaque}>
                                <span className={styles.margemLabel}>Margem de lucro</span>
                                <span className={styles.margemValor}>{margem}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Coluna direita ── */}
                <div className={styles.colunaDireita}>

                    {/* Estoque */}
                    <div className={styles.card}>
                        <p className={styles.cardTitulo}>Estoque atual</p>
                        <div className={styles.cardCorpo}>
                            <div className={styles.estoqueGrid}>
                                <div className={styles.estoqueItem}>
                                    <p className={styles.estoqueLabel}>Atual</p>
                                    <p className={`${styles.estoqueValor} ${styles.estoqueValorBaixo}`}>
                                        {PRODUTO.quantidade}
                                    </p>
                                    <p className={styles.estoqueSub}>unidades</p>
                                </div>
                                <div className={styles.estoqueItem}>
                                    <p className={styles.estoqueLabel}>Mínimo</p>
                                    <p className={styles.estoqueValor}>{PRODUTO.minimo}</p>
                                    <p className={styles.estoqueSub}>unidades</p>
                                </div>
                                <div className={styles.estoqueItem}>
                                    <p className={styles.estoqueLabel}>Máximo</p>
                                    <p className={styles.estoqueValor}>{PRODUTO.maximo}</p>
                                    <p className={styles.estoqueSub}>unidades</p>
                                </div>
                            </div>
                            <div className={styles.progressoWrap}>
                                <div className={styles.progressoLabel}>
                                    <span>Nível de estoque</span>
                                    <span>{porcentagem}% do máximo</span>
                                </div>
                                <div className={styles.progressoFundo}>
                                    <div
                                        className={`${styles.progressoBarra} ${styles.progressaBaixo}`}
                                        style={{ width: `${porcentagem}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Histórico */}
                    <div className={styles.tabelaWrap}>
                        <div className={styles.tabelaCabecalho}>
                            <span className={styles.tabelaTitulo}>Histórico de movimentações</span>
                            <button className={styles.btnVerTodos}>Ver todos</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Quantidade</th>
                                    <th>Responsável</th>
                                    <th>Data</th>
                                    <th>Hora</th>
                                    <th>Saldo após</th>
                                </tr>
                            </thead>
                            <tbody>
                                {HISTORICO.map((h) => (
                                    <tr key={h.id}>
                                        <td>
                                            {h.tipo === "entrada"
                                                ? <span className={styles.tipoEntrada}>↓ Entrada</span>
                                                : <span className={styles.tipoSaida}>↑ Saída</span>
                                            }
                                        </td>
                                        <td>
                                            <span className={h.tipo === "entrada" ? styles.qtdEntrada : styles.qtdSaida}>
                                                {h.tipo === "entrada" ? "+" : "-"}{h.quantidade} un.
                                            </span>
                                        </td>
                                        <td className={styles.tdMutado}>{h.responsavel}</td>
                                        <td className={styles.tdMutado}>{h.data}</td>
                                        <td className={styles.tdMutado}>{h.hora}</td>
                                        <td>{h.saldoApos} un.</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}