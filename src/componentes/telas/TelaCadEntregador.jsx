import FormCadEntregador from "./formularios/FormCadEntregador.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaEntregadores from "./tabelas/TabelaEntregadores.jsx";
import { entregadores } from "../../dados/mockEntregadores.js";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";

export default function TelaCadEntregador(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeEntregadores, setListaDeEntregadores] = useState(entregadores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState({
        cpf: "",
        nome: "",
        cnh: "",
        dataNasc: "",
        veiculo: "",
        ano: ""
    });

    return (
        <Pagina>
            <Container>
                <Alert className="mt-2 mb-2 text-center">
                    <h2>
                        Entregadores
                    </h2>
                </Alert>
            </Container>
            {
                exibirTabela ?
                    <TabelaEntregadores listaDeEntregadores={listaDeEntregadores}
                        setListaDeEntregadores={setListaDeEntregadores}
                        setModoEdicao={setModoEdicao}
                        setEntregadorSelecionado={setEntregadorSelecionado}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadEntregador listaDeEntregadores={listaDeEntregadores}
                        setListaDeEntregadores={setListaDeEntregadores}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        entregadorSelecionado={entregadorSelecionado}
                        setEntregadorSelecionado={setEntregadorSelecionado}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}