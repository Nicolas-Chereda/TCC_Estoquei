import estilos from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const irParaHistorico = () => navigate("/principal/historico");
    const irParaProdutos = () => navigate("/principal/listaProdutos");
    const irParaCadastro = () => navigate("/principal/cadastroProd");
    const irParaRegistroMovimento = () => navigate("/principal/registrarMovimento");
    const irParaRelatorios = () => navigate("/principal/relatorios");
    const irParaDetalhes = () => navigate("/principal/detalheProduto");

    return (
        <div className={estilos.container}>
            <h1 className={estilos.titulo}>DASHBOARD/INICIO</h1>

            <div className={estilos.layout}>
                {/*---------------- COLUNA PRINCIPAL ----------------*/}
                <div>
                    <div className={estilos.alerta}>
                        <span className={estilos.alertaTexto}>
                            2 produto(s) zerado(s) e 3 com estoque baixo — verifique antes de fazer novas vendas.
                        </span>
                    </div>

                    <div className={estilos.cardsTrio}>
                        <div className={estilos.resumoCard} onClick={irParaProdutos}>
                            <p className={estilos.resumoLabel}>Total de produtos</p>
                            <p className={estilos.resumoValor}>8</p>
                            <p className={estilos.resumoSub}>3 categorias</p>
                        </div>

                        <div className={estilos.resumoCard } onClick={irParaDetalhes}>
                            <p className={estilos.resumoLabel}>Produto em Destaque</p>
                            <p className={estilos.resumoValor}>Café premium 500g</p>
                            <p className={estilos.resumoSub} style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={irParaDetalhes}>
                                Ver detalhes
                            </p>
                        </div>

                        <div className={estilos.resumoCard} onClick={irParaRelatorios}>
                            <p className={estilos.resumoLabel}>Vendas hoje</p>
                            <p className={estilos.resumoValor}>R$ 312,00</p>
                            <p className={estilos.resumoSub}>14 itens vendidos</p>
                        </div>
                    </div>

                    <div className={estilos.tabelaWrap}>
                        <div className={estilos.tabelaCabecalho}>
                            <span className={estilos.tabelaTitulo}>Últimas movimentações</span>
                            <button className={estilos.btnOrdenar} onClick={irParaHistorico}>
                                Ver histórico
                            </button>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Produto</th>
                                    <th>Quantidade</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className={estilos.Saida}>Saída</span>
                                    </td>
                                    <td>Café premium 500g</td>
                                    <td className={estilos.tdBold}>5 un.</td>
                                    <td className={estilos.tdMutado}>18/06/2025</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className={estilos.Entrada}>Entrada</span>
                                    </td>
                                    <td>Arroz tipo 1 5kg</td>
                                    <td className={estilos.tdBold}>20 un.</td>
                                    <td className={estilos.tdMutado}>12/06/2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/*---------------- COLUNA LATERAL ----------------*/}
                <div className={estilos.colunaLateral}>
                    <div className={estilos.cardAlerta} onClick={irParaProdutos }>
                        <p className={estilos.labelAlerta}>Alertas de estoque</p>
                        <p className={estilos.valorAlerta}>5</p>
                        <p className={estilos.subAlerta}>2 zerados, 3 baixos</p>
                    </div>

                    <div className={estilos.painel}>
                        <p className={estilos.tabelaTitulo} style={{ marginBottom: 12 }}>
                            Ações rápidas
                        </p>
                        <div className={estilos.colunaAcoes}>
                            <button className={estilos.btnAcaoRapida} onClick={irParaCadastro}>
                                Cadastrar produto
                            </button>
                            <button className={estilos.btnAcaoRapida} onClick={irParaRegistroMovimento}>
                                Registrar movimentação
                            </button>
                            <button className={estilos.btnAcaoRapida} onClick={irParaRelatorios}>
                                Ver relatórios
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;