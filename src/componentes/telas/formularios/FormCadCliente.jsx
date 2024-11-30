import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState } from "react";
import { atualizarCliente, incluirCliente } from "../../../redux/clienteReducer.js"
import { useDispatch } from "react-redux";

export default function FormCadCliente(props) {
    const despachante = useDispatch();
    const [cliente, setCliente] = useState(props.clienteSelecionado);
    const [formValidado, setFormValidado] = useState(false);
    const clienteVazio = {
        codigo: 0,
        cpf: "",
        nome: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao)
                despachante(incluirCliente(cliente));
            else {
                despachante(atualizarCliente(cliente));
                props.setModoEdicao(false);
            }
            props.setClienteSelecionado(clienteVazio);
            props.setExibirTabela(true);
            setFormValidado(false);
        } else
            setFormValidado(true);
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setCliente({ ...cliente, [elemento]: valor });
        console.log(`componente: ${elemento} : ${valor}`);
    }

    function voltar() {
        props.setExibirTabela(true);
        props.setModoEdicao(false);
        props.setClienteSelecionado(clienteVazio);
    }

    return (
        <Container className="mt-02 mb-02">
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-3">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-4">
                                    {
                                        props.modoEdicao ?
                                            "Alteração de Cliente" :
                                            "Cadastro de Cliente"
                                    }
                                </p>
                                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                                    <h3>Dados Pessoais</h3>
                                    <Row className="mt-4">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Nome</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="nome"
                                                name="nome"
                                                placeholder="Nome Completo"
                                                value={cliente.nome}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Código</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="codigo"
                                                name="codigo"
                                                placeholder="Código do Usuário"
                                                value={cliente.codigo}
                                                onChange={manipularMudanca}
                                                disabled
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">CPF</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="cpf"
                                                name="cpf"
                                                placeholder="Digite o seu CPF"
                                                value={cliente.cpf}
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
                                                value={cliente.endereco}
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
                                                value={cliente.numero}
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
                                                value={cliente.bairro}
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
                                                value={cliente.cidade}
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
                                                value={cliente.uf}
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
                                                value={cliente.cep}
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
        </Container>
    );
}