import FormCadFornecedor from "./formularios/FormCadFornecedor.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaFornecedores from "./tabelas/TabelaFornecedores.jsx";
import { Alert, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { consultarFornecedor } from "../../servicos/servicoFornecedor.js";

export default function TelaCadFornecedor(props) {
    const [listaDeFornecedores, setListaDeFornecedores] = useState([]);
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

    useEffect(() => {
        consultarFornecedor().then((lista) => {
            setListaDeFornecedores(lista);
        });
    }, []); // listaVazia -> didMount

    useEffect(() => {
        consultarFornecedor().then((lista) => {
            setListaDeFornecedores(lista);
        });
    }, [listaDeFornecedores]); // listaVazia -> didMount

    return (
        <Pagina>
            <Container>
                <Alert className="mt-2 mb-2 text-center">
                    <h2>
                        Fornecedores
                    </h2>
                </Alert>
            </Container>
            {
                exibirTabela ?
                    <TabelaFornecedores listaDeFornecedores={listaDeFornecedores}
                        setListaDeFornecedores={setListaDeFornecedores}
                        setModoEdicao={setModoEdicao}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadFornecedor listaDeFornecedores={listaDeFornecedores}
                        setListaDeFornecedores={setListaDeFornecedores}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        fornecedorSelecionado={fornecedorSelecionado}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    )
}