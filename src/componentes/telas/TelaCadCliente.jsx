import FormCadCliente from "./formularios/FormCadCliente.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaClientes from "./tabelas/TabelaClientes.jsx";
import { Alert, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { consultarCliente } from "../../servicos/servicoCliente.js";

export default function TelaCadCliente(props) {
    const [listaDeClientes, setListaDeClientes] = useState([]);
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

    useEffect(() => {
        consultarCliente().then((lista) => {
            setListaDeClientes(lista);
        });
    }, []); // listaVazia -> didMount

    useEffect(() => {
        consultarCliente().then((lista) => {
            setListaDeClientes(lista);
        });
    }, [listaDeClientes]); // listaVazia -> didMount

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
                    <TabelaClientes listaDeClientes={listaDeClientes}
                        setListaDeClientes={setListaDeClientes}
                        setModoEdicao={setModoEdicao}
                        setClienteSelecionado={setClienteSelecionado}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadCliente listaDeClientes={listaDeClientes}
                        setListaDeClientes={setListaDeClientes}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        clienteSelecionado={clienteSelecionado}
                        setClienteSelecionado={setClienteSelecionado}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}