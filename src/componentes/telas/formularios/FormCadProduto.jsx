import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function FormCadProduto(props) {
    return (
        <Container className="mt-02 mb-02">
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">Cadastro de Produtos</p>
                                <Form>
                                    <Form.Group as={Col} className="mb-3" controlId="descricao">
                                        <Form.Label className="text-center">Descrição</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="descricao"
                                            name="descricao"
                                            placeholder="Descrição do Produto"
                                            required
                                        />
                                    </Form.Group>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="codigo">
                                            <Form.Label className="text-center">Código</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="codigo"
                                                name="codigo"
                                                placeholder="Código do Produto"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="qtdeEstoque">
                                            <Form.Label>Estoque</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="precoCusto">+</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    id="qtdeEstoque"
                                                    name="qtdeEstoque"
                                                    aria-describedby="qtdeEstoque"
                                                    placeholder="Quantidade em Estoque"
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="precoCusto">
                                            <Form.Label className="text-center">Preço de Custo</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="precoCusto">R$</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    id="precoCusto"
                                                    name="precoCusto"
                                                    aria-describedby="precoCusto"
                                                    placeholder="Preço de Custo"
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="precoVenda">
                                            <Form.Label>Preço de Venda</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="precoCusto">+</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    id="precoVenda"
                                                    name="precoVenda"
                                                    aria-describedby="precoVenda"
                                                    placeholder="Preço de Venda"
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="urlImagem">
                                            <Form.Label className="text-center">URL da Imagem</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="urlImagem"
                                                name="urlImagem"
                                                placeholder="URL da Imagem"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="dataValidade">
                                            <Form.Label>Validade</Form.Label>
                                            <Form.Control
                                                type="date"
                                                id="dataValidade"
                                                name="dataValidade"
                                                placeholder="Data de Validade"
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col md={1}>
                                            <div className="mb-2 mt-2">
                                                <Button>
                                                    Cadastrar
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col md={{ offset: 1 }}>
                                            <div className="mb-2 mt-2">
                                                <Button onClick={() => {
                                                    props.setExibirTabela(true)
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