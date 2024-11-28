import { Button, Card, Col, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { consultarCategoria } from "../../../servicos/servicoCategoria.js";
import { consultarFornecedor } from "../../../servicos/servicoFornecedor.js"
import { atualizarProduto, incluirProduto } from "../../../redux/produtoReducer.js"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function FormCadProduto(props) {
    const despachante = useDispatch();
    const [produto, setProduto] = useState(props.produtoSelecionado);
    const [formValidado, setFormValidado] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [fornecedores, setFornecedores] = useState([]);
    const [temCategorias, setTemCategorias] = useState(false);
    const [temFornecedores, setTemFornecedores] = useState(false);
    const produtoVazio = {
        codigo: 0,
        descricao: "",
        precoCusto: 0,
        precoVenda: 0,
        qtdEstoque: 0,
        urlImagem: "",
        dataValidade: "",
        categoria: {
            codigo: 1
        },
        fornecedor: {
            codigo: 1
        }
    }

    useEffect(() => {
        consultarFornecedor().then((resultado) => {
            if (Array.isArray(resultado)) {
                setFornecedores(resultado);
                setTemFornecedores(true);
                toast.success("Fornecedores carregados com sucesso!");
            } else
                toast.error("Não foi possível carregar os fornecedores!");
        }).catch((erro) => {
            setTemFornecedores(false);
            toast.error("Não foi possível carregar os fornecedores!" + erro);
        });
    }, []);

    useEffect(() => {
        consultarCategoria().then((resultado) => {
            if (Array.isArray(resultado)) {
                setCategorias(resultado);
                setTemCategorias(true);
                toast.success("Categorias carregadas com sucesso!");
            }
            else
                toast.error("Não foi possível carregar as categorias!");
        }).catch((erro) => {
            setTemCategorias(false);
            toast.error("Não foi possível carregar as categorias! " + erro);
        });
    }, []);

    function selecionarFornecedor(evento) {
        setProduto({
            ...produto, fornecedor: {
                codigo: evento.currentTarget.value
            }
        });
    }

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
            if (!props.modoEdicao)
                despachante(incluirProduto(produto));
            else
                despachante(atualizarProduto(produto));
            props.setExibirTabela(true)
            props.setProdutoSelecionado(produtoVazio);
            setFormValidado(false);
        } else
            setFormValidado(true);
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setProduto({ ...produto, [elemento]: valor });
    }

    function voltar() {
        props.setExibirTabela(true);
        props.setModoEdicao(false);
        props.setProdutoSelecionado(produtoVazio);
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
                                                required />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <fieldset disabled>
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
                                        </fieldset>
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
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Validade</Form.Label>
                                            <Form.Control
                                                type="date"
                                                id="dataValidade"
                                                name="dataValidade"
                                                placeholder="Data de Validade"
                                                value={produto.dataValidade}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} md={7} className="mb-3">
                                            <Form.Label>Categoria</Form.Label>
                                            <Form.Select
                                                id="categoria"
                                                name="categoria"
                                                value={produto.categoria.codigo}
                                                onChange={(evento) => selecionarCategoria(evento)}
                                                required>
                                                <option selected disabled>Selecione uma categoria</option>
                                                {
                                                    categorias?.map((categoria) => {
                                                        return <option key={categoria.codigo} value={categoria.codigo}>
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
                                        <Form.Group as={Col} md={7} className="mb-3">
                                            <Form.Label>Fornecedor</Form.Label>
                                            <Form.Select
                                                id="fornecedor"
                                                name="fornecedor"
                                                value={produto.fornecedor.codigo}
                                                onChange={(evento) => selecionarFornecedor(evento)}
                                                required >
                                                <option selected disabled>Selecione um fornecedor</option>
                                                {
                                                    fornecedores?.map((fornecedor) => {
                                                        return <option key={fornecedor.codigo} value={fornecedor.codigo}>
                                                            {fornecedor.razaoSocial}
                                                        </option>;
                                                    })
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} md={1} className="mt-4">
                                            <Form.Label>     </Form.Label>
                                            {
                                                !temFornecedores ?
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
                                                <Button type="submit" disabled={!temCategorias || !temFornecedores}>
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
                                                <Button onClick={() => { voltar(); }}>
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
        </Container >
    );
}