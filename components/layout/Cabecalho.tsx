import estilos from "./Cabecalho.module.css";

import Logo from "../../assets/Logo.png";

export default function Cabecalho() {
    return (
        <header className={estilos.container}>
            <nav className={estilos.navbar}>
                <div className={estilos.logo}>
                    <img src={Logo} />
                    <h2>Estoquei!</h2>
                </div>
            </nav>
        </header>
    );
}
