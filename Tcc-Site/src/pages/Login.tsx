import estilos from './Login.module.css'

import { useContext, useState } from 'react';

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type UsuarioTipo } from '../types/User';
import { UsuarioContexto } from '../contexts/UsuarioContexto';


const loginSchema = z.object ({
	nome: z.string().min(2, 'Mínimo de 2 caracteres.').max(25, 'Máximo de 25 caracteres'),
	email: z.email({message: 'Informe um e-mail válido.'}),
    senha: z.string().length(6, {message: 'Informe uma senha com 6 caracteres.'})
})

const Login = () => {

	{/*Lado do painel*/}
	const [ativo, setAtivo] = useState(false)

	{/* Parte do Registro/Login */}

	const { setNomeUsuarioContexto, setEmailUsuarioContexto, setSenhaUsuarioContexto } = useContext(UsuarioContexto)
	const { emailUsuarioContexto, senhaUsuarioContexto } = useContext(UsuarioContexto)

	const { register,handleSubmit,formState:{errors} } = useForm<UsuarioTipo>( {resolver: zodResolver(loginSchema)})

	const criarUsuario = (data: UsuarioTipo) => {


		setNomeUsuarioContexto(data.nome) 
		setEmailUsuarioContexto(data.email) 
		setSenhaUsuarioContexto(data.senha)

		alert(`Bem vindo ${data.nome}!`)
	}

	const autenticarUsuario = (data: UsuarioTipo) => {

		if(data.email !== emailUsuarioContexto) {
			alert('Insira seu e-mail registrado!')
		}
		else if (data.senha !== senhaUsuarioContexto) {
			alert('Insira sua senha registrada')
		}
		else {
			alert('Login realizado com sucesso')
		}
	}

	return (
		<div className={estilos.container}>
			<div className={estilos.blur}>

				{/*---------------- Separação do painel ----------------*/}
				<div className={`${estilos.modal} ${ativo ? estilos.ativo : ""}` }>

					<div className={estilos.painel} >
						<div className={estilos.splitRegistro}>
							<h1>Olá amigo!</h1>
							<p>Crie sua conta agora para prosseguir e acessar todas as funcionalidades do site</p>
							<button className={estilos.buttonSplit} onClick={() => setAtivo(true)}>Registrar-se</button>
						</div>

						<div className={estilos.splitLogin}>
							<h1>Bem vindo de volta!</h1>
							<p>Faça login agora mesmo para prosseguir e acessar todas as funcionalidades</p>
							<button className={estilos.buttonSplit} onClick={() => setAtivo(false)}>Entrar</button>
						</div>
					</div>


					{/*---------------- LOGIN ----------------*/}
					<form className={estilos.formLogin} onSubmit={handleSubmit(autenticarUsuario)}>
						<div className={estilos.login}>
							<h1>Fazer login</h1>

							<div className={estilos.containerIcones}>
								<FaFacebook className={estilos.icone} />
								<IoLogoGoogle className={estilos.icone} />
								<FaLinkedin className={estilos.icone} />
								<FaGithub className={estilos.icone} />
							</div>

							<p>ou use seu email e senha</p>

							<input placeholder="Email" type='text' {...register('email')} />
							{ errors.email && <p className={estilos.mensagem}>{errors.email.message}</p> }

							<input placeholder='Senha' type='password' {...register('senha')}/>
							{ errors.senha && <p className={estilos.mensagem}>{errors.senha.message}</p> }

							<button className={estilos.buttonEnviar}>Entrar</button>
						</div>
					</form>



					{/*---------------- REGISTRO ----------------*/}
					<form className={estilos.formRegistrar} onSubmit={handleSubmit(criarUsuario)}>
						<div className={estilos.registrar}>
							<h1>Registrar conta</h1>

							<div className={estilos.containerIcones}>
								<FaFacebook className={estilos.icone} />
								<IoLogoGoogle  className={estilos.icone} />
								<FaLinkedin className={estilos.icone} />
								<FaGithub className={estilos.icone} />
							</div>

							<p>ou use seu email e senha</p>

							<input placeholder='Nome' type='text' {...register('nome')} />
							{ errors.nome && <p className={estilos.mensagem}>{errors.nome.message}</p> }

							<input placeholder="Email" type='text' {...register('email')} />
							{ errors.email && <p className={estilos.mensagem}>{errors.email.message}</p> }

							<input placeholder='Senha' type='password' {...register('senha')} />
							{ errors.senha && <p className={estilos.mensagem}>{errors.senha.message}</p> }

							<button className={estilos.buttonEnviar}>Criar</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	)
}

export default Login;