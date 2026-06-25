import estilos from "./Login.module.css";

import { useContext, useState } from "react";

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { type UsuarioTipo } from "../types/User";
import { UsuarioContexto } from "../contexts/UsuarioContexto";

const registroSchema = z.object({
    nome: z
        .string()
        .min(2, "Mínimo de 2 caracteres.")
        .max(25, "Máximo de 25 caracteres"),
    email: z.email({ message: "Informe um e-mail válido." }),
    senha: z
        .string()
        .length(6, { message: "Informe uma senha com 6 caracteres." }),
});

const loginSchema = z.object({
    email: z.email({ message: "Informe um e-mail válido." }),
    senha: z
        .string()
        .length(6, { message: "Informe uma senha com 6 caracteres." }),
});

const Login = () => {
    {
        /*Lado do painel*/
    }
    const [ativo, setAtivo] = useState(false);

    {
        /* Parte do Registro/Login */
    }

    const {
        setNomeUsuarioContexto,
        setEmailUsuarioContexto,
        setSenhaUsuarioContexto,
    } = useContext(UsuarioContexto);
    const { emailUsuarioContexto, senhaUsuarioContexto } =
        useContext(UsuarioContexto);

    const registroForm = useForm<UsuarioTipo>({
        resolver: zodResolver(registroSchema),
    });
    const loginForm = useForm<UsuarioTipo>({
        resolver: zodResolver(loginSchema),
    });

    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: { errors: errorsLogin },
    } = loginForm;
    const {
        register: registerRegistro,
        handleSubmit: handleSubmitRegistro,
        formState: { errors: errorsRegistro },
    } = registroForm;

    const criarUsuario = (data: UsuarioTipo) => {
        setNomeUsuarioContexto(data.nome);
        setEmailUsuarioContexto(data.email);
        setSenhaUsuarioContexto(data.senha);

        alert(`Bem vindo ${data.nome}!`);
    };

    const autenticarUsuario = (data: UsuarioTipo) => {
        if (data.email !== emailUsuarioContexto) {
            alert("Insira seu e-mail registrado!");
        } else if (data.senha !== senhaUsuarioContexto) {
            alert("Insira sua senha registrada");
        } else {
            alert("Login realizado com sucesso");
        }
    };

    return (
        <div className={estilos.container}>
            <div className={estilos.blur}>
                {/*---------------- Separação do painel ----------------*/}
                <div
                    className={`${estilos.modal} ${ativo ? estilos.ativo : ""}`}
                >
                    <div className={estilos.painel}>
                        <div className={estilos.splitRegistro}>
                            <h1>Olá amigo!</h1>
                            <p>
                                Crie sua conta agora para prosseguir e acessar
                                todas as funcionalidades do site
                            </p>
                            <button
                                className={estilos.buttonSplit}
                                onClick={() => setAtivo(true)}
                            >
                                Registrar-se
                            </button>
                        </div>

                        <div className={estilos.splitLogin}>
                            <h1>Bem vindo de volta!</h1>
                            <p>
                                Faça login agora mesmo para prosseguir e acessar
                                todas as funcionalidades
                            </p>
                            <button
                                className={estilos.buttonSplit}
                                onClick={() => setAtivo(false)}
                            >
                                Entrar
                            </button>
                        </div>
                    </div>

                    {/*---------------- LOGIN ----------------*/}
                    <form
                        className={estilos.formLogin}
                        onSubmit={handleSubmitLogin(autenticarUsuario)}
                    >
                        <div className={estilos.login}>
                            <h1>Fazer login</h1>

                            <div className={estilos.containerIcones}>
                                <FaFacebook className={estilos.icone} />
                                <IoLogoGoogle className={estilos.icone} />
                                <FaLinkedin className={estilos.icone} />
                                <FaGithub className={estilos.icone} />
                            </div>

                            <p>ou use seu email e senha</p>

                            <div className={estilos.campo}>
                                <input
                                    placeholder="Email"
                                    type="text"
                                    {...registerLogin("email")}
                                />
                                {errorsLogin.email && (
                                    <p className={estilos.mensagem}>
                                        {errorsLogin.email.message}
                                    </p>
                                )}
                            </div>

                            <div className={estilos.campo}>
                                <input
                                    placeholder="Senha"
                                    type="password"
                                    {...registerLogin("senha")}
                                />
                                {errorsLogin.senha && (
                                    <p className={estilos.mensagem}>
                                        {errorsLogin.senha.message}
                                    </p>
                                )}
                            </div>

                            <button className={estilos.buttonEnviar}>
                                Entrar
                            </button>
                        </div>
                    </form>

                    {/*---------------- REGISTRO ----------------*/}
                    <form
                        className={estilos.formRegistrar}
                        onSubmit={handleSubmitRegistro(criarUsuario)}
                    >
                        <div className={estilos.registrar}>
                            <h1>Registrar conta</h1>

                            <div className={estilos.containerIcones}>
                                <FaFacebook className={estilos.icone} />
                                <IoLogoGoogle className={estilos.icone} />
                                <FaLinkedin className={estilos.icone} />
                                <FaGithub className={estilos.icone} />
                            </div>

                            <p>ou use seu email e senha</p>

                            <div className={estilos.campo}>
                                <input
                                    placeholder="Nome"
                                    type="text"
                                    {...registerRegistro("nome")}
                                />
                                {errorsRegistro.nome && (
                                    <p className={estilos.mensagem}>
                                        {errorsRegistro.nome.message}
                                    </p>
                                )}
                            </div>

                            <div className={estilos.campo}>
                                <input
                                    placeholder="Email"
                                    type="text"
                                    {...registerRegistro("email")}
                                />
                                {errorsRegistro.email && (
                                    <p className={estilos.mensagem}>
                                        {errorsRegistro.email.message}
                                    </p>
                                )}
                            </div>

                            <div className={estilos.campo}>
                                <input
                                    placeholder="Senha"
                                    type="password"
                                    {...registerRegistro("senha")}
                                />
                                {errorsRegistro.senha && (
                                    <p className={estilos.mensagem}>
                                        {errorsRegistro.senha.message}
                                    </p>
                                )}
                            </div>

                            <button className={estilos.buttonEnviar}>
                                Criar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
