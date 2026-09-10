import estilos from "./RegistrarMovimento.module.css";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { type MovimentoTipo } from "../../types/MovimentoTipo";
import { useProdutos } from "../../contexts/ProdutosContexto";

const registroSchema = z.object({
    produto: z.number().min(1, {
        message: "Informe o produto.",
    }),

    quantidade: z.number().min(1, {
        message: "Informe uma quantidade válida.",
    }),

    data: z.string().min(1, {
        message: "Informe uma data válida.",
    }),

    entrasai: z.string().min(1, {
        message: "Informe se entrou ou saiu.",
    }),

    unitot: z.string().optional(),

    preco: z.number().min(1, {
        message: "Informe um preço válido.",
    }).optional()
});

const RegistrarMovimento = () => {
    const { produtos, editarProduto } = useProdutos();

    const registroForm = useForm<MovimentoTipo>({
        resolver: zodResolver(registroSchema),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = registroForm;

    const registrarMovimento = (data: MovimentoTipo) => {
        const produto = produtos.find(
            (p) => p.codigo === data.produto
        );

        if (!produto) {
            alert("Produto não encontrado!");
            return;
        }

        let novoEstoque = produto.estoque;

        if (data.entrasai === "entrada") {
            novoEstoque += data.quantidade;
        }

        if (data.entrasai === "saida") {
            if (data.quantidade > produto.estoque) {
                alert("Não é possível retirar uma quantidade maior que o estoque.");
                return;
            }

            novoEstoque -= data.quantidade;
        }

        editarProduto({
            ...produto,
            estoque: novoEstoque,
        });

        alert("Movimento registrado com sucesso!");
    };

    return (
        <div className={estilos.container}>
            <div className={estilos.conteudo}>
                <form
                    className={estilos.formRegistrar}
                    onSubmit={handleSubmit(registrarMovimento)}
                >
                    <div className={estilos.registrar}>
                        <h1>Registrar movimento</h1>

                        <div className={estilos.campo}>
                            <label htmlFor="produto">Produto</label>

                            <select {...register("produto", {valueAsNumber: true})}>
                                <option disabled>
                                    Selecione um produto
                                </option>

                                {produtos.map((p) => (
                                    <option
                                        key={p.codigo}
                                        value={p.codigo}
                                    >
                                        {p.nome}
                                    </option>
                                ))}
                            </select>

                            {errors.produto && (
                                <p className={estilos.mensagem}>
                                    {errors.produto.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <label htmlFor="quantidade">
                                Quantidade
                            </label>

                            <input
                                id="quantidade"
                                placeholder="Quantidade"
                                type="number"
                                {...register("quantidade", {
                                    valueAsNumber: true,
                                })}
                            />

                            {errors.quantidade && (
                                <p className={estilos.mensagem}>
                                    {errors.quantidade.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <label htmlFor="estoque">Data</label>

                            <input
                                id="estoque"
                                type="date"
                                {...register("data")}
                            />

                            {errors.data && (
                                <p className={estilos.mensagem}>
                                    {errors.data.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <label htmlFor="entrasai">
                                Entrada ou saída
                            </label>

                            <select {...register("entrasai")}>
                                <option value="" disabled>
                                    Selecionar
                                </option>

                                <option value="entrada">
                                    Entrada
                                </option>

                                <option value="saida">
                                    Saída
                                </option>
                            </select>

                            {errors.entrasai && (
                                <p className={estilos.mensagem}>
                                    {errors.entrasai.message}
                                </p>
                            )}
                        </div>

                        <div className={estilos.campo}>
                            <label
                                htmlFor="preco"
                                className={estilos.unitotLabel}
                            >
                                Preço
                            </label>

                            <p className={estilos.alerta}>
                                *Esse campo é opcional e só deve ser
                                preenchido caso o preço do produto seja
                                diferente do cadastrado*
                            </p>

                            <input
                                id="preco"
                                placeholder="Preço"
                                type="number"
                                {...register("preco", {
                                    setValueAs: (valor) => valor === "" ? undefined : Number(valor),
                                })}
                            />

                            <select
                                className={estilos.unitot}
                                {...register("unitot")}
                            >
                                <option disabled>
                                    Selecionar
                                </option>

                                <option value="uni">
                                    Unidade
                                </option>

                                <option value="tot">
                                    Total
                                </option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className={estilos.buttonEnviar}
                        >
                            Criar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrarMovimento;