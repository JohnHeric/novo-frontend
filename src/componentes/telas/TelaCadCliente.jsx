import FormCadCliente from "./formularios/FormCadCliente.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaClientes from "./tabelas/TabelaClientes.jsx";
import { clientes } from "../../dados/mockClientes.js"
import { Alert } from "react-bootstrap";
import { useState } from "react";

export default function TelaCadCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);

    return (
        <Pagina>
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Clientes
                </h2>
            </Alert>
            {
                exibirTabela ?
                    <TabelaClientes listaDeClientes={clientes} setExibirTabela={setExibirTabela} /> :
                    <FormCadCliente setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}