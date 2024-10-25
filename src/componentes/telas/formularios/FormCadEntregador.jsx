import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState } from "react";

export default function FormCadEntregador(props) {
    const entregadorVazio = {
        cpf: "",
        nome: "",
        cnh: "",
        dataNasc: "",
        veiculo: "",
        ano: ""
    };

    const [formValidado, setFormValidado] = useState(false);
    const estadoEntregador = props.entregadorSelecionado;
    const [entregador, setEntregador] = useState(estadoEntregador);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeEntregadores([...props.listaDeEntregadores, entregador]);
            } else {
                props.setListaDeEntregadores([...props.listaDeEntregadores.map((item) => {
                    return item.cpf === entregador.cpf ? entregador : item;
                })]);
                props.setModoEdicao(false);
                props.setEntregadorSelecionado(entregadorVazio);
            }
            props.setExibirTabela(true);
            setEntregador(entregadorVazio);
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
        setEntregador({ ...entregador, [elemento]: valor });
        console.log(`componente: ${elemento} : ${valor}`);
    }

    function descartarMudancas() {
        props.setExibirTabela(true)
        props.setModoEdicao(false)
        props.setEntregadorSelecionado(entregadorVazio)
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
                                            "Alteração de entregador" :
                                            "Cadastro de entregador"
                                    }
                                </p>
                                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                                    <h3>Dados Pessoais</h3>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Nome</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="nome"
                                                name="nome"
                                                placeholder="Nome Completo"
                                                value={entregador.nome}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        {
                                            props.modoEdicao ?
                                                <fieldset disabled>
                                                    <Form.Group as={Col} className="mb-3">
                                                        <Form.Label className="text-center">CPF</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            id="cpf"
                                                            name="cpf"
                                                            placeholder="Digite o seu CPF"
                                                            value={entregador.cpf}
                                                            onChange={manipularMudanca}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </fieldset> :

                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">CPF</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="cpf"
                                                        name="cpf"
                                                        placeholder="Digite o seu CPF"
                                                        value={entregador.cpf}
                                                        onChange={manipularMudanca}
                                                        required
                                                    />
                                                </Form.Group>
                                        }

                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">CNH</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="cnh"
                                                name="cnh"
                                                placeholder="Digite sua CNH"
                                                value={entregador.cnh}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Veículo</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="veiculo"
                                                name="veiculo"
                                                placeholder="Informe o nome do veículo"
                                                value={entregador.veiculo}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Ano do Veículo</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="ano"
                                                name="ano"
                                                placeholder="Digite o ano do veículo"
                                                value={entregador.ano}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Data de Nascimento</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="dataNasc"
                                                name="dataNasc"
                                                placeholder="Digite sua data de nascimento"
                                                value={entregador.dataNasc}
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
                                                    descartarMudancas();
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