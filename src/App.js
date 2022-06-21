import { Routes, Route } from "react-router-dom";
import MenuSuperior from "./components/MenuSuperior";
import InclusaoAlunos from "./components/InclusaoAlunos";
import ManutencaoAlunos from "./components/ManutencaoAlunos";
import ResumoAlunos from "./components/ResumoAlunos";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<InclusaoAlunos />} />
        <Route path="manut" element={<ManutencaoAlunos />} />
        <Route path="resumo" element={<ResumoAlunos />} />
      </Routes>
    </Fragment>
  );
}

export default App;
