import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";
import ItemLista from "./ItemLista";

const ManutencaoAlunos = () => {
    const [alunos, setAlunos] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const obterLista = async () => {
        try {
            const lista = await inAxios.get("alunos");
            setAlunos(lista.data);
            console.log(lista.data)
        } catch (error) {
            alert(`Erro... Não foi possível obter os dados: ${error}`);
        }
    };

    // define o método que será executado assim que o componente for renderizado
    useEffect(() => {
        obterLista();
    }, []);

    const filtrarLista = async (campos) => {
        try {
            const lista = await inAxios.get(`alunos/filtro/${campos.palavra}`)
            lista.data.length
                ? setAlunos(lista.data)
                : alert("Não há alunos com a palavra-chave pesquisada...");
        } catch (error) {
            alert(`Erro... Não foi possível obter os dados: ${error}`);
        }
    };

    const excluir = async (id, descricao) => {
        if (!window.confirm(`Confirma a exclusão do aluno "${descricao}"?`)) {
            return;
        }
        try {
            await inAxios.delete(`alunos/${id}`);
            setAlunos(alunos.filter((aluno) => aluno.id !== id));
        } catch (error) {
            alert(`Erro... Não foi possível excluir este aluno: ${error}`);
        }
    };

    const alterar = async (id, curso_id, index) => {
        const novoCurso = Number(prompt(`Informe o ID do novo curso "${curso_id}"`));
        if (isNaN(novoCurso) || novoCurso === 0) {
            return;
        }
        try {
            await inAxios.put(`alunos/${id}`, { curso_id: novoCurso });
            const alunosAlteracao = [...alunos]
            alunosAlteracao[index].curso_id = novoCurso;
            setAlunos(alunosAlteracao);
        } catch (error) {
            alert(`Erro... Não foi possível alterar para este curso: ${error}`);
        }
    };



    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="fst-italic mt-3">Listagem / Manutenção</h4>
                </div>
                <div className="col-sm-5">
                    <form onSubmit={handleSubmit(filtrarLista)}>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control"
                                placeholder="Nome, Data de Nasc, Bairro ou Curso" required {...register("palavra")} />
                            <input type="submit" className="btn btn-success" value="Pesquisar" />
                            <input type="button" className="btn btn-warning" value="Todos"
                                onClick={() => { reset({ palavra: "" }); obterLista(); }} />
                        </div>
                    </form>
                </div>
            </div>


            <table className="table table-dark table-striped mt-3">
                <thead>
                    <tr>
                        <th>Cód.</th>
                        <th>Nome</th>
                        <th>Data de Nasc.</th>
                        <th>Telefone</th>
                        <th>Bairro</th>
                        <th>Cep</th>
                        <th>Curso</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno, index) => (
                        <ItemLista
                            key={aluno.id}
                            id={aluno.id}
                            nome={aluno.nome}
                            dtnascimento={aluno.dtnascimento}
                            fone={aluno.fone}
                            bairro={aluno.bairro}
                            cep={aluno.cep}
                            nome_curso={aluno.nome_curso}
                            excluirClick={() => excluir(aluno.id, aluno.nome)}
                            alterarClick={() => alterar(aluno.id, aluno.nome, index)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManutencaoAlunos;