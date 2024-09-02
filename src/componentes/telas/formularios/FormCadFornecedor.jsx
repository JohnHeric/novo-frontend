import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function FormCadFornecedor(props) {
    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">Cadastro de Fornecedores</p>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="razaoSocial">
                                            <Form.Label className="text-center">Razão Social</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="razaoSocial"
                                                name="razaoSocial"
                                                placeholder="Digite a Razão Social"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="cnpj">
                                            <Form.Label className="text-center">CNPJ</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="cnpj"
                                                name="cnpj"
                                                placeholder="Digite o CNJP"
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="nomeFantasia">
                                            <Form.Label className="text-center">Nome Fantasia</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="nomeFantasia"
                                                name="nomeFantasia"
                                                placeholder="Digite o nome Fantasia"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="telefone">
                                            <Form.Label>Telefone</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="telefone"
                                                name="telefone"
                                                placeholder="Digite o Telefone"
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group as={Col} className="mb-3" controlId="email">
                                        <Form.Label className="text-center">Endereço de e-mail</Form.Label>
                                        <Form.Control
                                            type="email"
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
                                                placeholder="Informe a rua"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="numero">
                                            <Form.Label>Nº</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="numero"
                                                name="numero"
                                                placeholder="Informe o número"
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
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">
                                            Cadastrar
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}