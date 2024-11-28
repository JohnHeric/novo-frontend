import FormCadProduto from "./formularios/FormCadProduto.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaProdutos from "./tabelas/TabelaProdutos.jsx";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";

export default function TelaCadProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        codigo: 0,
        descricao: "",
        precoCusto: 0,
        precoVenda: 0,
        qtdEstoque: 0,
        urlImagem: "",
        dataValidade: "",
        categoria: {
            codigo: 1,
            descricao: ""
        },
        fornecedor: {
            codigo: 1,
            razaoSocial: "",
            cnpj: "",
            telefone: "",
            endereco: "",
            numero: "",
            bairro: 0,
            cidade: "",
            uf: "",
            cep: ""
        }
    });

    return (
        <Pagina>
            <Container>
                <Alert className="mt-2 mb-2 text-center">
                    <h2>
                        Produtos
                    </h2>
                </Alert>
            </Container>
            {
                exibirTabela ?
                    <TabelaProdutos setModoEdicao={setModoEdicao}
                        setProdutoSelecionado={setProdutoSelecionado}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadProduto modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        produtoSelecionado={produtoSelecionado}
                        setProdutoSelecionado={setProdutoSelecionado}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}