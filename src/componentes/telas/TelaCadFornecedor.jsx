import FormCadFornecedor from "./formularios/FormCadFornecedor.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaFornecedores from "./tabelas/TabelaFornecedores.jsx";
import { fornecedores } from "../../dados/mockFornecedores.js"
import { Alert } from "react-bootstrap";
import { useState } from "react"

export default function TelaCadFornecedor(props) {
    const [exibirTabela, setExibirTabela] = useState(true);

    return (
        <Pagina>
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Fornecedores
                </h2>
            </Alert>
            {
                exibirTabela ?
                    <TabelaFornecedores listaDeFornecedores={fornecedores} setExibirTabela={setExibirTabela} /> :
                    <FormCadFornecedor setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    )
}