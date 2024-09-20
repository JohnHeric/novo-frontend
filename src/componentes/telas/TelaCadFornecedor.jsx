import FormCadFornecedor from "./formularios/FormCadFornecedor.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaFornecedores from "./tabelas/TabelaFornecedores.jsx";
import { fornecedores } from "../../dados/mockFornecedores.js"
import { Alert } from "react-bootstrap";
import { useState } from "react"

export default function TelaCadFornecedor(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeFornecedores, setListaDeFornecedores] = useState(fornecedores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
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
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Fornecedores
                </h2>
            </Alert>
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