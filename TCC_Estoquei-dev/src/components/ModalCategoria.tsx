import estilos from './ModalCategoria.module.css'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Categoria = {
    nome: string;
    descricao: string;
}

const categoriaSchema = z.object({
    nome: z.string().min(1, { message: "Informe a categoria." }),
    descricao: z.string().min(1,{ message: "descreva a categoria" }),

});



export function ModalCategoria({exibir, ocultar}) {

    const categoriaForm = useForm<Cadtegoria>({resolver: zodResolver(categoriaSchema)})

    const {
        register: registerCategoria,
        handleSubmit: handleSubmitCategoria,
        formState: { errors: errorsCategoria},
    } = categoriaForm;

    const autenticarForm = (data: Categoria) => {
        if (data.nome == "") {
            alert("Insira um nome!");
        } else {
            alert("Categoria registrada com sucesso");
        }
    };

    if (exibir) {

        return(
            <div className={estilos.sobrepor}>
            <div className={estilos.conteiner}>

               

                <form
                    className={estilos.formProduto}
                    onSubmit={handleSubmitCategoria(autenticarForm)} 
                >
                     <h1>Cadastro de Categoria</h1>
                    <div className={estilos.secaoCadastro}>

                        <div className={estilos.campo}>
                            <label htmlFor="nome">Nome da categoria</label>
                            <input
                                placeholder="Nome"
                                type="text"
                                 {...registerCategoria("nome")}
                            />
                            {errorsCategoria.nome && (
                                <p className={estilos.mensagem}>
                                    {errorsCategoria.nome.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <label htmlFor="nome">Descrição</label>
                            <input
                                placeholder="Descrição"
                                type="text"
                                {...registerCategoria("descricao")}
                            />
                            {errorsCategoria.descricao && (
                                <p className={estilos.mensagem}>
                                    {errorsCategoria.descricao.message}
                                </p>
                                 )}
                        </div>

                        <button className={estilos.buttonEnviar}>Criar</button>
                        <button className={estilos.buttonEnviar} onClick={ocultar}>Fechar</button>
                    </div>
                </form>

                </div>

            </div>
        )    
    }
}