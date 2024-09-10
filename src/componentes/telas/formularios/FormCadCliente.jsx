import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function FormCadCliente(props) {
    return (
        <Container className="mt-02 mb-02">
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">Cadastro de Clientes</p>
                                <Form>
                                    <Form.Group as={Col} className="mb-3" controlId="nome">
                                        <Form.Label className="text-center">Nome Completo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            placeholder="Nome completo"
                                            required
                                        />
                                    </Form.Group>
                                    <Row className="mb-3">
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="cpf">
                                            <Form.Label className="text-center">CPF</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="cpf"
                                                name="cpf"
                                                placeholder="Digite o CPF"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="telefone">
                                            <Form.Label>Telefone</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="telefone"
                                                name="telefone"
                                                placeholder="Digite o telefone"
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group as={Col} className="mb-3" controlId="email">
                                        <Form.Label className="text-center">Endereço de e-mail</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="Digite o e-mail"
                                            required
                                        />
                                    </Form.Group>
                                    <h2>Endereço</h2>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="rua">
                                            <Form.Label className="text-center">Rua</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="rua"
                                                name="rua"
                                                placeholder="Informe a Rua"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="numero">
                                            <Form.Label>Nº</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="numero"
                                                name="numero"
                                                placeholder="Informe o Número"
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="cidade">
                                            <Form.Label className="text-center">Cidade</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="cidade"
                                                name="cidade"
                                                placeholder="Informe a Cidade"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="cep">
                                            <Form.Label>CEP</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="cep"
                                                name="cep"
                                                placeholder="Informe o CEP"
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
                                                <Button onClick={() => (
                                                    props.setExibirTabela(true)
                                                )}>
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