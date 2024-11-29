import FormCadCliente from "./formularios/FormCadCliente.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaClientes from "./tabelas/TabelaClientes.jsx";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";

export default function TelaCadCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState({
        codigo: 0,
        nome: "",
        cpf: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: ""
    });

    return (
        <Pagina>
            <Container>
                <Alert className="mt-2 mb-2 text-center">
                    <h2>
                        Clientes
                    </h2>
                </Alert>
            </Container>
            {
                exibirTabela ?
                    <TabelaClientes setModoEdicao={setModoEdicao}
                        setClienteSelecionado={setClienteSelecionado}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadCliente modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        clienteSelecionado={clienteSelecionado}
                        setClienteSelecionado={setClienteSelecionado}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}