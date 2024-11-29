import FormCadFornecedor from "./formularios/FormCadFornecedor.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaFornecedores from "./tabelas/TabelaFornecedores.jsx";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";

export default function TelaCadFornecedor(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        codigo: 0,
        razaoSocial: "",
        cnpj: "",
        telefone: "",
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
                <Alert className="mt-2 mb-2 text-center" variant="light">
                    <h2>
                        Fornecedores
                    </h2>
                </Alert>
            </Container>
            {
                exibirTabela ?
                    <TabelaFornecedores setModoEdicao={setModoEdicao}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadFornecedor modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        fornecedorSelecionado={fornecedorSelecionado}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    )
}