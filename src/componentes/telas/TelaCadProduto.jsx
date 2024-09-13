import FormCadProduto from "./formularios/FormCadProduto.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaProdutos from "./tabelas/TabelaProdutos.jsx";
import { produtos } from "../../dados/mockProdutos.js";
import { Alert } from "react-bootstrap"
import { useState } from "react";

export default function TelaCadProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);

    return (
        <Pagina>
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Produtos
                </h2>
            </Alert>
            {
                exibirTabela ?
                    <TabelaProdutos listaDeProdutos={produtos} setExibirTabela={setExibirTabela} /> :
                    <FormCadProduto listaDeProdutos={produtos} setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}