import "./ItemLista.css";

const ItemLista = ({ id, nome, dtnascimento, fone, bairro, cep, nome_curso, excluirClick, alterarClick }) => {
    return (
        <tr>
            <td class="text-center">{id}</td>
            <td>{nome}</td>
            <td>{dtnascimento}</td>
            <td>{fone}</td>
            <td>{bairro}</td>
            <td>{cep}</td>
            <td>{nome_curso}</td>
            <td class="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={excluirClick}>&#10008;</i>
                <i className="altera text-success fw-bold ms-2" title="Alterar" onClick={alterarClick}>&#9999;</i>
            </td>
        </tr>
    );
};

export default ItemLista;