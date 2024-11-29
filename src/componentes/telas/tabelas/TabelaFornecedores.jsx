import { Alert, Button, Container, Spinner, Table } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buscarFornecedores, apagarFornecedor } from "../../../redux/fornecedorReducer.js";
import ESTADO from "../../../redux/estados.js";
import { useNavigate } from "react-router-dom";

export default function TabelaFornecedores(props) {
    const { estado, mensagem, listaDeFornecedores } = useSelector(estado => estado.fornecedor);
    const despachante = useDispatch();
    const navegar = useNavigate();

    function excluirFornecedorSelecionado(fornecedor) {
        if (window.confirm("Deseja realmente excluir o fornecedor " + fornecedor.descricao))
            despachante(apagarFornecedor(fornecedor));
    }

    function alterarFornecedor(fornecedor) {
        props.setModoEdicao(true);
        props.setFornecedorSelecionado(fornecedor);
        props.setExibirTabela(false);
    }

    useEffect(() => {
        despachante(buscarFornecedores());
    }, [despachante]);

    if (estado === ESTADO.PENDENTE) {
        return (
            <Container>
                <Spinner animation="border" role="status"></Spinner>
                <Alert variant="dark">{mensagem}</Alert>
            </Container>
        );
    } else if (estado === ESTADO.ERRO) {
        return (
            <Container>
                <Alert variant="danger">{mensagem}</Alert>
            </Container>
        );
    } else if (estado === ESTADO.OCIOSO) {
        return (
            <Container>
                <Button className="mb-3" variant="primary" onClick={() => {
                    props.setExibirTabela(false);
                }}>
                    Adicionar
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Razão Social</th>
                            <th>CNPJ</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>Numero</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>CEP</th>
                            <th>Produtos</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaDeFornecedores?.map((fornecedor) => {
                                return (
                                    <tr>
                                        <td>{fornecedor.codigo}</td>
                                        <td>{fornecedor.razaoSocial}</td>
                                        <td>{fornecedor.cnpj}</td>
                                        <td>{fornecedor.telefone}</td>
                                        <td>{fornecedor.endereco}</td>
                                        <td>{fornecedor.numero}</td>
                                        <td>{fornecedor.bairro}</td>
                                        <td>{fornecedor.cidade}</td>
                                        <td>{fornecedor.uf}</td>
                                        <td>{fornecedor.cep}</td>
                                        <td>
                                            <Button onClick={() => navegar("/produtosfornecedor?id=" + fornecedor.codigo)}>
                                                Ver
                                            </Button>
                                        </td>
                                        <td>
                                            <Button onClick={() => {
                                                alterarFornecedor(fornecedor);
                                            }} variant="warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                            </Button> <Button onClick={() => {
                                                excluirFornecedorSelecionado(fornecedor);
                                            }} variant="danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <p>Quantidade de fornecedores cadastrados: {listaDeFornecedores ? listaDeFornecedores.length : 0}</p>
            </Container>
        );
    }
}