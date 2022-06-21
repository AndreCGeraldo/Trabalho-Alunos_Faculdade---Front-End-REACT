import { Link } from "react-router-dom";

const MenuSuperior = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="logo3.png" alt="Faculdade Logo" width="200" /></Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Cadastro de Alunos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/manut">Listagem / Manutenções</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resumo">Resumo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MenuSuperior;