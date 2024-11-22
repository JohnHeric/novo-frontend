import FormCadUsuario from "./formularios/FormCadUsuario.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaUsuarios from "./tabelas/TabelaUsuarios.jsx";
import { Alert, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { consultarUsuario } from "../../servicos/servicoUsuario.js";

export default function TelaCadUsuario(props) {
    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo: 0,
        nome: "",
        login: "",
        senha: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: ""
    });

    useEffect(() => {
        consultarUsuario().then((lista) => {
            setListaDeUsuarios(lista);
        });
    }, []); // listaVazia -> didMount

    useEffect(() => {
        consultarUsuario().then((lista) => {
            setListaDeUsuarios(lista);
        });
    }, [listaDeUsuarios]); // listaVazia -> didMount

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