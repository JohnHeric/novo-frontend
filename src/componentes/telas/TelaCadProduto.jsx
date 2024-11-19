import FormCadProduto from "./formularios/FormCadProduto.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaProdutos from "./tabelas/TabelaProdutos.jsx";
import { Alert, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { consultarProduto } from "../../servicos/servicoProduto.js";
//import { produtos } from "../../dados/mockProdutos.js";

export default function TelaCadProduto(props) {
    //const [produtos, setProdutos] = useState([]);
    const [listaDeProdutos, setListaDeProdutos] = useState([]);
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        codigo: 0,
        descricao: "",
        precoCusto: "",
        precoVenda: "",
        qtdEstoque: "",
        urlImagem: "",
        dataValidade: "",
        categoria: {
            codigo: 0,
            descricao: ""
        },
        fornecedor: {
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
        }
    });

    useEffect(() => {
        consultarProduto().then((lista) => {
            setListaDeProdutos(lista);
        });
    }, []); // listaVazia -> didMount

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
                    <TabelaProdutos listaDeProdutos={listaDeProdutos}
                        setListaDeProdutos={setListaDeProdutos}
                        setModoEdicao={setModoEdicao}
                        setProdutoSelecionado={setProdutoSelecionado}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadProduto listaDeProdutos={listaDeProdutos}
                        setListaDeProdutos={setListaDeProdutos}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        produtoSelecionado={produtoSelecionado}
                        setProdutoSelecionado={setProdutoSelecionado}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}