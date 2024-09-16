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
                                    <h3>Dados Pessoais</h3>

                                    <Row className="mt-4">
                                        <Form.Group as={Col} className="mb-3" controlId="cpf">
                                            <Form.Label className="text-center">CPF</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="cpf"
                                                name="cpf"
                                                placeholder="Digite o seu CPF"
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="nome">
                                            <Form.Label className="text-center">Nome</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="nome"
                                                name="nome"
                                                placeholder="Nome Completo"
                                                required
                                            />
                                        </Form.Group>
                                    </Row>

                                    <h2>Endereço</h2>
                                    <Row className="mt-4">
                                        <Form.Group as={Col} className="mb-3" controlId="endereco">
                                            <Form.Label className="text-center">Endereço</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="endereco"
                                                name="endereco"
                                                placeholder="Digite o nome da Rua ou Av."
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="numero">
                                            <Form.Label className="text-center">Número</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="numero"
                                                name="numero"
                                                placeholder="Digite o e-mail"
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="bairro">
                                            <Form.Label className="text-center">Bairro</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="bairro"
                                                name="bairro"
                                                placeholder="Informe o Bairro"
                                                required
                                            />
                                        </Form.Group>

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
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="uf">
                                            <Form.Label className="text-center">Estado</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="uf"
                                                name="uf"
                                                placeholder="Informe o Estado"
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