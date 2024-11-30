import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState } from "react";
import { atualizarCategoria, incluirCategoria } from "../../../redux/categoriaReducer.js"
import { useDispatch } from "react-redux";


export default function FormCadCategoria(props) {
    const despachante = useDispatch();
    const [categoria, setCategoria] = useState(props.categoriaSelecionada);
    const [formValidado, setFormValidado] = useState(false);
    const categoriaVazia = {
        codigo: 0,
        descricao: ""
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao)
                despachante(incluirCategoria(categoria));
            else {
                despachante(atualizarCategoria(categoria));
                props.setModoEdicao(false);
            }
            props.setCategoriaSelecionada(categoriaVazia);
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
        setCategoria({ ...categoria, [elemento]: valor });
        console.log(`componente: ${elemento} : ${valor}`);
    }

    function voltar() {
        props.setExibirTabela(true);
        props.setModoEdicao(false);
        props.setCategoriaSelecionada(categoriaVazia);
    }

    return (
        <Container className="mt-02 mb-02">
            <Row className=" d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-4">
                                    {
                                        props.modoEdicao ?
                                            "Alteração de Categoria" :
                                            "Cadastro de Categorias"
                                    }
                                </p>
                                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Código</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="codigo"
                                                name="codigo"
                                                placeholder="Digite o código"
                                                value={categoria.codigo}
                                                onChange={manipularMudanca}
                                                disabled
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="descricao">
                                            <Form.Label>Descrição</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="descricao"
                                                name="descricao"
                                                placeholder="Digite a descrição"
                                                value={categoria.descricao}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col md={1}>
                                            <div className="mt-2 mb-2">
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
                                            <div className="mt-2 mb-2">
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