import FormCadUsuario from "./formularios/FormCadUsuario.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaUsuarios from "./tabelas/TabelaUsuarios.jsx";
import { usuarios } from "../../dados/mockUsuarios.js";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";

export default function TelaCadUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState(usuarios);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        login: "",
        nome: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        senha: ""
    });

    return (
        <Pagina>
            <Container>
                <Alert className="mt-2 mb-2 text-center">
                    <h2>
                        Usuários
                    </h2>
                </Alert>
            </Container>
            {
                exibirTabela ?
                    <TabelaUsuarios listaDeUsuarios={listaDeUsuarios}
                        setListaDeUsuarios={setListaDeUsuarios}
                        setModoEdicao={setModoEdicao}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadUsuario listaDeUsuarios={listaDeUsuarios}
                        setListaDeUsuarios={setListaDeUsuarios}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        usuarioSelecionado={usuarioSelecionado}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}