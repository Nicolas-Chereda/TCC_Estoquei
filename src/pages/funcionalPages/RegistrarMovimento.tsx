import estilos from "./RegistrarMovimento.module.css";

/* import { useContext, useState } from "react"; */

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { type MovimentoTipo } from "../../types/MovimentoTipo";

const registroSchema = z.object({
    produto: z.string().min(1, { message: "Informe o produto." }),
    marca: z.string().min(1, { message: "Informe a marca." }),
    codigo: z
        .number({ message: "informe um codigo válido" })
        .min(6, { message: "Informe um código com 6 caracteres." })
        .max(6, { message: "Informe um código com 6 caracteres." }),
    quantidade: z.number({ message: "informe uma quantidade válida" }),
    estoque: z.number({ message: "informe uma quantidade de estoque válida" }),
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

    const {
        register: registerRegistro,
        handleSubmit: handleSubmitRegistro,
        formState: { errors: errorsRegistro },
    } = registroForm;

    const autenticarUsuario = (data: MovimentoTipo) => {
        if (data.produto == "") {
            alert("Insira um produto!");
        } else {
            alert("Produto inserido com sucesso");
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
                            <input
                                placeholder="Produto"
                                type="text"
                                {...registerRegistro("produto")}
                            />
                            {errorsRegistro.produto && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.produto.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <input
                                placeholder="Marca"
                                type="text"
                                {...registerRegistro("marca")}
                            />
                            {errorsRegistro.marca && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.marca.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <input
                                placeholder="Código"
                                type="text"
                                {...registerRegistro("codigo")}
                            />
                            {errorsRegistro.codigo && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.codigo.message}
                                </p>
                            )}
                        </div>
                        <div className={estilos.campo}>
                            <input
                                placeholder="Quantidade"
                                type="text"
                                {...registerRegistro("quantidade")}
                            />
                            {errorsRegistro.quantidade && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.quantidade.message}
                                </p>
                            )}
                        </div>
                        <div className={estilos.campo}>
                            <input
                                placeholder="Estoque"
                                type="text"
                                {...registerRegistro("estoque")}
                            />
                            {errorsRegistro.estoque && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.estoque.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <input
                                placeholder="Movimento"
                                type="text"
                                {...registerRegistro("entrasai")}
                            />
                            {errorsRegistro.entrasai && (
                                <p className={estilos.mensagem}>
                                    {errorsRegistro.entrasai.message}
                                </p>
                            )}
                        </div>

                        <button className={estilos.buttonEnviar}>Criar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrarMovimento;
