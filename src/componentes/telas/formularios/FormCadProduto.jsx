import { Button, Card, Col, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { consultarCategoria } from "../../../servicos/servicoCategoria.js"
import { gravarProduto, alterarProduto } from "../../../servicos/servicoProduto.js";
import toast, { Toaster } from "react-hot-toast";

export default function FormCadProduto(props) {
    const [produto, setProduto] = useState(props.produtoSelecionado);
    const [formValidado, setFormValidado] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [temCategorias, setTemCategorias] = useState(false);

    useEffect(() => {
        consultarCategoria().then((resultado) => {
            if (Array.isArray(resultado)) {
                setCategorias(resultado);
                setTemCategorias(true);
                toast.success("Categorias Carregadas com Sucesso!");
            }
            else
                toast.error("Não foi possível carregar as categorias!");
        }).catch((erro) => {
            setTemCategorias(false);
            toast.error("Não foi possível carregar as categorias!");
        });
    }, []); // Para que o useEffect tenha o efeito de um didMount o segundo parâmetro deve ser um vetor VAZIO!

    function selecionarCategoria(evento) {
        setProduto({
            ...produto, categoria: {
                codigo: evento.currentTarget.value
            }
        });
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                gravarProduto(produto)
                    .then((resultado) => {
                        if (resultado.status) {
                            props.setExibirTabela(true);
                            toast.success("Produto cadastrado com sucesso!");
                        }
                        else
                            toast.error(resultado.mensagem);
                    });
                // Nosso cadastro, anteriormente, salvava o produto em uma lista de dados mockados.
                // props.setListaDeProdutos([...props.listaDeProdutos, produto]); // Array vazio está recebendo o conteúdo da lista espalhada mais o produto
                // Exibir tabela com o produto incluído
                // props.setExibirTabela(true);
            } else {
                alterarProduto(produto)
                    .then((resultado) => {
                        if (resultado.status) {
                            props.setModoEdicao(false);
                            toast.success("Produto alterado com sucesso!");
                        }
                        else
                            toast.error(resultado.mensagem);
                    });
                // Não é necessário esparramar a lista pois o .map retorna um novo array
                // props.setListaDeProdutos([...props.listaDeProdutos.map((item) => ...
                // props.setListaDeProdutos(props.listaDeProdutos.map((item) => {
                //     return item.codigo === produto.codigo ? produto : item;
                //}));
                // O algoritmo abaixo excluia o elemento alterado e adicionava-o no final, desordenando a lista
                // props.setListaDeProdutos([...props.listaDeProdutos.filter((item) => item.codigo !== produto.codigo), produto]);
                //props.setModoEdicao(false);
            }
            props.setExibirTabela(true)
            props.setProdutoSelecionado({
                codigo: 0,
                descricao: "",
                precoCusto: "",
                precoVenda: "",
                qtdEstoque: "",
                urlImagem: "",
                dataValidade: "",
                categoria: {}
            });
            setFormValidado(false);
        } else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setProduto({ ...produto, [elemento]: valor });
        console.log(`componente: ${elemento} : ${valor}`);
    }

    function voltar() {
        props.setExibirTabela(true);
        props.setModoEdicao(false);
        props.setProdutoSelecionado({
            codigo: 0,
            descricao: "",
            precoCusto: "",
            precoVenda: "",
            qtdEstoque: "",
            urlImagem: "",
            dataValidade: "",
            categoria: {}
        });
    }

    return (
        <Container className="mt-02 mb-02">
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-4">
                                    {
                                        props.modoEdicao ?
                                            "Alteração de Produto" :
                                            "Cadastro de Produtos"
                                    }
                                </p>
                                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Descrição</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="descricao"
                                                name="descricao"
                                                placeholder="Descrição do Produto"
                                                value={produto.descricao}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        {
                                            props.modoEdicao ?
                                                <fieldset disabled>
                                                    <Form.Group as={Col} className="mb-3">
                                                        <Form.Label className="text-center">Código</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            id="codigo"
                                                            name="codigo"
                                                            placeholder="Código do Produto"
                                                            value={produto.codigo}
                                                            // Ao invés de usar o fieldset disabled, poderia desabilitar o modo de edição apenas neste campo
                                                            // disabled = {props.modoEdicao}
                                                            onChange={manipularMudanca}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </fieldset> :

                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">Código</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="codigo"
                                                        name="codigo"
                                                        placeholder="Código do Produto"
                                                        value={produto.codigo}
                                                        onChange={manipularMudanca}
                                                        required
                                                    />
                                                </Form.Group>
                                        }
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label>Estoque</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="qtdEstoque">+</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    id="qtdEstoque"
                                                    name="qtdEstoque"
                                                    aria-describedby="qtdEstoque"
                                                    placeholder="Quantidade em Estoque"
                                                    value={produto.qtdEstoque}
                                                    onChange={manipularMudanca}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Preço de Custo</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="precoCusto">R$</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    id="precoCusto"
                                                    name="precoCusto"
                                                    aria-describedby="precoCusto"
                                                    placeholder="Preço de Custo"
                                                    value={produto.precoCusto}
                                                    onChange={manipularMudanca}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label>Preço de Venda</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="precoVenda">+</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    id="precoVenda"
                                                    name="precoVenda"
                                                    aria-describedby="precoVenda"
                                                    placeholder="Preço de Venda"
                                                    value={produto.precoVenda}
                                                    onChange={manipularMudanca}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">URL da Imagem</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="urlImagem"
                                                name="urlImagem"
                                                placeholder="URL da Imagem"
                                                value={produto.urlImagem}
                                                onChange={manipularMudanca}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Validade</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="dataValidade"
                                                name="dataValidade"
                                                placeholder="Data de Validade"
                                                value={produto.dataValidade}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md={7} className="mb-3">
                                            <Form.Label>Categoria</Form.Label>
                                            <Form.Select id="categoria" name="categoria" onChange={selecionarCategoria}>
                                                <option value="" selected disabled>Selecione uma categoria</option>
                                                {
                                                    // Criar em tempo de execução as categorias existentes no banco de dados
                                                    categorias.map((categoria) => {
                                                        return <option value={categoria.codigo}>
                                                            {categoria.descricao}
                                                        </option>;
                                                    })
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} md={1} className="mt-4">
                                            <Form.Label>     </Form.Label>
                                            {
                                                !temCategorias ?
                                                    <Spinner className="mt-2" animation="border" role="status" variant="primary">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner> :
                                                    ""
                                            }
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col md={1}>
                                            <div className="mb-2 mt-2">
                                                <Button type="submit" disabled={!temCategorias}>
                                                    {
                                                        props.modoEdicao ?
                                                            "Alterar" :
                                                            "Cadastrar"
                                                    }
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col md={{ offset: 1 }}>
                                            <div className="mb-2 mt-2">
                                                <Button onClick={() => {
                                                    voltar();
                                                }}>
                                                    Voltar
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Toaster position="top-center" />
        </Container >
    );
}