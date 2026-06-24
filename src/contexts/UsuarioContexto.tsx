import { createContext, useState } from 'react'
import { type ReactNode } from 'react';

interface UsuarioProviderProps {
    children: ReactNode
}

interface UsuarioTipoContexto {
    emailUsuarioContexto: string;
    senhaUsuarioContexto: string;
    nomeUsuarioContexto: string;
    setEmailUsuarioContexto: (email: string) => void
    setSenhaUsuarioContexto: (senha: string) => void
    setNomeUsuarioContexto: (nome: string) => void
}

export const UsuarioContexto =  createContext<UsuarioTipoContexto>({
    emailUsuarioContexto: "",
    senhaUsuarioContexto: "",
    nomeUsuarioContexto: "",
    setEmailUsuarioContexto: () => {},
    setSenhaUsuarioContexto: () => {},
    setNomeUsuarioContexto: () => {}
})

export const UsuarioProvider = ({children}: UsuarioProviderProps) => {

    const [emailUsuarioContexto, setEmailUsuarioContexto] = useState('')
    const [senhaUsuarioContexto, setSenhaUsuarioContexto] = useState('')
    const [nomeUsuarioContexto, setNomeUsuarioContexto] = useState('')

    return(
        <UsuarioContexto.Provider value={{  emailUsuarioContexto,
                                            setEmailUsuarioContexto,
                                            senhaUsuarioContexto,
                                            setSenhaUsuarioContexto,
                                            nomeUsuarioContexto,
                                            setNomeUsuarioContexto
                                        }}
        >

            {children}
        </UsuarioContexto.Provider>
    )
}