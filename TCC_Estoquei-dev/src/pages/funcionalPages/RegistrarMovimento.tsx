import estilos from "./RegistrarMovimento.module.css";

 import { useState } from "react"; 

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { type MovimentoTipo } from "../../types/MovimentoTipo";

const registroSchema = z.object({
    produto: z.string().min(1, { message: "Informe o produto." }),
    quantidade: z.string().min(1,{ message: "informe uma quantidade válida" }),
    estoque: z.string().min(1, { message: "informe uma data válida" }),
    entrasai: z.string().min(1, { message: "informe se entrou ou saiu." }),

});

const loginSchema = z.object({
    email: z.email({ message: "Informe um e-mail válido." }),
    senha: z
        .string()
        .length(6, { message: "Informe uma senha com 6 caracteres." }),
});

const RegistrarMovimento = () => {
    const registroForm = useForm<MovimentoTipo>({
        resolver: zodResolver(registroSchema),
    });

    
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  

    const {
        register: registerRegistro,
        handleSubmit: handleSubmitRegistro,
        formState: { errors: errorsRegistro },
    } = registroForm;

    const autenticarUsuario = (data: MovimentoTipo) => {
        if (data.produto == "") {
            alert("Insira um produto!");
        } else {
            alert("Movimento registrado com sucesso");
        }
    };

    return (
        <div className={estilos.container}>
            <div className={estilos.conteudo}>
                <form
                    className={estilos.formRegistrar}
                    onSubmit={handleSubmitRegistro(autenticarUsuario)}
                >
                    <div className={estilos.registrar}>
                        <h1>Registrar movimento</h1>

                        <div className={estilos.campo}>
                            <label htmlFor="nome"> Produto</label>
                            <select {...registerRegistro("produto")}>
                            <option></option>
                            <option>café</option>
                            <option>açúcar</option>
                            <option>detergente</option>
                            <option>arroz</option>
                            <option>sabão em pó</option>
                            <option>leite integral</option>
                            <option>água mineral</option>
                            <option>amazante</option>
                        </select>
                            {errorsRegistro.produto && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.produto.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <label htmlFor="nome">Quantidade</label>
                            <input
                                placeholder="Quantidade"
                                type="number"
                                {...registerRegistro("quantidade")}
                            />
                            {errorsRegistro.quantidade && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.quantidade.message}
                                </p>
                            )}
                        </div>
                        <div className={estilos.campo}>
                            <label htmlFor="nome">Data</label>
                            <input
                                placeholder="Estoque"
                                type="date"
                                {...registerRegistro("estoque")}
                            />
                            {errorsRegistro.estoque && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.estoque.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <label htmlFor="nome">Entrada ou saída</label>
                           <select {...registerRegistro("entrasai")}>
                            <option></option>
                            <option>Entrada</option>
                            <option>Saida</option>
                        </select>
                            {errorsRegistro.entrasai && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.entrasai.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <label htmlFor="nome">Unidade ou total</label>
                           <select >
                            <option></option>
                            <option value="uni">Unidade</option>
                            <option value="tot">Total</option>
                        </select>
                                 <p className={estilos.alerta}>
                                    Esse campo é opcional e só deve ser preenchido caso o preço do produto sea diferente do cadastrado
                                </p>
                           
                        </div>

                        <div className={estilos.campo}>
                            <label htmlFor="nome">Preço</label>
                            <input
                                placeholder="Preço"
                                type="number"
                               
                            />

                            <p className={estilos.alerta}>
                                    Esse campo é opcional e só devem ser preenchidos caso o preço do produto sea diferente do cadastrado
                                </p>
                            
                        </div>

                        

                        <button className={estilos.buttonEnviar}>Criar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrarMovimento;
