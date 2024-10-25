import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState } from "react";

export default function FormCadusuario(props) {
    const usuarioVazio = {
        cpf: "",
        nome: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
    };

    const [formValidado, setFormValidado] = useState(false);
    const estadoUsuario = props.usuarioSelecionado;
    const [usuario, setUsuario] = useState(estadoUsuario);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeUsuarios([...props.listaDeUsuarios, usuario]);
            } else {
                props.setListaDeUsuarios([...props.listaDeUsuarios.map((item) => {
                    return item.login === usuario.login ? usuario : item;
                })]);
                props.setModoEdicao(false);
                props.setUsuarioSelecionado(usuarioVazio);
            }
            props.setExibirTabela(true);
            setUsuario(usuarioVazio);
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
        setUsuario({ ...usuario, [elemento]: valor });
        console.log(`componente: ${elemento} : ${valor}`);
    }

    function voltar() {
        props.setExibirTabela(true);
        props.setModoEdicao(false);
        props.setUsuarioSelecionado(usuarioVazio);
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
                                            "Alteração de usuario" :
                                            "Cadastro de usuario"
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
                                                value={usuario.nome}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    {
                                        props.modoEdicao ?
                                            <Row>
                                                <fieldset disabled>
                                                    <Form.Group as={Col} className="mb-3">
                                                        <Form.Label className="text-center">Login</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            id="login"
                                                            name="login"
                                                            placeholder="Digite o nome de usuário desejado"
                                                            value={usuario.login}
                                                            onChange={manipularMudanca}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </fieldset>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">Nova Senha</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        id="senha"
                                                        name="senha"
                                                        placeholder="Digite sua nova senha"
                                                        value={usuario.senha}
                                                        onChange={manipularMudanca}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Row> :
                                            <Row>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">Login</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="login"
                                                        name="login"
                                                        placeholder="Digite o nome de usuário desejado"
                                                        value={usuario.login}
                                                        onChange={manipularMudanca}
                                                        required
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">Senha</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        id="senha"
                                                        name="senha"
                                                        placeholder="Digite sua nova senha"
                                                        value={usuario.senha}
                                                        onChange={manipularMudanca}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Row>
                                    }
                                    <h2>Endereço</h2>
                                    <Row className="mt-4">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Endereço</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="endereco"
                                                name="endereco"
                                                placeholder="Digite o nome da Rua ou Av."
                                                value={usuario.endereco}
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
                                                value={usuario.numero}
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
                                                value={usuario.bairro}
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
                                                value={usuario.cidade}
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
                                                value={usuario.uf}
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
                                                value={usuario.cep}
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
        </Container >
    );
}