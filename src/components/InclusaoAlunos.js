import { useState } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";

const InclusaoAlunos = () => {
    const { register, handleSubmit, reset } = useForm();

    const [aviso, setAviso] = useState("");

    const salvar = async (campos) => {
        try {
            const response = await inAxios.post("alunos", campos);
            setAviso(`Ok! Aluno cadastrado com código ${response.data.id}`);
        } catch (error) {
            setAviso(`Erro... Aluno não cadastrado: ${error}`);
        }
        // setTimeout: executa o comando após o tempo indicado (em milissegundos)
        setTimeout(() => {
            setAviso("");
        }, 5000);
        // limpa os campos de formulário para uma nova inclusão
        reset({ nome: "", dtnascimento: "", fone: "", bairro: "", cep: "", curso_id: "" });
    }

    return (
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão de Alunos</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="row mt-2">
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" className="form-control" id="noem" required
                                autoFocus  {...register("nome")} />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="dtnascimento">Data de Nascimento:</label>
                            <input type="date" className="form-control" id="dtnascimento" required
                                {...register("dtnascimento")} />
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="fone">Telefone:</label>
                            <input type="tel" className="form-control" id="fone" required
                                {...register("fone")} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="bairro">Bairro:</label>
                            <input type="text" className="form-control" id="bairro" required
                                {...register("bairro")} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="cep">Cep:</label>
                            <input type="text" className="form-control" id="cep"
                                step="0.01" required {...register("cep")} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="curso_id">Curso:</label>
                            <select class="form-select" type="number" id="curso_id" required {...register("curso_id")}>
                                <option value="1">Análise e Desenvolvimento de Sistemas</option>
                                <option value="2">Marketing Digital</option>
                                <option value="3">Redes de Computadores</option>
                                <option value="4">Ciência de Dados e Inteligência Analítica</option>
                            </select>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-outline-success mt-3 col-sm-2" value="Enviar" />
                <input type="reset" className="btn btn-outline-danger mt-3 right ms-3 col-sm-2" value="Limpar" />
            </form>
            <div className={aviso.startsWith("Ok!") ? "alert alert-success" :
                aviso.startsWith("Erro") ? "alert alert-danger" :
                    ""}>{aviso}</div>
        </div>
    );
};

export default InclusaoAlunos;