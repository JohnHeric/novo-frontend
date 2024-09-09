import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function FormCadCategoria(props) {
    return (
        <Container className="mt-02 mb-02">
            <Row className=" d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">Cadastro de Categorias</p>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="codigo">
                                            <Form.Label className="text-center">Código</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="codigo"
                                                name="codigo"
                                                placeholder="Digite o código"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                        </Form.Group>
                                    </Row>
                                    <Form.Group as={Col} className="mb-3" controlId="descricao">
                                        <Form.Label>Descrição</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="descricao"
                                            name="descricao"
                                            placeholder="Digite a descrição"
                                            required
                                        />
                                    </Form.Group>
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