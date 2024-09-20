import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState } from "react";

export default function FormCadFornecedor(props) {
    const fornecedorVazio = {
        razaoSocial: "",
        cnpj: "",
        nomeFantasia: "",
        telefone: "",
        rua: "",
        numero: "",
        cidade: "",
        cep: ""
    }

    const [formValidado, setFormValidado] = useState(false);
    const estadoFornecedor = props.fornecedorSelecionado;
    const [fornecedor, setFornecedor] = useState(estadoFornecedor);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeFornecedores([...props.listaDeFornecedores, fornecedor]);
            } else {
                props.setListaDeFornecedores([...props.listaDeFornecedores.map((item) => {
                    return item.cnpj === fornecedor.cnpj ? fornecedor : item;
                })]);
                props.setModoEdicao(false);
                props.setFornecedorSelecionado(fornecedorVazio);
            }
            props.setExibirTabela(true)
            setFornecedor(fornecedorVazio);
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
        setFornecedor({ ...fornecedor, [elemento]: valor });
        console.log(`componente: ${elemento} : ${valor}`);
    }

    return (
        <Container className="mt-02 mb-02">
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
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
                                            <Form.Label className="text-center">Razão Social</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="razaoSocial"
                                                name="razaoSocial"
                                                placeholder="Digite a Razão Social"
                                                value={fornecedor.razaoSocial}
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
                                                        <Form.Label className="text-center">CNPJ</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            id="cnpj"
                                                            name="cnpj"
                                                            placeholder="Digite o CNJP"
                                                            value={fornecedor.cnpj}
                                                            onChange={manipularMudanca}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </fieldset> :

                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">CNPJ</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="cnpj"
                                                        name="cnpj"
                                                        placeholder="Digite o CNJP"
                                                        value={fornecedor.cnpj}
                                                        onChange={manipularMudanca}
                                                        required
                                                    />
                                                </Form.Group>
                                        }
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label>Telefone</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="telefone"
                                                name="telefone"
                                                placeholder="Digite o Telefone"
                                                value={fornecedor.telefone}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <h2>Endereço</h2>
                                    <Row className="mt-4">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Endereço</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="endereco"
                                                name="endereco"
                                                placeholder="Digite o nome da Rua ou Av."
                                                value={fornecedor.endereco}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Número</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="numero"
                                                name="numero"
                                                placeholder="Informe o número da residência"
                                                value={fornecedor.numero}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Bairro</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="bairro"
                                                name="bairro"
                                                placeholder="Informe o Bairro"
                                                value={fornecedor.bairro}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Cidade</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="cidade"
                                                name="cidade"
                                                placeholder="Informe a Cidade"
                                                value={fornecedor.cidade}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Estado</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="uf"
                                                name="uf"
                                                placeholder="Informe o Estado"
                                                value={fornecedor.uf}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label>CEP</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="cep"
                                                name="cep"
                                                placeholder="Informe o CEP"
                                                value={fornecedor.cep}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col md={1}>
                                            <div className="mb-2 mt-2">
                                                <Button type="submit">
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
                                                    props.setExibirTabela(true)
                                                    props.setModoEdicao(false)
                                                    props.setFornecedorSelecionado(fornecedorVazio)
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
        </Container>
    );
}