import FormCadCategoria from "./formularios/FormCadCategoria.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaCategorias from "./tabelas/TabelaCategorias.jsx"
import { categorias } from "../../dados/mockCategorias.js"
import { Alert } from "react-bootstrap";
import { useState } from "react"

export default function TelaCadCategoria(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias, setListaDeCategorias] = useState(categorias);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({
        codigo: 0,
        descricao: ""
    });

    return (
        <Pagina>
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Categorias
                </h2>
            </Alert>
            {
                exibirTabela ?
                    <TabelaCategorias listaDeCategorias={listaDeCategorias}
                        setListaDeCategorias={setListaDeCategorias}
                        setModoEdicao={setModoEdicao}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                        setExibirTabela={setExibirTabela} /> :
                    <FormCadCategoria listaDeCategorias={listaDeCategorias}
                        setListaDeCategorias={setListaDeCategorias}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        categoriaSelecionada={categoriaSelecionada}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}