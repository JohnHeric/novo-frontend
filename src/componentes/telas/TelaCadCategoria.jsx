import FormCadCategoria from "./formularios/FormCadCategoria.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaCategorias from "./tabelas/TabelaCategorias.jsx"
import { categorias } from "../../dados/mockCategorias.js"
import { Alert } from "react-bootstrap";
import { useState } from "react"

export default function TelaCadCategoria(props) {
    const [exibirTabela, setExibirTabela] = useState(true);

    return (
        <Pagina>
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Categorias
                </h2>
            </Alert>
            {
                exibirTabela ?
                    <TabelaCategorias listaDeCategorias={categorias} setExibirTabela={setExibirTabela} /> :
                    <FormCadCategoria setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}