import GraficoSimples from '../components/GraficoSimples';
import estilos from './Relatorios.module.css';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const Relatorios = () => {
    return(
        <div className={estilos.container}>
            <h1 className={estilos.titulo}>RELATÓRIO</h1>

            <div className={estilos.cards}>
            {/*---------------- Card 1 ----------------*/}
            <div className={estilos.card}>
                <div className={estilos.card__content}>
                    <div className={estilos.texto_card}>RELATÓRIO DE VENDAS MENSAL <GraficoSimples percentage={80} changeText="-20%" /></div>
                </div>
            </div>

            {/*---------------- Card 2 ----------------*/}
            <div className={estilos.card1}>
                <div className={estilos.card__content}>
                    <div className={estilos.texto_card}>GASTOS <AiOutlineLoading3Quarters /></div>
                </div>
            </div>

            {/*---------------- Card 3 ----------------*/}
            <div className={estilos.card1}>
                <div className={estilos.card__content}>
                    <div className={estilos.texto_card}>DETALHES<AiOutlineLoading3Quarters /></div>
                </div>
            </div>

            {/*---------------- Card 3 ----------------*/}
            <div className={estilos.card1}>
                <div className={estilos.card__content}>
                    <div className={estilos.texto_card}>PENDENCIAS<AiOutlineLoading3Quarters /></div>
                </div>
            </div>

            {/*---------------- Card 4 ----------------*/}
            <div className={estilos.card2}>
                <div className={estilos.card__content}>
                    <div className={estilos.texto_card}>MOVIMENTAÇÃO DAS VENDAS<AiOutlineLoading3Quarters /></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Relatorios;