import estilos from './Dashboard.module.css'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();  

    const IrParaHistorico = () => {
        navigate("principal/historico");
    };

    return(

        <div className={estilos.container}>

        <h1 className={estilos.titulo}>DASHBOARD/INICIO</h1>
        

        <div className={estilos.cards}>
            {/*---------------- Card 1 ----------------*/}
            <div className={estilos.card}>
                <div className={estilos.card__content}>
                    <div className={estilos.texto_card}>VENDAS <AiOutlineLoading3Quarters /></div>
                </div>
            </div>
            {/*---------------- Card 2 ----------------*/}
            <div className={estilos.card}>
                <div className={estilos.card__content}>
                    <div className={estilos.texto_card}>ESTOQUE <AiOutlineLoading3Quarters /></div>
                </div>
            </div>
            {/*---------------- Card 3 ----------------*/}
            <div className={estilos.card}>
                <div className={estilos.card__content}>
                    <div className={estilos.texto_card}>REGISTRO <AiOutlineLoading3Quarters /></div>
                </div>
            </div>



            {/*---------------- quadrado 1 ----------------*/}
            <div className={estilos.quadrado} onClick={IrParaHistorico} >
                <div className={estilos.quadrado_content}>
                    <div className={estilos.texto_quadrado}>HISTÓRICO <AiOutlineLoading3Quarters /></div>
                </div>
            </div>

            {/*---------------- quadrado 2 ----------------*/}
            <div className={estilos.quadrado2} >
                <div className={estilos.quadrado_content}>
                    <div className={estilos.texto_quadrado}>RELÁTORIOS <AiOutlineLoading3Quarters /></div>
                </div>
            </div>

            {/*---------------- quadrado 3 ----------------*/}
            <div className={estilos.quadrado3}>
                <div className={estilos.quadrado_content}>
                    <div className={estilos.texto_quadrado}>REGISTRO <AiOutlineLoading3Quarters /></div>
                </div>
            </div>

            {/*---------------- quadrado 4 ----------------*/}
            <div className={estilos.quadrado4}>
                <div className={estilos.quadrado_content}>
                    <div className={estilos.texto_quadrado}>FORNECEDORES <AiOutlineLoading3Quarters /></div>
                </div>
            </div>


        
        </div>
    </div>
    )
}

export default Dashboard