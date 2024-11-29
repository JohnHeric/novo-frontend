import FormCadCategoria from "./formularios/FormCadCategoria.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaCategorias from "./tabelas/TabelaCategorias.jsx";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";

export default function TelaCadCategoria(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({
        codigo: 0,
        descricao: ""
    });

    return (
        <Pagina>
            <Container>
                <Alert className="mt-2 mb-2 text-center">
                    <h2>
                        Categorias
                    </h2>
                </Alert>
            </Container>
            {
                exibirTabela ?
                    <TabelaCategorias setModoEdicao={setModoEdicao}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadCategoria modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        categoriaSelecionada={categoriaSelecionada}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}