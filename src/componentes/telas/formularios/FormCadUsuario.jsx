import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useContext, useState } from "react";
import { atualizarUsuario, incluirUsuario } from "../../../redux/usuarioReducer.js"
import { useDispatch } from 'react-redux';
import { ContextoUsuario } from '../../../App.js';

export default function FormCadusuario(props) {
    const despachante = useDispatch();
    const [usu, setUsuario] = useState(props.usuarioSelecionado);
    const [formValidado, setFormValidado] = useState(false);
    const [senhaC, setSenhaC] = useState("");
    const { usuario } = useContext(ContextoUsuario)
    const usuarioVazio = {
        codigo: "",
        nome: "",
        login: "",
        senha: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        tipo: 0
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (usu.senha === senhaC) {
            if (form.checkValidity()) {
                if (!props.modoEdicao)
                    despachante(incluirUsuario(usu));
                else {
                    despachante(atualizarUsuario(usu));
                    props.setModoEdicao(false);
                }
                props.setUsuarioSelecionado(usuarioVazio);
                props.setExibirTabela(true);
                setFormValidado(false);
            } else
                setFormValidado(true);
        } else
            window.alert("As senhas não batem")
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setUsuario({ ...usu, [elemento]: valor });
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
                                            "Alteração de usuário" :
                                            "Cadastro de usuário"
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
                                                value={usu.nome}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <fieldset disabled>
                                            <Form.Group as={Col} className="mb-3">
                                                <Form.Label className="text-center">Código</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="codigo"
                                                    name="codigo"
                                                    placeholder="Código do Usuário"
                                                    value={usu.codigo}
                                                    onChange={manipularMudanca}
                                                    required
                                                />
                                            </Form.Group>
                                        </fieldset>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Login</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="login"
                                                name="login"
                                                placeholder="Digite o nome de usuário desejado"
                                                value={usu.login}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    {
                                        props.modoEdicao ?
                                            <Row>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">Nova Senha</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        id="senha"
                                                        name="senha"
                                                        placeholder="Digite sua nova senha"
                                                        value={usu.senha}
                                                        onChange={manipularMudanca}
                                                        required
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">Confirmar Senha</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        id="senha"
                                                        name="senha"
                                                        placeholder="Digite sua nova senha"
                                                        value={senhaC}
                                                        onChange={(e) => setSenhaC(e.target.value)}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Row> :
                                            <Row>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">Senha</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        id="senha"
                                                        name="senha"
                                                        placeholder="Digite sua nova senha"
                                                        value={usu.senha}
                                                        onChange={manipularMudanca}
                                                        required
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">Confirmar Senha</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        id="senha"
                                                        name="senha"
                                                        placeholder="Digite sua nova senha"
                                                        value={senhaC}
                                                        onChange={(e) => setSenhaC(e.target.value)}
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
                                                value={usu.endereco}
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
                                                value={usu.numero}
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
                                                value={usu.bairro}
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
                                                value={usu.cidade}
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
                                                value={usu.uf}
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
                                                value={usu.cep}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group as={Col} md={7} className="mb-3">
                                        <Form.Label>Privilégios de administrador?</Form.Label>
                                        <Form.Select
                                            id="tipo"
                                            name="tipo"
                                            value={usu.tipo}
                                            onChange={manipularMudanca}
                                            disabled={usuario.admin === 0}
                                            required>
                                            <option selected disabled>Selecine uma opção</option>
                                            <option value="0">Não</option>
                                            <option value="1">Sim</option>
                                        </Form.Select>
                                    </Form.Group>
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
        </Container >
    );
}