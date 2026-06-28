import estilos from "./Menu.module.css";
import Logo from "../../assets/LogoBranca.png";

import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <aside className={estilos.container}>
            <div className={estilos.logo}>
                <img src={Logo} />
                <h2>Estoquei!</h2>
            </div>

            <nav>
                <Link className={estilos.link} to="/principal">
                    Sobre nós
                </Link>

                <Link className={estilos.link} to="/principal/dashboard">
                    Dashboard
                </Link>

                <Link className={estilos.link} to="/principal/cadastroProd">
                    Cadastro de Produtos
                </Link>

                <Link className={estilos.link} to="/principal/listaProdutos">
                    Lista de Produtos
                </Link>

                <Link className={estilos.link} to="/principal/detalheProduto">
                    Detalhe do Produto
                </Link>

                <Link
                    className={estilos.link}
                    to="/principal/registrarMovimento"
                >
                    Registrar Movimento
                </Link>

                <Link className={estilos.link} to="/principal/historico">
                    Histórico
                </Link>

                <Link className={estilos.link} to="/principal/relatorios">
                    Relatórios
                </Link>
            </nav>
        </aside>
    );
}
