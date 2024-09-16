import FormCadProduto from "./formularios/FormCadProduto.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaProdutos from "./tabelas/TabelaProdutos.jsx";
import { produtos } from "../../dados/mockProdutos.js";
import { Alert } from "react-bootstrap"
import { useState } from "react";

export default function TelaCadProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeProdutos, setListaDeProdutos] = useState(produtos);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        codigo: 0,
        descricao: "",
        precoCusto: "",
        precoVenda: "",
        qtdEstoque: "",
        urlImagem: "",
        dataValidade: ""
    });

    return (
        <Pagina>
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Produtos
                </h2>
            </Alert>
            {
                exibirTabela ?
                    <TabelaProdutos listaDeProdutos={listaDeProdutos}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        produtoSelecionado={produtoSelecionado}
                        setProdutoSelecionado={setProdutoSelecionado}
                        setListaDeProdutos={setListaDeProdutos}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadProduto listaDeProdutos={listaDeProdutos}
                        produtoSelecionado={produtoSelecionado}
                        setProdutoSelecionado={setProdutoSelecionado}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        setListaDeProdutos={setListaDeProdutos}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}