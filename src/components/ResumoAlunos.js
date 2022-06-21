import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { inAxios } from "../config_axios";

const ResumoProdutos = () => {

    const [grafico, setGrafico] = useState([]);

    const obterDados = async () => {
        try {
            const dadosGrafico = await inAxios.get("cursos/resumo");

            // cria um array e adiciona a primeira linha
            const arrayGrafico = [["Instituições", "Cursos Prestados"]];

            // percorre cada linha do JSON e adiciona ao array
            dadosGrafico.data.map((dado) =>
                arrayGrafico.push([dado.instituicao, dado.numero_de_cursos])
            );
            setGrafico(arrayGrafico);

            // console.log(dadosGrafico.data)
        } catch (error) {
            alert(`Erro... Não foi possível obter os dados: ${error}`);
        }
    };

    // define o método que será executado assim que o componente for renderizado
    useEffect(() => {
        obterDados();
    }, []);

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <Chart
                    chartType="PieChart"
                    data={grafico}
                    options={{ title: "INSTITUIÇÕES E CURSOS - 3D", is3D: true }}
                    width={"100%"}
                    height={"800px"}
                />
            </div>
        </div>
    );
};

export default ResumoProdutos;